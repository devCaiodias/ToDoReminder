import express from 'express'
import AuthController from '../controllers/AuthControllers.js'

const routes = express.Router()

routes.post("/auth/register", AuthController.register)

export default routes