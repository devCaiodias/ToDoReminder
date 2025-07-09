import configEnv from '../config/config.js'
import {User} from '../models/User.js'
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

        try {
            Validação
            if (!username) {
                res.status(422).json({message: 'Campo username obrigatorio!'})
            }

            if (!password) {
                res.status(422).json({message: 'Campo password obrigatorio!'})
            }

            
            const user = await User.findOne({username: username})
            
            if (!user) {
                return res.status(422).json({msg: "Usuario n exite"})
            }
            
            const checkPassword = await bcrypt.compare(password, user.password)
            
            if (!checkPassword) {
                return res.status(422).json({msg: "Senha Invalida!"})
            }
        
            const secret = configEnv.SECRET

            const token = jwt.sign({
                id: user.id
            }, secret)

            return res.status(200).json({msg: "User logado!", token})
        } catch (error) {
            return res.status(500).json({Error: error})
        }
    }
    
}

export default AuthController;