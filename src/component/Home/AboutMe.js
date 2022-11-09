import React from 'react';
import photo from '../../assets/photo-1579504344957-c09070053c7e.jpg';

const AboutMe = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-4 font-sans text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            About Me
                        </h2>
                        <p className="text-base text-gray-700 md:text-xl">
                            Name: <span className='text-green-600 font-bold font-serif'>MD. Hanif</span>
                            <br />
                            Email: <span className='text-warning font-semibold hover:link'>hanif@12gmail.com</span>
                            <br />
                            Facebook: <span className='text-warning font-semibold hover:link'>Hanif PHoTo FesTival</span>
                            <br />
                            Location: <span className='text-gray-500 font-semibold text-lg'>Sonapur, Noakhali, Bangladesh</span>
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                        <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Professional photographer
                                </h6>
                                <p className="text-sm text-gray-900">
                                    Lookout flogging bilge rat main sheet bilge water nipper fluke
                                    to go on account heave down.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                            <div className="h-full p-5 border border-l-0 rounded-r">
                                <h6 className="mb-2 font-semibold leading-5">
                                    Special photography PSD 
                                </h6>
                                <p className="text-sm text-gray-900">
                                    1. Nice tour photography Dhaka
                                    <br />
                                    2. Digital camera setup Singapur
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={photo}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;