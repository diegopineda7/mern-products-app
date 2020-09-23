const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const productRoutes = require('./routes/product')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('../frontend/build'))

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1', productRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../frontend/build'))
} else console.log('dev!')

module.exports = app
