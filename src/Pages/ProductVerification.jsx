import React, { useState } from 'react'
import SearchField from '../components/SearchField'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function ProductVerification() {
    const [productNumber, setProductNumber] = useState(0);
    const navigate = useNavigate();
    const handleSubmit = () => {

        navigate(`/overview/productVerification/${productNumber}`)

    }

    const handleClick = () => {
        // toast.success('Product is already verified!')
        // console.log("Clicked!!")
    }

    return (
        <div>
            <SearchField />
            <h1 className='text-4xl text-white text-center mt-3'>Product Verification</h1>
            <form onSubmit={handleSubmit} action="" className='p-10'>
                <p className='text-sm font-Cabin mb-1 text-white opacity-50'>General details</p>
                <hr className='w-full' />
                <div className=" shadow-md rounded">
                    <div className='grid grid-cols-2 place-items-center '>
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
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='xxxxxx'
                                onChange={(e) => setProductNumber(e.target.value)}
                                required />
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

                        <Link to={`${productNumber}`}><button onClick={handleClick} className="col-span-2 mt-4 w-[450px] border border-[#7b65c4] rounded-xl h-14 py-2 px-3 bg-[#7b65c4] focus:border-blue-500 outline-none font-Cabin text-white text-lg" >
                            Check Authentication
                        </button>
                        </Link>
                    </div>
                </div >
            </form >
        </div >
    )
}

export default ProductVerification