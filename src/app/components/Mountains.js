'use client'
import { Container, Row, Col, Card, CardBody, CardImage, CardTitle } from 'flowbite-react';
import Image from 'next/image';
import { BiFullscreen, BiSolidDownload } from "react-icons/bi";

const Mountains = () => {
    const images = [
        {
            id: 1,
            src: 'https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?w=1380&t=st=1688255334~exp=1688255934~hmac=e2e62afebd0aea02a3d5d25ec6c87fa20d29f792491e430a999968d5e90bad40',
            alt: 'Nature 1',
            title: 'Mountain View',
            description: 'Explore the breathtaking mountain view and experience the tranquility of nature.',
        },
        {
            id: 2,
            src: 'https://img.freepik.com/free-photo/blue-chinese-rivers-lijiang-river-city_1417-1151.jpg?t=st=1688256441~exp=1688257041~hmac=d6094762445e48164ae667017488292c61ab0b9828b454216387beafd77241e4',
            alt: 'Nature 2',
            title: 'Sunset Beach',
            description: 'Witness the magical sunset at the serene and picturesque beach.',
        },
        {
            id: 3,
            src: 'https://img.freepik.com/free-photo/blue-beach-day-outdoor-water_1203-3899.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 4,
            src: 'https://img.freepik.com/free-photo/scenic-sunrise-high-mountains-alpes-generative-ai_191095-494.jpg?t=st=1688256616~exp=1688257216~hmac=e6fe3a1cd244dadda9851e37f4c5d902f10df453f9b9ea9c4728cbe82f417f6b&w=1380',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 5,
            src: 'https://img.freepik.com/free-photo/beaches-ko-phi-phi-islands-rai-ley-peninsula-are-framed-by-stunning-limestone-cliffs-they-are-regularly-listed-top-beaches-thailand_231208-1461.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 6,
            src: 'https://img.freepik.com/free-photo/fuji-mountain-cherry-blossoms-spring-japan_335224-230.jpg?w=1380&t=st=1688256296~exp=1688256896~hmac=d614753fb497f895f0638a62d3b2e4a9dac2e76465810d634748bcb61600c4b3',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 7,
            src: 'https://img.freepik.com/free-photo/cherry-blossoms-fuji-mountain-spring-sunrise-shizuoka-japan_335224-110.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 8,
            src: 'https://img.freepik.com/free-photo/fuji-mountain-cherry-blossoms-spring-japan_335224-181.jpg?t=st=1688253107~exp=1688253707~hmac=4bc5117461639d3e42562243e6655ced1427f3a3320712d4c5146910100122b9',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 9,
            src: 'https://img.freepik.com/free-photo/autumn-season-fuji-mountain-kawaguchiko-lake-japan_335224-251.jpg?t=st=1688253107~exp=1688253707~hmac=838e512815ad9f03040c75faa5ea99d36ee0a358318ac3bd521241fd8b8c546a',
            // src: 'https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-morning-autumn-seasons-fuji-mountain-yamanachi-japan_335224-102.jpg?w=1480&t=st=1688255983~exp=1688256583~hmac=685a70db3e56afa777b96ed4e0bd6b1c97f2bdda00ec8973fc079738ba9a6316',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 10,
            src: 'https://img.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-japan_335224-177.jpg',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 11,
            src: 'https://img.freepik.com/free-photo/autumn-season-mountain-fuji-kawaguchiko-lake-japan_335224-94.jpg?t=st=1688255812~exp=1688256412~hmac=0934add330e2a2d99d38bbdfe8a123dd833e86a86ec34edf4df23fc08d44310e',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 12,
            src: 'https://img.freepik.com/free-photo/beautiful-shot-crystal-clear-lake-snowy-mountain-base-during-sunny-day_181624-5459.jpg?w=1380&t=st=1688289182~exp=1688289782~hmac=3df818c48ccc0921a3d40e5e16abb832218937b66e28016a9264e08cff4f439b',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 13,
            src: 'https://img.freepik.com/free-photo/beautiful-landscape-mountain-fuji_74190-3066.jpg?t=st=1688255684~exp=1688256284~hmac=6e7ea627a7819a3135dc4c7a5af350dd9c090d01077732b503f1ba41bc624961',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 14,
            src: 'https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-japan_335224-106.jpg?t=st=1688255626~exp=1688256226~hmac=00f2cd57606d5ba00160e5698c641389d5fe634f87e91c473e30e0753a69b186',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 15,
            src: 'https://img.freepik.com/free-photo/lake-mountains-swiss-alps_1182-1846.jpg?t=st=1688255557~exp=1688256157~hmac=fe7aa491d0094d52dbaceaa80dc3fc814a1294220078f9286451a3adfe043c9e',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 16,
            src: 'https://img.freepik.com/free-photo/water-stream-surrounded-by-mountains-flowers-sunny-day_181624-29802.jpg?t=st=1688220278~exp=1688220878~hmac=ad565073f5c2a460ccb90a62b28ae8cc0397814b939407c49402e78460b786d4',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 17,
            src: 'https://img.freepik.com/free-photo/bukhansan-mountains-is-covered-by-morning-fog-sunrise-bukhansan-national-park-seoul-south-korea_335224-304.jpg?w=1380&t=st=1688256672~exp=1688257272~hmac=90ab7adaf0d207589d054c0274c4183df5f358e83f8889bfa425239346a65d17',
            alt: 'Nature 3',
            title: 'Enchanting Forest',
            description: 'Get lost in the enchanting beauty of the lush green forest.',
        },
        {
            id: 18,
            src: 'https://img.freepik.com/free-photo/snow-mountain-blue-sky-leh-ladakh-india_1150-11114.jpg?w=1380&t=st=1688256849~exp=1688257449~hmac=fb8c3da0e623af83bd4acc8fe552302cf2c2017bcfec7cade0dbda777f897aad',
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
        
        export default Mountains;
        