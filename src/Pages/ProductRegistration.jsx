import React from 'react';
import SearchField from '../components/SearchField';

const ProductRegistration = () => {
    return (
        <div>
            <SearchField />
            <h1 className='text-3xl text-white font-Cabin pl-10 pt-6'>Product Registration</h1>
            <form action="" className='p-10'>
                <p className='text-sm font-Cabin mb-1 text-white opacity-50'>General details</p>
                <hr className='w-full' />
                <div className=" shadow-md rounded">
                    <div className='flex justify-around'>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Product Name
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="email" placeholder='Enter Product Name' id="email" required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productDescription">
                                Product Description
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="email" placeholder='Description' id="email" required />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manufacturerName">
                            Manufacturer Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="manufacturerName" type="text" placeholder="Enter Manufacturer Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                            Manufacturing Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Enter Description" rows="3"></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                            Contact
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="contact" type="text" placeholder="Enter Contact" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="docUpload">
                            Upload Documents
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="docUpload" type="file" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductRegistration;