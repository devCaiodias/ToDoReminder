import configEnv from '../config/config.js'
import User from '../models/User.js'
import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthController {
    
    static async register(req, res) {
        const {name, username, email, password, passwordConfirme} = req.body
        
        try {
            if (password !== passwordConfirme) {
                return res.status(422).json({msg: 'As senhas não conferem!'})
            }

            const salt = await bcrypt.genSalt(12)
            const passwordHast = await bcrypt.hash(password, salt)

            const user = new User(
                {
                    name,
                    username,
                    email,
                    password: passwordHast
                }
            )

            await user.validate();
            
            await user.save()

            return res.status(201).json({msg: "User criado com sucesso"})
        } catch (error) {
            return res.status(500).json({mgs: error})
        }
    }

    static async login(req, res) {
        const {username, password} = req.body

        // Validação
        if (!username) {
            res.status(422).json({message: 'Campo username obrigatorio!'})
        }

        if (!password) {
            res.status(422).json({message: 'Campo password obrigatorio!'})
        }

        try {
            const user = await User.findOne({username: username})
            
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({msg: "Credenciais Invalidas "})
            }
            
           const token = jwt.sign({id: user._id}, configEnv.SECRET, {
                expiresIn: '7d',
           })

           res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'None',
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            res.json({ message: 'Login realizado com sucesso!', Token: token ,Usuario: user });
        } catch (error) {
            return res.status(500).json({Error: error})
        }
    }

    static async checkAuth(req, res){
        try {
            const user = await User.findById(req.userId).select('-password')

            if (!user) {
                return res.status(401).json({msg: 'Usuario não encontrado'})
            }

            return res.json({
                isAuthenticated: true,
                user,
            })
        } catch (error) {
             return res.status(500).json({ message: 'Erro interno', error });
        }
    }

    static async logout(_req, res) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        res.json({ message: 'Logout realizado com sucesso!' });
    }
    
    
}

export default AuthController;