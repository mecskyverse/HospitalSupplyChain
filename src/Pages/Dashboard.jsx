import React from 'react'
import SearchField from '../components/SearchField.jsx'
import Calender from '../components/Widgets/Calender.jsx'
import DailyOverview from '../components/Widgets/DailyOverview.jsx'
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
        })}</div>
        <Calender />
      </div>

    </div>
  )
}

export default Dashboard