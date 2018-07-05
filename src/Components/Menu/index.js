import React, { Component } from 'react';
import './styles.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import react from '../../Img/react.png'

class Menu extends Component {
  render () {
    return (
      <div className='menu'>
        <h1 className='menu-title'><img className='menu-logo' src={ react } /> React-Ecommerce</h1>
        <ul className='menu-options'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu;