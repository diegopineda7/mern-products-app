import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getProducts = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'GET'
    })

    return response
  } catch (e) {
    console.error(e)
  }
}

export const saveProduct = async (productData) => {
  const formData = new FormData()
  formData.append('name', productData.name)
  formData.append('unitaryPrice', productData.unitaryPrice)
  formData.append('size', productData.size)
  formData.append('description', productData.description)
  formData.append('image', productData.image)

  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'POST',
      data: formData
    })

    return response
  } catch (e) {
    console.error(e)
  }
}