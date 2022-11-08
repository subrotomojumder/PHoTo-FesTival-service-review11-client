import React from 'react';
import wadding from '../../../assets/wedding.jpg';
import tour from '../../../assets/tour.jpg';
import birthday from '../../../assets/birthday.jpeg';
import BannerItem from './BannerItem';

const Banner = () => {
    const carouselItems = [
        {
            img: wadding,
            id: 1,
            pre: 3,
            next: 2,
            event: 'Wadding',
        },
        {
            img: tour,
            id: 2,
            pre: 1,
            next: 3,
            event: 'Special Tour',
        },
        {
            img: birthday,
            id: 3,
            pre: 2,
            next: 1,
            event: 'Birthday',
        }
    ]
    return (
        <div className="carousel w-full">           
            {
                carouselItems.map(item => <BannerItem
                    key={item.id}
                    item={item}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;