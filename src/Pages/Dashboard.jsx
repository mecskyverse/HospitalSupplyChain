import React from 'react'
import SearchField from '../components/SearchField.jsx'
import Calender from '../components/Widgets/Calender.jsx'
import DailyOverview from '../components/Widgets/DailyOverview.jsx'
import Stock from '../components/Widgets/Stock.jsx'
function Dashboard() {
  const Dailydata = ['Visitors', 'Customers', 'Orders', 'Shipment']
  return (
    <div>
      <SearchField />
      <div className='p-5 flex justify-center flex-col items-center'>
        <div className='flex gap-5'>{Dailydata.map((data, index) => {
          return (
            <DailyOverview currData={data} index={index} />
          )
        })}
        </div>
        <div className='w-full flex justify-around pt-4 gap-2'>
          <Stock />
          <Calender />
        </div>
      </div>

    </div>
  )
}

export default Dashboard