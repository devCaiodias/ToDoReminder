import express from 'express'
import AuthController from '../controllers/AuthControllers.js'

const routes = express.Router()

routes.post("/auth/register", AuthController.register)
routes.post("/auth/login", AuthController.login)

export default routes