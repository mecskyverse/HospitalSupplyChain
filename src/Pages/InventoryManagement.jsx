import React from 'react'
import SearchField from '../components/SearchField'
import DailyOverview from '../components/Widgets/DailyOverview.jsx'
import ManagementStatistics from '../components/Widgets/ManagementStatistics.jsx'
import { FaCartArrowDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import MedicineDisplay from '../components/MedicineDisplay.jsx';
import medicineData from '../assets/medicineData.js';

function InventoryManagement() {
    const Dailydata = ['Daily Visitors', 'Daily Customers', 'Daily Orders', 'Daily Shipment']
    const dailyValues = ['721,882', '22,370', '10.608', '50.839']
    const inventoryData = [
        {
            title: 'Total Number of Products',
            icon: <FaCartArrowDown className='text-7xl absolute top-9 left-5' />,
            value: '10000'
        },
        {
            title: 'Number of Registered Products',
            icon: <TiTick className='text-7xl absolute top-9 left-4' />,
            value: '90000'
        },
        {
            title: 'Number of Products in Stock',
            icon: '',
            value: '591/1000'
        }
    ]
    console.log(medicineData)
    return (
        <div className=''>
            <SearchField />
            <h1 className='text-4xl text-white text-center mt-2'>Inventory Management</h1>
            <div className='p-5 flex justify-center flex-col items-center'>
                <div className='flex gap-5'>{Dailydata.map((data, index) => {
                    return (
                        <DailyOverview key={index} currData={data} index={index} dailyValues={dailyValues} />
                    )
                })}
                </div>
                <div className='w-full justify-center gap-5 flex mt-3 items-start mb-4'>
                    {
                        inventoryData.map((data, index) => {
                            return (
                                <ManagementStatistics inventoryData={data} index={index} key={index} />
                            )
                        })
                    }
                </div>
                <div className='w-[1250px] '>
                    <span className='text-2xl  flex '>All Products | <CiSearch className='text-3xl hover:text-gray-500' /></span>
                    <hr className='w-[900px] mb-4' />
                    <div className='grid grid-cols-3 gap-y-2'>
                        {medicineData.map((data, index) => {
                            return (<MedicineDisplay data={data} />)
                        })}
                    </div>

                </div>
            </div>

        </div>
    )
}


export default InventoryManagement

