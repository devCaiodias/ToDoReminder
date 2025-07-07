import express from 'express'
import auth from '../routes/authRoutes.js'

const router = (app) => {
    app.use(express.json(), auth)
}

export default router