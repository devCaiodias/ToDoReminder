import express from 'express'
import AuthController from '../controllers/AuthControllers.js'

const routes = express.Router()

routes.get("/auth/register", AuthController.register)

export default routes