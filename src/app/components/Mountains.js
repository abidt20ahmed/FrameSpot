'use client'
import { Container, Row, Col, Card, CardBody, CardImage, CardTitle } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { BiFullscreen, BiSolidDownload } from "react-icons/bi";

const Mountains = () => {
    const images = [
        {
            id: 1,
            src: '/mountain1.jpg',
            alt: 'Nature 1',
            title: 'Mountain View',
            description: 'Explore the breathtaking mountain view and experience the tranquility of nature.',
        },
        {
            id: 2,
            src: '/mountain2.jpg',
            alt: 'Nature 2',
            title: 'Sunset Beach',
            description: 'Witness the magical sunset at the serene and picturesque beach.',
        },
        {
            id: 3,
            src: '/mountain3.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 4,
            src: '/mountain4.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 5,
            src: '/mountain5.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 6,
            src: '/mountain6.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 7,
            src: '/mountain7.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 8,
            src: '/mountain8.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 9,
            src: '/mountain9.jpg',
            // src: '/https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-morning-autumn-seasons-fuji-mountain-yamanachi-japan_335224-102.jpg?w=1480&t=st=1688255983~exp=1688256583~hmac=685a70db3e56afa777b96ed4e0bd6b1c97f2bdda00ec8973fc079738ba9a6316',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 10,
            src: '/mountain10.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 11,
            src: '/mountain11.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 12,
            src: '/mountain12.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 13,
            src: '/mountain13.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 14,
            src: '/mountain14.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 15,
            src: '/mountain15.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 16,
            src: '/mountain16.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 17,
            src: '/mountain17.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 18,
            src: '/mountain18.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 19,
            src: '/mountain19.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 20,
            src: '/mountain20.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
    ];
    
    return (
        <section className="bg-gray-100 py-12">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-20"><span
                    className="inline-block h-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-transparent bg-clip-text"
                    style={{
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-flex',
                        alignItems: 'center',
                        lineHeight: '2'
                    }}
                >
                    Majestic Mountain Landscapes
                </span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-6 xl:max-w-[1605px] mx-auto">
        {
            images.map(image => 
                
                <div key={image.id} className="relative max-w-full w-96 mx-auto group">
                <img
                src={image.src}
                alt="Card Image"
                className="w-full h-auto rounded-md group-hover:scale-110 transition"
                />
                <div className="absolute group-hover:scale-110 transition -bottom-[11px] left-0 w-full hidden group-hover:block">
                <div className="flex">
                <button className="w-1/2 rounded-bl-md bg-orange-500 bg-opacity-70 hover:bg-opacity-75 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-ful mt-4 mx-auto transition duration-300 delay-200">
                <Link href={`/view/${image.src}`}><BiFullscreen className='mx-auto text-2xl' /></Link>
                </button>
                <button className="w-1/2 rounded-br-md bg-orange-500 bg-opacity-70 hover:bg-opacity-75 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-ful mt-4 mx-auto transition duration-300 delay-400">
                <a href={image.src} download ><BiSolidDownload className='mx-auto text-2xl' /></a>
                </button>
                </div>
                </div>
                </div>
                
                
                )
            }
            
            </div>
            </div>
            </section>
            );
        };
        
        export default Mountains;
        