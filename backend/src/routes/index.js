import express from 'express'
import auth from '../routes/authRoutes.js'
import tasks from '../routes/taksRouter.js'
import cookieParser from 'cookie-parser'


const router = (app) => {
    app.use(cookieParser());
    app.use(express.json(), auth, tasks)
}

export default router