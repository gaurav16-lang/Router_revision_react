import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/product/:id">Product</Link>
      <Link to="/users">User</Link>
    </div>
  )
}

export default Navbar
