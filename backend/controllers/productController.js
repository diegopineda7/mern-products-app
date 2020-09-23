const product = require('../models/Product')

const addProduct = async (req, res) => {
  try {
    const { name,
      size,
      unitaryPrice,
      description
    } = req.body

    const product = Product({
      name,
      size,
      unitaryPrice,
      description
    })

    const productStored = await product.save()

    res.status(201).send({ productStored })
  } catch (e) {
    res.status(500).send({ message: e.message })
  }
}

module.exports = {
  addProduct
}