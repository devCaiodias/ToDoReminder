import dotenv from "dotenv"

dotenv.config()

const configEnv = {
    PORT: process.env.PORT || 8080,
    DB_MONGODB: process.env.DB_MONGODB,
    SECRET: process.env.SECRET,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
}

export default configEnv