import React from 'react';
import './Banner.css';
import { FaCamera } from "react-icons/fa";


const BannerItem = ({ item }) => {
    const { id, pre, next, img, event } = item;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img w-full'>
                <img src={img} alt='' className="w-full h-[80vh]" />
            </div>
            <div className="absolute flex  transform -translate-y-1/2 bottom-14 right-1/4">
                <a href={`#slide${pre}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle ml-8">❯</a>
            </div>
            <div className="absolute transform -translate-y-1/2 bottom-10 left-12 top-1/2 text-white md:w-1/2">
                <h2 className='text-xl font-serif mb-3 text-orange-200'><FaCamera className='inline text-lg mb-2 text-white' /> PHoTo FesTival</h2>
                <h3 className='text-4xl font-bold mb-4'>{event} <sub className='text-2xl text-blue-300'>Photography</sub></h3>
                <h4>Get in touch to cherish some of life's memorable moments. Videos and photos are taken with special DSLR camera.</h4>
            </div>
            <div className="absolute flex transform w-1/2 -translate-y-1/2 bottom-20 left-12 top-2/3  text-lg font-semibold text-white">
                <button className="btn btn-outline btn-warning rounded-lg mt-6">Booking now</button>
            </div>
        </div>
    );
};

export default BannerItem;