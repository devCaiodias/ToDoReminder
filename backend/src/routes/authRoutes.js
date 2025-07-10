import express from 'express'
import AuthController from '../controllers/AuthControllers.js'
import { authenticateJWT } from '../middlewares/authMiddleware.js'

const routes = express.Router()

routes.post("/auth/register", AuthController.register)
routes.post("/auth/login", AuthController.login)
routes.post("/auth/logout", AuthController.logout)
routes.get("/check-auth", authenticateJWT, AuthController.checkAuth)

export default routes