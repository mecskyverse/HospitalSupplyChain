import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
function SearchField() {
    return (
        <div className=' w-full h-[60px] bg-[#462c78] flex justify-between pl-16 pr-10 items-center relative '>
            <div className='relative inline-block '>
                <input type="text" className='w-[300px] rounded-full bg-white text-black h-[40px] pl-4 shadow-md shadow-gray-800' placeholder='Search from Keyword ' />
                <IoIosSearch className='absolute right-2 top-1 text-gray-600 text-3xl' />
            </div>
            <div className='flex gap-4 items-center'>
                <IoIosNotifications className='text-3xl' />
                <Link to='/'><span className='border rounded-full w-8 h-8 flex items-center justify-center bg-[#D9D9D9]'><FaUser className='text-2xl' /></span></Link>
            </div>
        </div>
    )
}

export default SearchField