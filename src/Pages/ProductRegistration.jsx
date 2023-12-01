import React, { useEffect, useState } from 'react';
import SearchField from '../components/SearchField';
import { toast } from 'react-toastify';

const ProductRegistration = () => {
    const [submit, setSubmission] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Successfully Registered!!")
        
    }

    return (
        <div>
            <SearchField />
            <h1 className='text-3xl text-white font-Cabin pl-10 pt-6'>Product Registration</h1>
            <form onSubmit={handleSubmit} className='p-10'>
                <p className='text-sm font-Cabin mb-1 text-white opacity-50'>General details</p>
                <hr className='w-full' />
                <div className=" shadow-md rounded">
                    <div className='grid grid-cols-2 place-items-center'>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Product Name
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='Enter Product Name' required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productDescription">
                                Product Description
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='Description' required />
                        </div>


                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Batch Number/Serial Number
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='Enter Product Name' required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg" htmlFor="role">
                                Product Category
                            </label>
                            <select className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none font-Cabin text-[#918e96]" required>
                                <option value="" >Product Category</option>
                                <option value="role1">Medicine</option>
                                <option value="role2">Syrup</option>
                            </select>
                        </div>


                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Manufacturing Date
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="date" placeholder='dd/mm/yyyy' required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productDescription">
                                Expiration Date
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="date" placeholder='dd/mm/yyyy' required />
                        </div>
                    </div>

                    <p className='text-sm font-Cabin mb-1 text-white opacity-50'>Manufacture Details</p>
                    <hr className='w-full' />

                    <div className='grid grid-cols-2 place-items-center'>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Manufacturing Name
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='Enter Manufacture Name' required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productDescription">
                                Contact
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="number" placeholder='Contact' required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Registration Number
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="number" placeholder='xxxxxx' required />
                        </div>
                    </div>

                    <p className='text-sm font-Cabin mb-1 text-white opacity-50'>Regulatory Information</p>
                    <hr className='w-full' />

                    <div className='grid grid-cols-2 place-items-center'>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Approval And Cerifications
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='Approval And Cerifications' required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productDescription">
                                Regulatory Authority
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='Regulatory Authority' required />
                        </div>
                        <div className="mb-4 w-[450px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Approval Date
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="date" placeholder='dd/mm/yyyy' required />
                        </div>
                        <div className="mb-4  w-[450px]">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="docUpload">
                                Upload Document Proof
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " id="docUpload" type="file" />
                        </div>

                        <button className="bg-blue-500 place-self-center col-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                            Submit
                        </button>

                    </div>


                </div>
            </form>
        </div>
    );
};

export default ProductRegistration;