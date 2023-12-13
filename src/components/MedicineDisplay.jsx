import React from 'react'
import { PiPrescription } from "react-icons/pi";
import { GiMedicinePills } from "react-icons/gi";
import { GiMedicines } from "react-icons/gi";
import { RiMedicineBottleFill } from "react-icons/ri";
function MedicineDisplay({ data }) {
    const words = data.name.split(/\s+/);
    const lastWord = words[words.length - 1];
    console.log(lastWord);
    return (
        <div className='w-[400px] h-[150px] bg-[#ffffff] rounded-2xl p-2 flex overflow-hidden relative'>
            <span className='w-1/12 text-[#172b4d] flex justify-center items-center text-4xl mr-3 '>
                {lastWord === 'Tablet' ? <GiMedicines /> : (lastWord === 'Capsule' ? <GiMedicinePills /> : <RiMedicineBottleFill />)}
            </span>
            <div className='w-11/12 text-[#666666] flex flex-col '>
                <span className='flex justify-between items-center'><p className='text-[#666666] font-bold'>{data.name}</p> <p className=' text-[#666666] font-bold text-sm'>MRP &#8377;{data.price}</p></span>
                <span className='flex items-center'><PiPrescription className='text-yellow-400 text-lg' />Prescription {data.prescriptionRequired === true ? '' : 'Not '}Required</span>
                <span>{data.packaging}</span>
                <span >{data.manufacturer}</span>
                <span className='text-[#7a7a7a]'>{data.composition}</span>
            </div>
        </div>
    )
}

export default MedicineDisplay