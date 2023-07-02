'use client'
import { Container, Row, Col, Card, CardBody, CardImage, CardTitle } from 'flowbite-react';
import Image from 'next/image';
import { BiFullscreen, BiSolidDownload } from "react-icons/bi";

const SeaBeach = () => {
    const images = [
        {
            id: 1,
            src: 'https://img.freepik.com/free-photo/beautiful-laem-promthep-cape-phuket-famous-view-point-scenic-area-watching-sunset_554837-829.jpg?t=st=1688253635~exp=1688254235~hmac=56f6c500905540d31ac0816f208e956c1b102c904462b3cd6b791177f601eb7d',
            alt: 'Nature 1',
            title: 'Mountain View',
            description: 'Explore the breathtaking mountain view and experience the tranquility of nature.',
        },
        {
            id: 2,
            src: 'https://img.freepik.com/free-photo/maldives-island_1203-3533.jpg?t=st=1688253806~exp=1688254406~hmac=5fe7c37774f828b2a76b1d97572ee43fef832160037cdf380c6fbb5fc45dde05',
            alt: 'Nature 2',
            title: 'Sunset Beach',
            description: 'Witness the magical sunset at the serene and picturesque beach.',
        },
        {
            id: 3,
            src: 'https://img.freepik.com/free-photo/beautiful-outdoor-tropical-beach-sea-around-samui-island-with-coconut-palm-tree-other-sunset-time_74190-9034.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 4,
            //   src: 'https://img.freepik.com/free-photo/white-red-hearts_1048-4213.jpg?w=1380&t=st=1688249993~exp=1688250593~hmac=05bbf11a6e119be0aeb5bff324d0ae78387c2b0aff47371d6c3161859b22da0f',
            src: 'https://img.freepik.com/free-photo/maldives-island_1203-3531.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 5,
            src: 'https://img.freepik.com/free-photo/maldives-island_74190-473.jpg?t=st=1688253904~exp=1688254504~hmac=179d031308a93577398cc941f5190c77792ad12f815409f38930b5b17be5d00a',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 6,
            src: 'https://img.freepik.com/free-photo/beautiful-beach-view-koh-chang-island-seascape-trad-province-eastern-thailand-blue-sky-background_1150-10262.jpg?t=st=1688254164~exp=1688254764~hmac=7b2e9b0a2130f98a21bcdd888d6dd3f23bcef68929c36be6cbdd312796c4fc41',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 7,
            src: 'https://img.freepik.com/free-photo/beautiful-nature-tropical-beach-sea-with-coconut-palm-tree-paradise-island_74190-1036.jpg?t=st=1688253941~exp=1688254541~hmac=b5444689c5c27e6e95ce667b3d993d6a5b4735c506078dbefdae1a8d243da50b',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 8,
            src: 'https://img.freepik.com/free-photo/mesmerizing-view-calm-ocean-rocks-near-shore-during-sunset_181624-10501.jpg?w=1380&t=st=1688251833~exp=1688252433~hmac=34ae5da223468a9edb44121e05a81bf8e5f20a29c484f8ac0fd57a1f379db986',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 9,
            src: 'https://img.freepik.com/free-photo/maldives-island_74190-2340.jpg?t=st=1688193597~exp=1688194197~hmac=da0ebc96a178b362d49f5dd83a814ca1a5579e1293f958ba5f3122fdfecd5a5d',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 10,
            src: 'https://img.freepik.com/free-photo/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea_335224-313.jpg?t=st=1688252035~exp=1688252635~hmac=c38e0bc807f76b6feeddbcf69082748d54cfb2ef3d62acbfe11dc0907ccd691e',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 11,
            src: 'https://img.freepik.com/free-photo/new-day-beach-sunrise-moment_181624-13883.jpg?w=1380&t=st=1688252262~exp=1688252862~hmac=f9e1026aabdd930cd75f18400c5d073bb9ee66b4f2fd6ab711f31db0dc8b1436',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 12,
            src: 'https://img.freepik.com/free-photo/breathtaking-sunset-colorful-sky-desert-tsavo-west-kenya-kilimanjaro_181624-6794.jpg?w=1380&t=st=1688252361~exp=1688252961~hmac=185afb8983ad431e35d3bed5958c8e2fdccae0009ad31c787c4078ea836d4c0b',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 13,
            src: 'https://img.freepik.com/free-photo/beautiful-view-sunset-sea_23-2148019892.jpg?w=1380&t=st=1688252456~exp=1688253056~hmac=ea2c7179d811073a0e8a8525849433cf8baa55345ef70329cbe0c6b1afcf9759',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 14,
            src: 'https://img.freepik.com/free-photo/luxury-sky-sunrise-maldives-lagoon_1203-5355.jpg?w=1380&t=st=1688254112~exp=1688254712~hmac=0726824c889945f55d0b71239cf9da40b1b1e2a0699b561fc24003a8b7b18e2d',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 15,
            src: 'https://img.freepik.com/free-photo/landscape-summer-paradise-travel-coast_1203-5776.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 16,
            src: 'https://img.freepik.com/free-photo/beautiful-paradise-island-with-beach-sea_74190-6637.jpg?t=st=1688229354~exp=1688229954~hmac=bff7b5c4ab2955fc6aee349412155b6b72b2139a2589bddb8113b541121d09e1',
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
                    Captivating Sea Beach Views
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
                <BiFullscreen className='mx-auto text-2xl' />
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
        
        export default SeaBeach;
        