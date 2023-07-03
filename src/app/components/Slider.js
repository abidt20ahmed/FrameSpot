/* eslint-disable @next/next/no-img-element */
'use client';

import { Carousel } from 'flowbite-react';

 const Slider = () => {
  return (
    <div className=' z-50'>
       <Carousel
    //   leftControl="left"
    //   rightControl="right"
    >
      <img
        alt="..."
        src="/sunset2.jpg"
      />
      <img
        alt="..."
        src="/sunset2.jpg"
      />
      <img
        alt="..."
        src="/sunset2.jpg"
      />
      <img
        alt="..."
        src="/sunset2.jpg"
      />
      <img
        alt="..."
        src="/sunset2.jpg"
      />
    </Carousel> 
    </div>
    
  )
}


export default Slider;