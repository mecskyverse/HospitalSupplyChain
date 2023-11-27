import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar'
function Layout() {
    return (
        <div className='flex w-screen'>
            <div className=' w-[5vw]'><Navbar className='border ' /> </div>
            <div className='w-[95vw]'><Outlet /></div>
        </div>
    )
}

export default Layout