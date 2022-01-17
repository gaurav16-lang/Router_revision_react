import './App.css'
import About from './components/About'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { Users } from './components/Users'
import Userdetail from './components/Userdetail'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>

        <Route
          path="/users/:userid"
          element={
            <PrivateRoute>
              <Userdetail />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<div>404 page not found</div>}></Route>
      </Routes>
    </div>
  )
}

export default App
