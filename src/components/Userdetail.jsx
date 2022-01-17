import React, { useContext, useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const Userdetail = () => {
  const { token } = useContext(AuthContext)
  const { userid } = useParams()
  const [user, setuser] = useState({})
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userid}`)
      .then((d) => d.json())
      .then((d) => {
        setuser(d.data)
      })
  }, [userid])

  if (!token) {
    return <Navigate to={'/login'} />
  }

  return (
    <>
      <img src={user.avatar} alt="test" />
    </>
  )
}

export default Userdetail
