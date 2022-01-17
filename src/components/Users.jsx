import React from 'react'
import { Link } from 'react-router-dom'
const Users = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((e, i) => (
        <div key={i} style={{ margin: '10px' }}>
          <Link to={`/users/${e}`}>user{e}</Link>
        </div>
      ))}
    </div>
  )
}

export { Users }
