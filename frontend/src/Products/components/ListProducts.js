import React, { useEffect, useState } from 'react'
import { getProducts } from '../services'
import Loading from './Loading'

const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      const response = await getProducts()
      if (response.status === 200)
        setProducts(response.data.products)
    }

    loadProducts()
  }, [])


  return (
    <div className='columns is-centered'>
      {
        isLoading
          ? <Loading />
          : 'Listado'
      }
    </div>
  )
}

export default ListProducts