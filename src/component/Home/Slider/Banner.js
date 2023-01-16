import React from 'react';
import wadding from '../../../assets/wedding.jpg';
import tour from '../../../assets/tour.jpg';
import birthday from '../../../assets/birthday.jpeg';
import BannerItem from './BannerItem';

const Banner = () => {
    const carouselItems = [
        {
            img: wadding,
            id: "636a778e091d5166f558affe",
            pre: "636a793b091d5166f558afff",
            next: "636a7f71091d5166f558b001",
            event: 'Wadding',
        },
        {
            img: tour,
            id: "636a7f71091d5166f558b001",
            pre: "636a778e091d5166f558affe",
            next: "636a793b091d5166f558afff",
            event: 'Special Tour',
        },
        {
            img: birthday,
            id: "636a793b091d5166f558afff",
            pre: "636a7f71091d5166f558b001",
            next: "636a778e091d5166f558affe",
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