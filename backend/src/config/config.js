import dotenv from "dotenv"

dotenv.config()

const configEnv = {
    PORT: process.env.PORT || 8080,
    DB_MONGODB: process.env.DB_MONGODB,
    SECRET: process.env.SECRET,
    NODE_ENV: process.env.NODE_ENV
}

export default configEnv