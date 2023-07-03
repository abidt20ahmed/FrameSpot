'use client';
// import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import Link from 'next/link';
const NavBar = () => {
   const navBg = {
        backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?w=1380&t=st=1688232916~exp=1688233516~hmac=2001851e7507db57e635ddf8052cf88c8814cc3e790e830f3498e8ed21074a1c')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
        backgroundColor: "#6a6a6a",
        // backgroundColor: "#D3D3D3",
        // marginTop: "40px",
        // borderRadius: "20px",

    };
    return (
      <div style={navBg}>
      <div className='max-w-7xl mx-auto'>
        <Navbar
        style={{ backgroundColor: 'transparent' }}
        className=' navbar.transparent py-5'
      fluid
      rounded
    >
      
        <span className="self-center flex items-center gap-2 whitespace-nowrap text-2xl font-bold text-red-500 dark:text-white">
          <img className=' h-9' src='/frameSpot.png' />
          FrameSpot
        </span>
      
      <div className="flex md:order-2">
        <Button className='bg-[#FC7404] hover:bg-orange-500 checked:bg-orange-600'>
          Get started
        </Button>
        {/* <Navbar.Toggle /> */}
      </div>
      <Navbar.Collapse>
        {/* <Navbar.Link
          active
          className=' active:text-orange-500 text-orange-500'
          href="/"
        >
          <p>
            Home
          </p>
        </Navbar.Link> */}
        <Link href="/" className="text-orange-500 hover:text-orange-700 active:text-red-700" passHref>
        
          Home
        
      </Link>
        
        {/* <Navbar.Link href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link> */}
      </Navbar.Collapse>
  
    </Navbar>
    </div>   
      </div>  
   
    );
};

export default NavBar;