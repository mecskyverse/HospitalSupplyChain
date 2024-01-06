import React from 'react'
import { MdPlace } from "react-icons/md";
import { useState } from 'react';


function TrackingBar({ currentMilestone }) {

    return (
        <div className='w-3/4 h-2 rounded-full bg-white mt-10 relative flex justify-between items-start tracking__bar'>
            <span className='absolute bg-teal-700 h-2 w-2/6 rounded-full'>
                <span class="absolute inline-flex rounded-full h-2 w-2 bg-sky-500 right-0"></span>
                <span className='animate-ping inline-flex bg-blue-500 h-6 w-6 -top-2 rounded-full  absolute -right-2'></span>
            </span>
            <span className='relative -top-9 -left-5 '><MdPlace className='text-5xl  text-blue-300' />Source</span>
            <span className='relative -top-9 '><MdPlace className='text-5xl  text-blue-300' />Shipped</span>
            <span className='relative -top-9 '><MdPlace className='text-5xl  text-blue-300' />In-transit</span>
            <span className='relative -top-9 '><MdPlace className='text-5xl  text-blue-300' />Reached</span>
            <span className='relative -top-9 -right-10 '><MdPlace className='text-5xl  text-blue-300' />Delivered</span>

        </div>
    )
}

export default TrackingBar
