import React from 'react'
import '../css/reservation.css'


class Reservation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            price: '',
            description: '',
            isAvailable: '',
            quantity: 0,
            totalPrice: '0'
            
        }
        this.loadMyProducts = this.loadMyProducts.bind(this)
    }

    // handleClick =(price) => {

    //   this.setState(prevState => (      
    //       {totalPrice: parseInt(prevState.totalPrice) + parseInt(10)
    //     }
      
    //   ));      
    //   }

    handleClick =(event) => {
      const pricePlus = event.target.name

     console.log(document.getElementsByName(event.target.value))


           this.setState(prevState => (      
          {
            totalPrice: parseInt(prevState.totalPrice) + parseInt(pricePlus),
            quantity: parseInt(prevState.quantity) + parseInt(1)
        }
     
      ));
      document.getElementsByName(event.target.id).value = this.state.quantity
      }

      handleClickMinus =(event) => {
        const priceMinus = event.target.name
        if(this.state.totalPrice > 0)
        {
          this.setState(prevState => (            
            {
              totalPrice: parseInt(prevState.totalPrice) - parseInt(priceMinus),
              quantity: parseInt(prevState.quantity) - parseInt(1)
              
          }      
     
        ));

        }
        else
           return ''        
        }

      loadMyProducts = (state)=> this.props.myProducts.map((product) =>{  
        let typeOfProduct = '' 
        let prodprice = product.price + 'ש"ח'
        if(!product.isAvailable){
          typeOfProduct = 'invalidProduct'
          prodprice = 'לא זמין במלאי'
        }
        return(
            <div className = {typeOfProduct}>
            {/* PRODUCT */}
       <div className="row">
         <div className="col-12 col-sm-12 col-md-2 text-center">
           <img className="img-responsive" src={product.reservationImg} alt="prewiew" width={120} height={80} />
         </div>
         <div className="col-12 text-sm-center col-sm-12 text-md-center col-md-6">
           <h4 className="product-name"><strong>{product.name}</strong></h4>
           <h4>
             <small>{product.description}</small>
           </h4>
         </div>
         <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
           <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
             <h6><strong>{prodprice} <span className="text-muted"> x</span></strong></h6>
           </div>
           <div className="col-4 col-sm-4 col-md-4">
             <div className="quantity">
               <input type="button" defaultValue="+" className="plus" onClick = {this.handleClick} name ={product.price} id = {product.id} />
               <input type="number" step={1} max={99} min={0} value= {state.quantity} title="Qty" className="qty" name = {product.id} />
               <input type="button" defaultValue="-" className="minus" onClick = {this.handleClickMinus} name ={product.price} />
             </div>
           </div>
           <div className="col-2 col-sm-2 col-md-2 text-right">
             <button type="button" className="btn btn-outline-danger btn-xs">
               <i className="fa fa-trash" aria-hidden="true" />                            
             </button>
           </div>
         </div>
       </div>
       <hr />
       {/* END PRODUCT */}
 </div>
        )
    });



 
    render(){
      console.log('props', this.props.myProducts)
       return(
         <div>
        {this.loadMyProducts(this.state)}
        <div className="card-footer">
        {/* <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
          <div className="row">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="cupone code" />
            </div>
            <div className="col-6">
              <input type="submit" className="btn btn-default" defaultValue="Use cupone" />
            </div>
          </div>
        </div> */}
        <div className="pull-right" style={{margin: '10px'}}>
          <a href className="btn btn-success pull-right">המשך</a>
          <div className="pull-right" style={{margin: '5px'}}>
            סכום הזמנה: <b>{this.state.totalPrice} ₪</b>
          </div>
        </div>
      </div>
      </div>
       )
}
}
export default Reservation