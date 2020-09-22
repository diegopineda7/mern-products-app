require('dotenv').config();
const express = require('express');
const connectDB = require('./db/mongodb');
const { appConfig, dbConfig } = require('./config');

const app = express();

const initApp = async (appConfig, dbConfig) => {
  try {
    await connectDB(dbConfig);
    app.listen(appConfig.port, () => console.log(`Listening on port ${appConfig.port}`));
  } catch (e) {
    console.error(e);
    process.exit(0);
  }
}

initApp(appConfig, dbConfig);
