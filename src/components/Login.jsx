import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [form, setForm] = useState({})
  const { handleToken } = useContext(AuthContext)
  const navigate = useNavigate()
  const handle = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <div>
      <input
        type="text"
        name="email"
        onChange={handle}
        placeholder="enter the email"
      />
      <input
        type="text"
        name="password"
        onChange={handle}
        placeholder="enter the password"
      />
      <button
        onClick={() => {
          handleToken('12304')
          navigate(-1)
        }}
      >
        Login
      </button>
    </div>
  )
}

export default Login
