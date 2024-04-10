import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <img  className="logo-image" src="logo" alt="logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/r&d">Research</Link></li>
          <li><Link to="/bulk">Bulk</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/account">Account</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
