import React from 'react';
import BackgroundImg from './Clinet/components/BackgroundImg'
import About from './Clinet/components/About'
import Introduction from './Clinet/components/Introduction'
import canvas2 from './Clinet/img/veg3.jpeg'

function About_us() {
  
  return (
    <div>
      <Introduction />
      <About />
      <BackgroundImg 
      canvasImg = {canvas2}
      />

    </div>
  );
}

export default About_us;
