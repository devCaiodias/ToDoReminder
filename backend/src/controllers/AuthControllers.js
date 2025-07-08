import {User} from '../models/User.js'
import bcrypt  from 'bcrypt'

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
    
}

export default AuthController;