import React from 'react'
import SearchField from '../components/SearchField';
import TrackingBar from '../components/TrackingBar';
function SupplyChainTracking() {
    return (
        <div className='flex flex-col items-center'>
            <SearchField />
            <h1 className='text-4xl text-white text-center mt-3'>Supply Chain tracking</h1>
            <TrackingBar />
        </div>
    )
}

export default SupplyChainTracking