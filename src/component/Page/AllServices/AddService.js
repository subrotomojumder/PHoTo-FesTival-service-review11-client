import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddService = () => {
    const [inputInfo, setInputInfo] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Added your service')
                e.target.reset();
            }
        })
    }
    const handleInputValue = e => {
        setInputInfo({ ...inputInfo, [e.target.name]: e.target.value })
    }

    return (
        <div className="w-full bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
                <h3 className='text-3xl font-semibold text-center text-blue-500 mb-4'>Add your new service</h3>
                <hr />
                <div className='lg:grid grid-cols-2 gap-8 my-4'>
                    <div className="">
                        <label className="label">
                            <span className="font-semibold">Service Name</span>
                        </label>
                        <input onBlur={handleInputValue} name='serviceName' type="text" placeholder="Service name. . . ." className="px-4 py-3 border-b-2 border-blue-400 w-full" required/>
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="font-semibold">Photo url</span>
                        </label>
                        <input onBlur={handleInputValue} name='servicePhoto' type="url" placeholder="photo url. . . ." className="px-4 py-3 border-b-2 border-blue-400 w-full" required/>
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="font-semibold">Description</span>
                        </label>
                        <input onBlur={handleInputValue} name='description' type="text" placeholder="service description. . . ." className="px-4 py-3 border-b-2 border-blue-400 w-full" required/>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <label className="label">
                                <span className="font-semibold">Demand Charge</span>
                            </label>
                            <input onBlur={handleInputValue} name='charge' type="text" placeholder="demand charge. . . ." className="px-4 py-3 border-b-2 border-blue-400 w-full" required/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="font-semibold">Ratings</span>
                            </label>
                            <input onBlur={handleInputValue} name='ratings' type="text" placeholder="customer ratings. . . ." className="px-4 py-3 border-b-2 border-blue-400 w-full" required/>
                        </div>
                    </div>
                </div>
                <button className='btn btn-warning' type="submit">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;