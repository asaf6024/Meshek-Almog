import { render } from '@testing-library/react'
import React from 'react'
import '../css/reservation.css'

import Product from './Products'
import productsObj from '../obj/productsObj'


class ReservationOfClinet extends React.Component{
  constructor(){
    super()
    this.state = {
      products: []
    }
  }

render(){
  console.log('this my products', productsObj)
  return (
    <div className ='container-fluid' id = 'Reservation'>
     
    <div className="container">
    <h2 className = 'text-center font-weight-bold'>הזמנה</h2>
      <div className="card shopping-cart text-center ">
        <div className="card-header bg-dark text-light">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
          עגלת קניות 
          {/* <a href className="btn btn-outline-info btn-sm pull-right">המשך להזמנה</a> */}
          <div className="clearfix" />
        </div>
        <div className="card-body">
        
        <Product myProducts = {productsObj}/>

        </div>
      </div>
    </div>
    </div>
  );
}
}

export default ReservationOfClinet