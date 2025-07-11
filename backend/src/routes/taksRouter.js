import express from 'express'
import TasksControllers from '../controllers/TasksControllers.js'
import { authenticateJWT } from '../middlewares/authMiddleware.js'

const routes = express.Router()
routes.use(authenticateJWT)

routes.get("/tasks/list", TasksControllers.listTasks)
routes.post("/tasks/createTasks", TasksControllers.createTasks)
routes.put("/tasks/updateTasks/:id", TasksControllers.updateTasks)



export default routes