import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HomdeSlider = () => {
    const data = [
        { image: 'https://i.ibb.co/nf70LMJ/19.jpg', },
        { image: 'https://i.ibb.co/L5h9ysW/16.jpg', },
        { image: 'https://i.ibb.co/NnwVWBP/14.jpg', },
        { image: 'https://i.ibb.co/1qwpH26/10.jpg', },
        { image: 'https://i.ibb.co/r2KZRNF/3d-rendering-interior-and-exterior-design.jpg', },
        { image: 'https://i.ibb.co/cLzPFGg/6.jpg', },
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div style={{ textAlign: "center" }} className="relative">
            <div className="absolute w-full h-full flex justify-center items-center">
                <div className="z-10">
                    <h1 className="sm:text-2xl text-5xl font-semibold tracking-widest text-white">Welcome to Hotel Royal</h1>
                    <Link className="hover:bg-gray-800 transition sm:py-3 sm:px-8 py-4 px-10 inline-block mt-4 rounded-md bg-gray-700 text-white" to="/rooms">Book Now
                        <ArrowDownwardIcon className="ml-1 animate-bounce" />
                    </Link>
                </div>
            </div>


            <div style={{
                padding: "0",
                backgroundColor: 'black',
                overflow: 'hidden'
            }}>
                <Carousel
                    data={data}
                    time={6000}
                    width="100%"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="0"
                    slideNumber={false}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="black"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "100%",
                        maxHeight: "500px",
                        margin: "auto",
                        opacity: '40%'
                    }}
                />
            </div>
        </div>
    );
};

export default HomdeSlider;