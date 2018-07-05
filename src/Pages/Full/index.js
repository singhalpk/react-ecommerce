import React, { Component } from 'react';
import './styles.css';

// Components
import Menu from '../../Components/Menu';

class Full extends Component {
  render () {
    return (
      <div className='full'>
        <Menu />
        <div className='content'>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Full;