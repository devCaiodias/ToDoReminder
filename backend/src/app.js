import express from 'express'
import router from './routes/index.js';
import connect from './db/dbconnect.js';
import helmet from 'helmet';
import cors from 'cors';


const db = await connect()

db.on('err', (err) => {
    console.log(`Error the connection data base: ${err}`)
})

db.once('open', () => {
    console.log(`Data base connected successy!`)
})

const app = express()

const allowedOrigins = [
  'http://localhost:3000',
  'https://to-do-reminder-fipx.vercel.app/' // substitua pelo seu domínio do frontend em produção, se tiver
];

// ✅ CORS PRIMEIRO
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
}));

app.use(helmet())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router(app)


export default app;