import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import like from '../../Img/like.png';
import liked from '../../Img/liked.png';
import kart from '../../Img/kart.png';
import kartadd from '../../Img/kartadd.png';

// Internals
import './styles.css';
import PRODUCTOS from '../Data';
import shoeBanner from '../../Img/theshoecompany.png'

class Items extends Component {
 
  render () {

    return (
      <div className='items'>
        <img src={ shoeBanner } />
        <div className='all-items'>
          {
            PRODUCTOS.map(product => (
              <div key={ product.id } className='item' >
                <Link to={`/products/${product.id}`} >
                  <img className='item-image' src={ product.img } alt={ product.name } />
                  <div className='item-details'>
                    <h1>{ product.name }</h1>
                    <h4>{ product.description }</h4>
                  </div>
                </Link>
                <div className='item-price-add'>
                  <div className = "item-spec" ><h5>BUY</h5>
                  <AddKart />
                  <Likeitem /> </div>
                  <h5>$ { product.price }</h5>
                </div>
              </div>
            ))
          }
        </div>
       </div> 
    )
  }
}

 class Likeitem extends Component{
   constructor(props){
        super(props);
        this.state = {
            likeitem: false,
        }
    }

    handleChangelike(){
        this.setState({likeitem:!this.state.likeitem})
    }
    render(){
      return(
      <div  onClick={this.handleChangelike.bind(this)}>
        <img src={this.state.likeitem? liked: like} />
      </div>
      )
    }
}

class AddKart extends Component{
   constructor(props){
        super(props);
        this.state = {
            additem: false,
        }
    }

    handleChangelike(){
        this.setState({additem:!this.state.additem})
    }
    render(){
      return(
      <div  onClick={this.handleChangelike.bind(this)}>
        <img src={this.state.additem? kartadd: kart}  />
      </div>
      )
    }
}

export default Items;