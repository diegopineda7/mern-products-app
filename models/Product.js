const mongoose = require('mongoose')
const { appConfig } = require('../config')

const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  size: Number,
  unitaryPrice: Number,
  imgUrl: String,
  description: String
}, {
  timestamps: true
})

ProductSchema.methods.setImgUrl = function (filename) {
  const { host, port } = appConfig
  if (process.env.NODE_ENV === 'production')
    this.imgUrl = `${host}/public/${filename}`
  else
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Products', ProductSchema)
