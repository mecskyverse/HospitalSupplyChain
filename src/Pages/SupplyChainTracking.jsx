import React from 'react'
import SearchField from '../components/SearchField';
import TrackingBar from '../components/TrackingBar';

function SupplyChainTracking() {
    return (
        <div className='h-full flex flex-col items-center'>
            <SearchField />
            <h1 className='text-4xl text-white text-center mt-3'>Supply Chain tracking</h1>
            <section className='h-full flex flex-col w-11/12 items-center'>
                <TrackingBar />
                <TrackLogs />
            </section>
        </div>
    )
}
function TrackLogs() {
    return (
        <div className='w-72 h-60 border rounded-md inline-flex flex-col justify-center items-center self-end relative mt-16'>
            <h3 className='text-2xl h-1/6 top-2 text-center w-full '>Track Logs</h3>
            <ul className='text-sm h-5/6 text-gray-100  flex flex-col justify-center' >
                <li >Item Reached Ethereum</li><hr className='mt-1 mb-1 w-64'/>
                <li >Item Dispatched from Arweave</li><hr className='mt-1 mb-1 w-64'/>
                <li >Item Scanned at Arweave </li><hr className='mt-1 mb-1 w-64'/>
                <li >Item Reached to Hub </li><hr className='mt-1 mb-1 w-64'/>
                <li >Item Shipped </li><hr className='mt-1 mb-1 w-64'/>
                <li >Item Packed </li><hr className='mt-1 mb-1 w-64'/>
            </ul>
        </div>
    )
}
export default SupplyChainTracking