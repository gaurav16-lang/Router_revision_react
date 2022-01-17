import React from 'react'
import { useContext } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext)
  if (!token) {
    return <Navigate to={'/login'} />
  }

  return children
}

export default PrivateRoute
