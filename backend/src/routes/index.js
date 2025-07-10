import express from 'express'
import auth from '../routes/authRoutes.js'
import cookieParser from 'cookie-parser'

const router = (app) => {
    app.use(cookieParser());
    app.use(express.json(), auth)
}

export default router