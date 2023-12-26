import React from 'react'
import group1 from '../../assets/DailyOverview/group1.svg'
import group2 from '../../assets/DailyOverview/group2.svg'
import group3 from '../../assets/DailyOverview/group3.svg'
import group4 from '../../assets/DailyOverview/group4.svg'
function DailyOverview({ currData, index, dailyValues, transactionManagement }) {
    // Array of image sources
    const imageSources = [group1, group2, group3, group4];
    const dailyRatio = ['-4.66%', '+0.45%', '-1.07%', '+0.66%']
    console.log(transactionManagement)
    return (
        <div className='w-[300px] h-[110px] bg-white rounded-2xl relative '>
            <div className='text-black flex justify-between'>
                <div className='text-black font-Cabin text-xl pl-4 pt-2'>{currData}</div>
                <span className='flex flex-col pr-4'>
                    <div className='pt-1 text-lg'>{transactionManagement ? <>&#165;</> : ''} {dailyValues[index]}</div>
                    <span className={`${dailyRatio[index].charAt(0) === '+' ? 'text-green-700' : 'text-red-700'} text-sm self-end`}>{dailyRatio[index]}</span>
                </span>
            </div>
            <img src={imageSources[index]} alt='Graph' className='absolute top-12' />
        </div>
    )
}

export default DailyOverview