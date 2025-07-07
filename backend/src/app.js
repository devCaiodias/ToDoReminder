import express from 'express'
import router from './routes/index.js';
import connect from './db/dbconnect.js';

const db = await connect()

db.on('err', (err) => {
    console.log(`Error the connection data base: ${err}`)
})

db.once('open', () => {
    console.log(`Data base connected successy!`)
})

const app = express()
router(app)

export default app;