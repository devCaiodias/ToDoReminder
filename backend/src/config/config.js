import dotenv from "dotenv"

dotenv.config()

const configEnv = {
    PORT: process.env.PORT || 8080,
}

export default configEnv