import React from 'react'
import SearchField from '../components/SearchField.jsx'
import Calender from '../components/Widgets/Calender.jsx'
import DailyOverview from '../components/Widgets/DailyOverview.jsx'
import Stock from '../components/Widgets/Stock.jsx'
import group5 from '../assets/Dashboard/group5.svg'
import IncomeState from '../components/Widgets/IncomeState.jsx'
import SpendingStatistics from '../components/Widgets/SpendingStatistics.jsx'
function Dashboard() {
  const Dailydata = ['Visitors', 'Customers', 'Orders', 'Shipment']
  return (
    <div>
      <SearchField />
      <h1 className='text-4xl text-white text-center mt-3 '>Analytics</h1>
      <div className='p-5 flex justify-center flex-col items-center'>
        <div className='flex gap-5'>{Dailydata.map((data, index) => {
          return (
            <DailyOverview currData={data} index={index} />
          )
        })}
        </div>
        <div className='w-full justify-center gap-3 flex mt-3 items-start'>
          <Stock />
          <Calender />
          <div className='flex flex-col gap-2'>
            <IncomeState />
            <SpendingStatistics />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard