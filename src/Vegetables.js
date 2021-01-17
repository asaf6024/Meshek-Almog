import React from 'react';
import CarouselPage from './Clinet/components/Carousel'
import BackgroundImg from './Clinet/components/BackgroundImg'
import canvas1 from './Clinet/img/canvas.jpeg'

function Vegetables() {
  
  return (
    <div>

      <CarouselPage
      headline = 'הירקות שלנו'
      />

      <BackgroundImg 
      canvasImg = {canvas1}
      />

    </div>
  );
}

export default Vegetables;
