import React from 'react'
import group5 from '../../assets/Dashboard/group5.svg'
function IncomeState() {
    return (
        <div className='w-[340px] h-[168px] rounded-2xl bg-[#342f45] p-5 relative overflow-hidden'>
            <p className='flex justify-between'>
                <p className='text-xl font-bold font-Cabin'>Income</p>
                <select className="bg-[#342f45] focus:border-blue-500 outline-none font-Cabin text-[#918e96] text-lg z-10" required>
                    <option value="" disabled="disabled">This Month</option>
                    <option >This Month</option>
                    <option >This Year</option>
                </select>
            </p>
            <span className='text-3xl font-bold absolute top-16'>$ 1287.27</span>
            <img src={group5} alt="graph" srcset="" className='absolute top-5 ' />
            
        </div>
    )
}

export default IncomeState