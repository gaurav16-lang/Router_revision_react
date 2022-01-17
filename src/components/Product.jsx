import React from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
  const { id } = useParams()
  return <div>product detail from id : {id}</div>
}

export default Product
