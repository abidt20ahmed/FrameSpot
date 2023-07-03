/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Navbar } from 'flowbite-react';
import { BiSolidDownload } from 'react-icons/bi';
import Link from 'next/link';
// import Mountain1 from '/mountain1.jpg'

const FullPage = ({params}) => {
  const image = params.fullpage
const [show, setShow] = useState(false)


 const navBg = {
        // backgroundImage: `url(/${image})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
        backgroundColor: "#9090903a",
        // backgroundColor: "#D3D3D3",
        // marginTop: "40px",
        // borderRadius: "20px",

    };

  console.log(params.fullpage);
  console.log(image);


    return (
        <div onMouseMove={()=> setShow(true)}>
          <div className={`absolute w-full bg-none backdrop:filter ${!show && 'hidden'}`} style={navBg}>
      <div className='max-w-7xl mx-auto'>
        <Navbar
        style={{ backgroundColor: 'transparent' }}
        className=' navbar.transparent py-5'
      fluid
      rounded
    >
      
        <span className="self-center whitespace-nowrap text-2xl font-bold text-red-500 dark:text-white">
          FrameSpot
        </span>
      
      <div className="flex md:order-2">
        <Button className='bg-[#FC7404] hover:bg-orange-500 checked:bg-orange-600'>
          <a href={`/${image}`} download ><BiSolidDownload className='mx-auto text-2xl' /></a>
        </Button>
  
      </div>
      <Navbar.Collapse>
       <Link href="/" className="text-white hover:text-orange-700 active:text-red-700" passHref>
        
          Home
        
      </Link>
      </Navbar.Collapse>
  
    </Navbar>
    </div>   
      </div>  
           <img src={`/${image}`}
           onClick={()=> setShow(false)}
                alt="Card Image"
                className=" w-full h-auto object-cover object-center "
                // className=" w-full h-[100vh] object-cover object-center "
                />
        </div>
    );
};

export default FullPage;