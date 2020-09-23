import React, { useState } from 'react'
import Loading from './Loading'

const ListProducts = () => {
  const [isLoading, setIsLoading] = useState(true)

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