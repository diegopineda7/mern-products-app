const Schema = require('mongoose').Schema

const ProductSchema = Schema({
  name: String,
  size: Number,
  unitaryPrice: Number,
  imgUrl: String,
  description: String
}, {
  timeStamps: true
})

module.exports = mongoose.model('Products', ProductSchema)
