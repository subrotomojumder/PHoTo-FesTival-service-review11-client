import React from 'react';

const PhotoFrame = () => {
    const events = [
        {
            img: 'https://new-media.dhakatribune.com/en/uploads/2022/07/15/cox-sea-beach-pic-06-resize.jpeg',
            name: 'Coxs Bazar Beach',
            date: '10-12-2020',
            id: 1
        },
        {
            img: 'https://prod-media-bng.dhakatribune.com/uploads/2018/10/imgl0230-1538831939649-1538833507115.jpg',
            name: 'Sentmartin',
            date: '02-12-2021',
            id: 2
        },
        {
            img: 'https://chandpurtimes.com/wp-content/uploads/2019/02/sentmartin.jpg',
            name: 'Sentmartin',
            date: '10-12-2020',
            id: 3
        },
        {
            img: 'https://resize.indiatvnews.com/en/resize/newbucket/730_-/2019/12/arundhati-scheme-1-1577698259.jpg',
            name: 'Borishal Wadding',
            date: '10-12-2020',
            id: 4
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpqqDhMiPJtDB3uoSKEECB4WilhV3DX_g8g&usqp=CAU',
            name: 'Wadding',
            date: '10-12-2018',
            id: 5
        },
        {
            img: 'https://cdn.pixabay.com/photo/2017/08/06/05/21/people-2589047__340.jpg',
            name: 'Couple pic',
            date: '10-12-2019',
            id: 6
        },
        {
            img: 'https://d3btuubl2bvm9d.cloudfront.net/images/2c9f84875c3445c3015c3879f0700022/1573140035223-mid.jpg',
            name: 'birthday',
            date: '10-12-2020',
            id: 7
        },
        {
            img: 'https://cdn.risingbd.com/media/imgAll/2022March/en/cox-2203110718-2203111131.jpg',
            name: 'Coxs Bazar Beach',
            date: '10-12-2022',
            id: 8
        },
    ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-orange-100">
            <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl">
                <div>
                    <p className="inline-block px-3 py-px mb-2 text-xs font-semibold font-serif tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Photo Frame
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">I</span>
                    </span>{' '}
                    put some of my picture here !
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    I have shared with you what happened with some clients, please comment and let me know if you need <span className='text-blue-500 hover:link'>hanif@12gmail.com</span> email.
                </p>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    events.map(evt => <section 
                        key={evt.id}
                    >
                        <div
                            aria-label="View Item"
                            className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
                        >
                            <div className="flex flex-col h-full">
                                <img
                                    src={evt.img}
                                    className="object-cover w-full lg:h-52"
                                    alt=""
                                />
                                <div className="flex-grow border border-t-0 rounded-b">
                                    <div className="p-5">
                                        <h6 className="mb-2 text-2xl font-semibold leading-5">
                                            <span className='text-sm text-gray-800'> Date: {evt.date}</span>
                                            <br />
                                            {evt.name} 
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
                }
            </div>
        </div>
    );
};

export default PhotoFrame;