import React, { useEffect, useState } from 'react'
import { Container, Modal } from 'react-bulma-components'
import { getProducts, saveProduct } from '../services'
import '../styles.css'
import AddButton from './AddButton'
import Form from './Form'
import Header from './Header'
import ListProducts from './ListProducts'
import Loading from './Loading'

const ProductLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    const response = await getProducts()
    if (response !== undefined && response.status === 200) {
      setProducts(response.data.products)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleSubmit = async (data) => {
    await saveProduct(data)
    loadProducts()
    setIsModalOpen(false)
  }

  return (
    <Container>
      <Header title='Products app' />
      <AddButton onClick={() => setIsModalOpen(true)} />
      {
        isLoading
          ? <Loading />
          : !products.length
            ? <h2 className='title has-text-centered'>You don't have any products</h2>
            : <ListProducts products={products} />
      }
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} className='modal-form'>
        <Modal.Card>
          <Modal.Card.Head onClose={() => setIsModalOpen(false)}>
            <Modal.Card.Title>
              Add product
            </Modal.Card.Title>
          </Modal.Card.Head>
          <Modal.Card.Body>
            <Form handleSubmit={handleSubmit} />
          </Modal.Card.Body>
        </Modal.Card>
      </Modal>
    </Container>
  )
}

export default ProductLayout