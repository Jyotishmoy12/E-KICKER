import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Research from './components/Research'
import Bulk from './components/Bulk'
import Products from './components/Products'
import Account from './components/Account'
import Home from './components/Home'
import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/r&d" element={<Research/>}/>
      <Route path="/bulk" element={<Bulk/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default App