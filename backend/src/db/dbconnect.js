import mongoose from 'mongoose';
import configEnv from "../config/config.js"

async function connect() {
    mongoose.connect(configEnv.DB_MONGODB)

    return mongoose.connection
}

export default connect;