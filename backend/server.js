require('dotenv').config()
const connectDB = require('./db/mongodb')
const { appConfig, dbConfig } = require('./config')
const app = require('./app')

const initApp = async (appConfig, dbConfig) => {
  try {
    await connectDB(dbConfig)
    app.listen(appConfig.port, () => console.log(`Listening on port ${appConfig.port}`))
  } catch (e) {
    console.error(e)
    process.exit(0)
  }
}

initApp(appConfig, dbConfig)
