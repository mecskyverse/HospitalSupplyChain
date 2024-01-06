import React, { useState } from 'react'
import SearchField from '../components/SearchField';
import TrackingBar from '../components/TrackingBar';


function SupplyChainTracking() {
    const [ischainTrack, setIsChainTrack] = useState(false)
    const [productNumber, setProductNumber] = useState(0)


    if (productNumber == 123456) {
        return (
            <div className='h-full flex flex-col items-center'>
                <SearchField />
                <h1 className='text-4xl text-white text-center mt-3 font-Monteserrat'>Supply Chain tracking</h1>
                <section className='h-full flex flex-col w-11/12 items-center'>
                    <TrackingBar />
                    <div className='flex w-full justify-between mt-16'>
                        <ProductDetails />
                        <TrackLogs />
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.52630028204!2d76.76357748532372!3d28.64368463389517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1704559105713!5m2!1sen!2sin" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='self-end ml-10'></iframe>
                </section>
    
            </div>
        )   
    }
        return (
            <div className='w-full h-full flex flex-col'>
                <SearchField />
                <p className='text-center mt-5 text-xl'>Please enter tracking id to track the product</p>
                <div className="mb-4 w-[450px] self-center ">
                            <label className="block text-white text-lg font-Cabin text-center mt-10" htmlFor="productName">
                                Tracking Id:
                            </label>
                            <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="text" placeholder='xxxxxx'
                                onChange={(e) => setProductNumber(e.target.value)}
                                required />
                        </div>
            </div>
        )
    
    
}
function ProductDetails() {
    return (
        <div className='w-full  inline-flex p-5  flex-col'>
            <h3 className='text-3xl font-Monteserrat text-center mb-2 '>Product Details</h3>
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
function TrackLogs() {
    return (
        <div className='w-72 h-60 border rounded-md inline-flex flex-col justify-center items-center self-start relative p-2'>
            <h3 className='text-2xl h-1/6 top-2 text-center w-full '>Track Logs</h3>
            <ul className='text-sm h-5/6 text-gray-100  flex flex-col justify-center' >
                <li >Item Reached Ethereum</li><hr className='mt-1 mb-1 w-64' />
                <li >Item Dispatched from Arweave</li><hr className='mt-1 mb-1 w-64' />
                <li >Item Scanned at Arweave </li><hr className='mt-1 mb-1 w-64' />
                <li >Item Reached to Hub </li><hr className='mt-1 mb-1 w-64' />
                <li >Item Shipped </li><hr className='mt-1 mb-1 w-64' />
                <li >Item Packed </li><hr className='mt-1 mb-1 w-64' />
            </ul>
        </div>
    )
}
export default SupplyChainTracking