  import React from "react";
  import '../css/carousel.css'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import productsObj from '../obj/productsObj'


const CarouselPage = (props) => {

    const loadMyProducts = productsObj.map((product) =>{        
        return(
            <MDBCarouselItem itemId= {product.id} key = {product.id}>
            <MDBView>
              <img
                className="d-block w-100"
                src={product.image}
                alt="First slide"
              />
            <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">{product.name}</h3>
              {props.price === '' ?  <p>{props.price}</p> : product.price  + ' שח'} 
            </MDBCarouselCaption>
          </MDBCarouselItem>
        )
    });

  return (
    <div class="container-fluid">
    <MDBContainer className ='animated slideInLeft'>
        <h2 className = 'text-center font-weight-bold'>{props.headline}</h2>
      <MDBCarousel style = {{width: props.width, height: props.height}}
      
      activeItem={1}
      length={productsObj.length}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
          
     {loadMyProducts}
   
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </div>
  );
}

export default CarouselPage;