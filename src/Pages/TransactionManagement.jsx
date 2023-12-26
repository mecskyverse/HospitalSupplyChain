import React from 'react'
import SearchField from '../components/SearchField'
import DailyOverview from '../components/Widgets/DailyOverview'
import sampleData from '../assets/transactionData';
import { CiSearch } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiFilter } from "react-icons/ci";

function TransactionManagement() {
    const Dailydata = ['Total Transactions', 'Monthly Transactions', 'Successful Transactions', 'Failed Transactions']
    const dailyValues = ['721,882', '22,370', '10.6', '50.839']

    return (
        <div>
            <SearchField />
            <div className='flex flex-col items-center mt-3'>
                <h1 className='text-3xl mb-3 md:self-start md:ml-28 self-center '>Transaction Management</h1>
                <section className='flex gap-2 md:flex-row flex-col '>
                    {
                        Dailydata.map((data, index) => {
                            return (
                                <DailyOverview key={index} currData={data} index={index} dailyValues={dailyValues} transactionManagement={true} />
                            )
                        })
                    }
                </section>
                <div className='md:w-[1225px] w-4/5 mt-10'>
                    <span className='text-xl  flex w-full items-center'>All Transactions | <CiSearch className='text-2xl hover:text-gray-500' /> <SlCalender className='ml-auto text-xl mr-1 ' /> Date | <CiFilter className='text-2xl mr-1' /> Filter</span>
                    <hr className=' mb-4' />

                    <table className="min-w-full border-spacing-y-4 border-separate">
                        <thead>
                            <tr >
                                <th className="dark:text-gray-300">Date</th>
                                <th className="dark:text-gray-300">Time</th>
                                <th className="dark:text-gray-300">Transaction ID</th>
                                <th className="dark:text-gray-300">Name</th>
                                <th className="dark:text-gray-300">Amount</th>
                                <th className="dark:text-gray-300">Status</th>
                            </tr>
                        </thead>
                        <tbody >
                            {sampleData.map((item) => (
                                <tr key={item.transactionId} className='text-center mb-4'>
                                    <td >{item.date}</td>
                                    <td >{item.time}</td>
                                    <td >{item.transactionId}</td>
                                    <td >{item.name}</td>
                                    <td >{item.amount}</td>
                                    <td className={`dark:text-gray-400 ${item.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default TransactionManagement