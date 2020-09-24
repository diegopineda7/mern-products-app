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
  const { host } = appConfig
  this.imgUrl = `${host}/public/${filename}`
}

module.exports = mongoose.model('Products', ProductSchema)
