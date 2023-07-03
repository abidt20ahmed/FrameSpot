/* eslint-disable @next/next/no-img-element */
'use client'
import { Container, Row, Col, Card, CardBody, CardImage, CardTitle } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { BiFullscreen, BiSolidDownload } from "react-icons/bi";

const Sunset = () => {
    const images = [
        {
            id: 1,
            src: '/sunset1.jpg',
            alt: 'Nature 1',
            title: 'sunset View',
            description: 'Explore the breathtaking sunset view and experience the tranquility of nature.',
        },
        {
            id: 2,
            src: '/sunset2.jpg',
            alt: 'Nature 2',
            title: 'Sunset Beach',
            description: 'Witness the magical sunset at the serene and picturesque beach.',
        },
        {
            id: 3,
            src: '/sunset3.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 4,
            src: '/sunset4.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 5,
            src: '/sunset5.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 6,
            src: '/sunset6.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 7,
            src: '/sunset7.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 8,
            src: '/sunset8.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 9,
            src: '/sunset9.jpg',
            // src: '/https://img.freepik.com/free-photo/fuji-sunset-kawaguchiko-lake-morning-autumn-seasons-fuji-sunset-yamanachi-japan_335224-102.jpg?w=1480&t=st=1688255983~exp=1688256583~hmac=685a70db3e56afa777b96ed4e0bd6b1c97f2bdda00ec8973fc079738ba9a6316',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 10,
            src: '/sunset10.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 11,
            src: '/sunset11.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 12,
            src: '/sunset12.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 13,
            src: '/sunset13.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 14,
            src: '/sunset14.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 15,
            src: '/sunset15.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 16,
            src: '/sunset16.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 17,
            src: '/sunset17.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 18,
            src: '/sunset18.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 19,
            src: '/sunset19.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 20,
            src: '/sunset20.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
    ];
    
    
    return (
        <section className="bg-gray-100 py-12">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mt-10 mb-20"><span
                    className="inline-block h-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 text-transparent bg-clip-text"
                    style={{
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-flex',
                        alignItems: 'center',
                        lineHeight: '2'
                    }}
                >
                    Twilight&apos;s Beauty Unveiled
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
                <BiSolidDownload className='mx-auto text-2xl' />
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
        
        export default Sunset;
        