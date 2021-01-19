import React from 'react'
import '../css/reservation.css'
import Form from './Form'

class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      description: '',
      isAvailable: '',
      quantity: [0, 0, 0, 0, 0, 0],
      totalPrice: '0',
      cucamberQnt: 0,
      witneyQnt: 0,
      lobelloQnt: 0,
      eshkolQnt: 0,
      tomatoQnt: 0,
      yellowQnt: 0


    }
    // this.loadMyProducts = this.loadMyProducts.bind(this)
    // this.handleClick = this.handleClick.bind(this)
    // this.handleClickMinus = this.handleClickMinus.bind(this)
    // this.handleCancel = this.handleCancel.bind(this)
  }

  handleClick = (event) => {

    //catch the amount
    const pricePlus = event.target.name

    //show trash
    document.getElementById('trashBtn' + event.target.id).style.display = 'block'

    //shadow the chosen row
    const divStyle = document.getElementById('productRow' + event.target.id).style
    divStyle.boxShadow = 'rgba(0, 0, 0, 0.5) 5px 5px 5px 5px'
    divStyle.borderRadius = '5px'

    //add 1 to the amount
    document.getElementById('number' + event.target.id).value++
    
    //catch the place of the qunatity of the product (1 / 2 / 3.....)
    let place = event.target.id

    //updating sate
    this.setState(prevState => (
      {
        totalPrice: parseInt(prevState.totalPrice) + parseInt(pricePlus),
        quantity: parseInt(prevState.quantity[place]) + parseInt(1)
      }
    ));

    //catch the product id the have been chosen
    let myVeg = document.getElementById('number' + event.target.id).id

    //update the quantities of products the appears in the bottom
    switch (myVeg) {
      case 'number1':
        return (
          this.setState(prevState => (
            {
              cucamberQnt: prevState.cucamberQnt + parseInt(1)
            }
          ))
        )
      case 'number2':
        return (
          this.setState(prevState => (
            {
              witneyQnt: prevState.witneyQnt + parseInt(1)
            }
          ))
        )
      case 'number3':
        return (
          this.setState(prevState => (
            {
              lobelloQnt: prevState.lobelloQnt + parseInt(1)
            }
          ))
        )
      case 'number4':
        return (
          this.setState(prevState => (
            {
              eshkolQnt: prevState.eshkolQnt + parseInt(1)
            }
          ))
        )
      case 'number5':
        return (
          this.setState(prevState => (
            {
              tomatoQnt: prevState.tomatoQnt + parseInt(1)
            }
          ))
        )
      case 'number6':
        return (
          this.setState(prevState => (
            {
              yellowQnt: prevState.yellowQnt + parseInt(1)
            }
          ))
        )
      case null:
        return null
    }
  }


  handleClickMinus = (event) => {
    
    //catch the price of product
    const priceMinus = event.target.name

    //catch the product row
    const divStyle = document.getElementById('productRow' + event.target.id).style

    //if product amount is bigger than 0, remove it by one
    if (document.getElementById('number' + event.target.id).value > 0) {
      document.getElementById('number' + event.target.id).value--

    //catch the place of the qunatity of the product (1 / 2 / 3.....)
    let place = event.target.id

    //updating sate if total price is bigger than 0
    if (this.state.totalPrice > 0) {
      this.setState(prevState => (
        {
          totalPrice: parseInt(prevState.totalPrice) - parseInt(priceMinus),
          quantity: parseInt(prevState.quantity[place]) - parseInt(1)

        }
      ));
    }
      
    }
     //if product amount is smaller than 1, remove the row's shadow and the trash
    if (document.getElementById('number' + event.target.id).value < 1) {
      divStyle.boxShadow = 'none'
      document.getElementById('trashBtn' + event.target.id).style.display = 'none'
    }

    //catch the product id the have been chosen
    let myVeg = document.getElementById('number' + event.target.id).id

   //update the quantities of products that appears in the bottom row
    switch (myVeg) {
      case 'number1':
        return (
          this.setState(prevState => (
            {
              cucamberQnt: prevState.cucamberQnt - parseInt(1)
            }
          ))
        )
      case 'number2':
        return (
          this.setState(prevState => (
            {
              witneyQnt: prevState.witneyQnt - parseInt(1)
            }
          ))
        )
      case 'number3':
        return (
          this.setState(prevState => (
            {
              lobelloQnt: prevState.lobelloQnt - parseInt(1)
            }
          ))
        )
      case 'number4':
        return (
          this.setState(prevState => (
            {
              eshkolQnt: prevState.eshkolQnt - parseInt(1)
            }
          ))
        )
      case 'number5':
        return (
          this.setState(prevState => (
            {
              tomatoQnt: prevState.tomatoQnt - parseInt(1)
            }
          ))
        )
      case 'number6':
        return (
          this.setState(prevState => (
            {
              yellowQnt: prevState.yellowQnt - parseInt(1)
            }
          ))
        )
      case null:
        return null

    }
  }
  handleCancel =(event) => {

    //catch the price of product
    const priceCancel = event.target.name

    //remove the trash and the row's shadow
    try {
      document.getElementById('trashBtn' + event.target.id).style.display = 'none'
      document.getElementById('productRow' + event.target.id).style.boxShadow = 'none'
    } catch (error) {

    }

    //catch the place of the qunatity of the product (1 / 2 / 3.....)
    let place = event.target.id

    //catch the value from the amount of the product
    let myValue = ''
    try {
      myValue = document.getElementById('number' + event.target.id).value

    } catch (error) {
      myValue = 0
    }

    //update state:
    // 1. totalPrice to - (totalPrice - amount of the product()
    // 2. quantity in the place of current product to -(0)
    this.setState(prevState => (
      {
        totalPrice: parseInt(prevState.totalPrice) - (parseInt(priceCancel) * myValue),
        // quantity: parseInt(prevState.quantity[place]) - parseInt(1)
        quantity: 0
      }
    ));

    //update the amount of the quantity of the product to 0
    try {
      document.getElementById('number' + place).value = 0
    } catch (error) {
     
    }
    
    //catch the product id that have been chosen
    let myVeg = ''
    try {
      myVeg = document.getElementById('number' + event.target.id).id

    } catch (error) {
      myVeg = null
    }

    //update the quantities of products that appears in the bottom row
    switch (myVeg) {
      case 'number1':
        return (
          this.setState(prevState => (
            {
              cucamberQnt: 0
            }
          ))
        )
      case 'number2':
        return (
          this.setState(prevState => (
            {
              witneyQnt: 0
            }
          ))
        )
      case 'number3':
        return (
          this.setState(prevState => (
            {
              lobelloQnt: 0
            }
          ))
        )
      case 'number4':
        return (
          this.setState(prevState => (
            {
              eshkolQnt: 0
            }
          ))
        )
      case 'number5':
        return (
          this.setState(prevState => (
            {
              tomatoQnt: 0
            }
          ))
        )
      case 'number6':
        return (
          this.setState(prevState => (
            {
              yellowQnt: 0
            }
          ))
        )
      case null:
        return null
    }
  }

  loadMyProducts = (state) => this.props.myProducts.map((product) => {
    let typeOfProduct = ''
    let prodprice = product.price + ' ש"ח'

    if (!product.isAvailable) {
      typeOfProduct = 'invalidProduct'
      prodprice = 'לא זמין במלאי'
    }
    return (
      <div className={typeOfProduct} id={'productRow' + product.id}>
        {/* PRODUCT */}
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 text-center">
            <img className="img-responsive" src={product.reservationImg} alt="prewiew" width={120} height={80} />
          </div>
          <div className="col-12 text-sm-center col-sm-12 text-md-center col-md-6">
            <h4 className="product-name"><b>{product.name}</b></h4>
            <h4>
              <small>{product.descriptionForRes}</small>
            </h4>
          </div>
          <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
            <div className="propertyOfProduct" style={{ paddingTop: '5px' }}>
            <span className="text-muted col-3 col-sm-12 col-md-6 text-md-center"> x </span>
              <h6  style = {{display: 'inline-block'}}><strong> {prodprice} </strong></h6>
            </div>
            {product.isAvailable ?
            <div className="col-12 col-sm-12 col-md-4">
              <div className="quantity ">
                <input type="button" defaultValue="+" className="plus" onClick={this.handleClick} name={product.price} id={product.id} />
                <input className = 'propertyOfProduct' type="number" step={1} max={99} min={0} id={'number' + product.id} value={this.state.quantity[product.id - 1]} title="Qty" className="qty" name={product.id} />
                <input type="button" defaultValue="-" className="minus" onClick={this.handleClickMinus} name={product.price} id={product.id} />
              </div>
            </div>
            : ''
            }
            <div className="propertyOfProduct col-2 col-sm-12 col-md-2 text-center" id={'trashBtn' + product.id}  name={product.price} style={{ display: 'none' }}>
              <button type="button" className="btn btn-outline-danger btn-xs" name={product.price} onClick={this.handleCancel} id={product.id}>
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




  render() {
    const passSate = this.state
    console.log('props', this.props.myProducts)
    return (
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
          <div>
              <Form productsDetails = {passSate} />
            </div>
          </div>
        </div>
    )
  }
}
export default Reservation