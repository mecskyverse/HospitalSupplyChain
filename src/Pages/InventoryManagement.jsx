import React from 'react'
import SearchField from '../components/SearchField'
import DailyOverview from '../components/Widgets/DailyOverview.jsx'
import ManagementStatistics from '../components/Widgets/ManagementStatistics.jsx'
import { FaCartArrowDown } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function InventoryManagement() {
    const Dailydata = ['Visitors', 'Customers', 'Orders', 'Shipment']
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
    return (
        <div>
            <SearchField />
            <h1 className='text-4xl text-white text-center mt-2'>Inventory Management</h1>
            <div className='p-5 flex justify-center flex-col items-center'>
                <div className='flex gap-5'>{Dailydata.map((data, index) => {
                    return (
                        <DailyOverview key={index} currData={data} index={index} />
                    )
                })}
                </div>
                <div className='w-full justify-center gap-5 flex mt-3 items-start'>
                    {
                        inventoryData.map((data, index) => {
                            return (
                                <ManagementStatistics inventoryData={data} index={index} key={index} />
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}


export default InventoryManagement

