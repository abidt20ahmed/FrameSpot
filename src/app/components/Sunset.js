'use client'
import { Container, Row, Col, Card, CardBody, CardImage, CardTitle } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { BiFullscreen, BiSolidDownload } from "react-icons/bi";

const Sunset = () => {
    const images = [
        {
            id: 1,
            src: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1380&t=st=1688242822~exp=1688243422~hmac=610fd33b283afd1916a1ac24ea3fd2f44c179cc0ddb2456d58e22b11f950d611',
            alt: 'Nature 1',
            title: 'Mountain View',
            description: 'Explore the breathtaking mountain view and experience the tranquility of nature.',
        },
        {
            id: 2,
            src: 'https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?w=1380&t=st=1688232916~exp=1688233516~hmac=2001851e7507db57e635ddf8052cf88c8814cc3e790e830f3498e8ed21074a1c',
            alt: 'Nature 2',
            title: 'Sunset Beach',
            description: 'Witness the magical sunset at the serene and picturesque beach.',
        },
        {
            id: 3,
            src: 'https://img.freepik.com/free-photo/mesmerizing-view-silhouette-tree-savanna-plains-during-sunset_181624-18108.jpg?w=1380&t=st=1688242963~exp=1688243563~hmac=2ab8c7efad6d32b40fb380e03155293ed295d0ee0b1f0c83578f843079dcf258',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 4,
            //   src: 'https://img.freepik.com/free-photo/white-red-hearts_1048-4213.jpg?w=1380&t=st=1688249993~exp=1688250593~hmac=05bbf11a6e119be0aeb5bff324d0ae78387c2b0aff47371d6c3161859b22da0f',
            src: 'https://img.freepik.com/free-photo/beautiful-landscape-sunset-beach_181624-30774.jpg?w=1380&t=st=1688251900~exp=1688252500~hmac=e1f2e49740f851e42cafbb942a782cb1b5edd6bd839222931cc1077c16c6cbed',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 5,
            src: 'https://img.freepik.com/free-photo/mesmerizing-view-silhouette-tree-savanna-plains-during-sunset_181624-28022.jpg?w=1380&t=st=1688249908~exp=1688250508~hmac=123d4ec7760ca61b0f71d2d01137c05c1c13bd676a7ec8c282c32861fa2c32b5',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 6,
            src: 'https://img.freepik.com/free-photo/seljalandsfoss-waterfall-during-sunset-beautiful-waterfall-iceland_335224-596.jpg?w=1380&t=st=1688250976~exp=1688251576~hmac=aaab53c44cd38ecd437f64b0869b3b37d9a6bdc5ef8651a499973f293667b911',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 7,
            src: 'https://img.freepik.com/free-photo/beautiful-view-green-fields-sunrise-captured-canggu-bali_181624-14146.jpg?w=1380&t=st=1688251731~exp=1688252331~hmac=efbc15dca0c6771b90ce4ff0ff3fa49435bb26a464faaed46c793c4e27f6f7f3',
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
            src: 'https://img.freepik.com/free-photo/breathtaking-view-forest-covered-with-snow-during-sunset-norway_181624-45356.jpg?t=st=1688252025~exp=1688252625~hmac=8c469aa97935c39362d02aef1499d989c68707d1ec1fb9f4ad0536c1805e9569',
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
            src: 'https://img.freepik.com/free-photo/breathtaking-view-forest-covered-with-snow-during-sunset-norway_181624-37868.jpg?t=st=1688252035~exp=1688252635~hmac=599139e03ae42b8d18c3900fcda473001273b6f903389b42e4e443f26b335a0a',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 15,
            src: 'https://img.freepik.com/free-photo/phu-chi-fa-mist-sunrise-chiang-rai-province-thailand_335224-1104.jpg?t=st=1688252035~exp=1688252635~hmac=5735362fa18e658edfc7ac406bf9c183ccbe7a6b72887236c829631ea8c29a9e',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 16,
            src: 'https://img.freepik.com/free-photo/doi-luang-chiang-dao-mountains-sunrise-chiang-mai-thailand_335224-1400.jpg?t=st=1688252948~exp=1688253548~hmac=ec2d612827d2bfac0a6c7c5cf1c6661b0d4376a362b6cd801d3639249df525f2',
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
                <Link href={`/view/${image.id}`}><BiFullscreen className='mx-auto text-2xl' /></Link>
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
        