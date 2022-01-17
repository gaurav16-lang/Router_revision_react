import React from 'react'
import { useParams } from 'react-router-dom'

const Userdetail = () => {
  const { userid } = useParams()
  return (
    <div>
      <h1>This is the user detail page{userid}</h1>
    </div>
  )
}

export default Userdetail
