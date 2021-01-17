import React from 'react';
import Carousel from './Clinet/components/Carousel'
import Introduction from './Clinet/components/Introduction';
import ReservationOfClinet from './Clinet/components/ReservationOfClinet';
import BackgroundImg from './Clinet/components/BackgroundImg'
import About from './Clinet/components/About'
import ContactUs from './Clinet/components/ContactUs'
import canvas1 from './Clinet/img/veg6.jpeg'
import canvas2 from './Clinet/img/veg3.jpeg'
function Home() {
  
  return (
    <div>

      <Introduction />
      <Carousel
      headline = 'הירקות שלנו'
      />
      <ReservationOfClinet/>
      <BackgroundImg 
      canvasImg = {canvas1}
      />
      <About />
      <ContactUs/>
      <BackgroundImg 
      canvasImg = {canvas2}
      />
    </div>
  );
}

export default Home;
