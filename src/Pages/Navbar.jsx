import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAnalytics } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import vector1 from '../assets/Dashboard/vector1.svg'
import vector2 from '../assets/Dashboard/vector2.svg'
import vector3 from '../assets/Dashboard/vector3.svg'
import vector4 from '../assets/Dashboard/vector4.svg'
import vector5 from '../assets/Dashboard/vector5.svg'
import vector6 from '../assets/Dashboard/vector6.svg'
import vector7 from '../assets/Dashboard/vector7.svg'
import vector8 from '../assets/Dashboard/vector8.svg'
function Navbar() {
  const navItems = [vector1, vector2, vector3, vector4, vector5, vector7, vector8]
  const mouseOverText = ['Analytics', 'Supply Chain Track', 'Inventory Management', 'Transaction Management', 'Regulatory Compliance', 'User Management', 'Product Registration', 'Product Verification']
  const activeStyle = {
    backgroundColor: 'grey',
    backdropFilter: 'blur(10px)',
    width: '5vw',
    height: '50px',
    display: 'flex',
    justifyContent: 'center'
    // backdropFilter: 'blur(8px)'
  }
  const routes = ['', 'supplyChainTrack', 'inventoryManagement', 'transactionManagement', 'regulatoryCompliance', 'productRegistration', 'productVerification']
  return (
    <div className='h-screen bg-[#7743DB] w-[5vw] sticky top-0'>
      <nav className='flex flex-col h-full gap-8 relative pt-24 items-center'>
        <div className='flex text-2xl items-center absolute top-4 '> <FaLink /><span className='font-bold font-Cabin'>HC</span></div>
        {navItems.map((item, index) => {
          return (<NavLink style={({ isActive }) => isActive ? activeStyle : null} to={routes[index]} title={mouseOverText[index]} key={index} className='transition ease-in-out delay-150 duration-200 hover:scale-110'><img src={item} alt='navlink' /></NavLink>)
        })}
      </nav>
    </div>
  )
}

export default Navbar