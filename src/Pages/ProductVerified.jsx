import React from 'react'
import SearchField from '../components/SearchField'
import { useLocation, Link } from 'react-router-dom'
function ProductVerified() {
    const location = useLocation();
    const inputString = location.pathname;
    const batch = parseInt(inputString.match(/\d+$/)[0]);
    console.log(batch)
    if (batch === 123456) {
        return (
            <div className='flex flex-col'>
                <SearchField />
                <Link
                    to={`../`}
                    relative="path"
                    className="back-button mt-5 ml-3"
                >&larr; <span>Back to Verification</span></Link>
                <span className='text-lg p-5 w-[250px] text-center mt-5 text-white font-Cabin rounded-lg self-center bg-[#21DDB8]'>Product Verified</span>
                <p className='text-sm font-Cabin mb-1 text-white opacity-50'>General details</p>
                <hr className='w-full' />
                <div className=" shadow-md rounded">
                    <div className='grid grid-cols-3 place-items-center'>
                        <div className="mb-4 w-[300px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Product Name
                            </label>
                            <div className="border border-[#221c2d] rounded-xl w-full h-14 flex justify-center items-center text-xl  bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin text-center">Ronas</div>
                        </div>
                        <div className="mb-4 w-[300px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productDescription">
                                Product Description
                            </label>
                            <div className="border border-[#221c2d] rounded-xl w-full h-14 flex justify-center items-center text-lg  bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin text-center">A Medicine to cure headache</div>
                        </div>


                        <div className="mb-4 w-[300px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Batch Number/Serial Number
                            </label>
                            <div className="border border-[#221c2d] rounded-xl w-full h-14 flex justify-center items-center text-xl  bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin text-center">123456</div>
                        </div>

                        <div className="mb-4 w-[300px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productName">
                                Manufacturing Date
                            </label>
                            <div className="border border-[#221c2d] rounded-xl w-full h-14 flex justify-center items-center text-xl  bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin text-center">02/07/2023</div>
                        </div>
                        <div className="mb-4 w-[300px]">
                            <label className="block text-white text-lg font-Cabin" htmlFor="productDescription">
                                Expiration Date
                            </label>
                            <div className="border border-[#221c2d] rounded-xl w-full h-14 flex justify-center items-center text-xl  bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin text-center">01/07/2025</div>
                        </div>
                    </div>



                </div>
            </div>
        )
    }
    else {

        return (
            <div className='flex flex-col'>
                <SearchField />
                <Link
                    to={`../`}
                    relative="path"
                    className="back-button  mt-5 ml-3"
                >&larr; <span>Back to Verification</span></Link>
                <span className='text-lg p-5 w-[250px] text-center mt-5 text-white font-Cabin rounded-lg self-center bg-red-600'>Product Not Verified</span>

            </div>

        )
    }
}

export default ProductVerified