import configEnv from "./src/config/config.js"
import app from "./src/app.js"

app.listen(configEnv.PORT, () => {
    console.log(`Server running on port ${configEnv.PORT}`)
})