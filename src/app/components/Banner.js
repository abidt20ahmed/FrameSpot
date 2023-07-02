'use client';
import { Button } from 'flowbite-react';
import React from 'react';

const Banner = () => {

    const sectionStyle = {
        backgroundImage: "url('https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?w=1380&t=st=1688232916~exp=1688233516~hmac=2001851e7507db57e635ddf8052cf88c8814cc3e790e830f3498e8ed21074a1c')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
        backgroundColor: "#D3D3D3",
        // marginTop: "40px",
        // borderRadius: "20px",

    };

    return (

        <section style={sectionStyle}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"><span
                    className="inline-block h-full bg-gradient-to-r from-red-600 via-[#FFAE02] to-red-600 text-transparent bg-clip-text"
                    style={{
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-flex',
                        alignItems: 'center',
                        lineHeight: '2'
                    }}
                >
                    Immerse Yourself in Wonders of Nature
                </span></h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Discover the beauty of nature through stunning pictures captured by talented photographers.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Button className='bg-[#FC7404] hover:bg-orange-500 checked:bg-orange-600'>
          Get started
        </Button>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>
                </div>
            </div>
        </section>

    );
};

export default Banner;