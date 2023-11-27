import React, { useState } from 'react'
// import HeroImage from '../assets/SignUp/HeroImage.png'
import { FcGoogle } from "react-icons/fc";
import { FaLink } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';


function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };
    return (
        <div className='h-full w-screen flex font-Cabin'>

            <div className='w-1/2 h-[97vh] mt-3 ml-3 p-5 flex items-center image-section rounded-2xl relative'>
                <span className='absolute top-10 left-10 text-5xl flex font-bold gap-1' ><FaLink /> HC</span>
                < h1 className='font-Monteserrat z-10 hero-text p-5 fade-in-text' > <p className='tracking-widest'>HealthChain:</p>“Transforming Healthcare, One Block at a Time”</h1 >
            </div>
            <div className='self-center flex flex-col h-screen w-1/2 sm:pl-4 md:pl-8 lg:pl-16 xl:pl-24 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-48'>
                <h1 className='text-5xl font-Cab text-white mt-[5vh] font-bold'>Get Started Now</h1>
                <p className='opacity-50 mt-1'>How would you like to sign in?</p>

                <form onSubmit={handleSubmit} className=" shadow-md rounded pt-3 mb-4 lg:w-[463px]">
                    <div className="mb-4 ">
                        <label className="block text-white text-lg font-Cabin" htmlFor="email">
                            Email
                        </label>
                        <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin " type="email" placeholder='Enter Your Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-lg " htmlFor="password">
                            Password
                        </label>
                        <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin" type="password" placeholder='Password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-lg" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin" type="password" placeholder='Confirm Password' id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-lg" htmlFor="role">
                            Role
                        </label>
                        <select className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none font-Cabin text-[#918e96]" id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                            <option value="" disabled="disabled"> Role</option>
                            <option value="role1">Role 1</option>
                            <option value="role2">Role 2</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input className="mr-2 leading-tight" type="checkbox" id="terms-and-conditions" checked={termsAndConditions} onChange={(e) => setTermsAndConditions(e.target.checked)} required />
                        <label className="text-white opacity-50 text-md mb-2" htmlFor="terms-and-conditions">
                            I agree to the Terms & Cond.
                        </label>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link to='/dashboard'><button className="bg-[#c5c5c5] w-[250px] h-[40px] rounded-xl text-[#7743DB] text-lg" type="submit">
                            Register
                        </button>
                        </Link>
                    </div>
                </form>
                <div className='flex gap-2 justify-center'>
                    <hr className='w-full mt-3' />
                    OR
                    <hr className='w-full mt-3' />
                </div>
                <div className='flex flex-col items-center'>
                    <button className="bg-[#221c2d] w-[250px] h-[50px] rounded-xl text-white flex justify-center items-center gap-1 mt-2 mr-1">
                        <span className='text-2xl'><FcGoogle /></span> <p>Sign In With Google</p>
                    </button>

                    <p className='text-sm text-[#8a8a8a] mt-2'>Already have an account? <span className='text-[#7743DB]'>Login</span></p>
                </div>
                <button className="  text-[#7743DB] self-end text-sm">
                    privacy policy
                </button>
            </div>

        </div >

    )
}

export default SignUp