import React, { useState, useEffect, useRef } from 'react'
// import HeroImage from '../assets/SignUp/HeroImage.png'
import { FcGoogle } from "react-icons/fc";
import { FaLink } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import metamaskicon from '../assets/SignUp/metamaskicon.svg'
import { ethers } from 'ethers';
import Web3Modal from "web3modal";
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [termsAndConditions, setTermsAndConditions] = useState(false);
    const [signIn, setSignIn] = useState(false);
    const [ethersProvider, setEthersProvider] = useState(null);
    const [account, setAccount] = useState(null);
    const [walletConnected, setWalletConnected] = useState(false);

    const url = "https://public-en-baobab.klaytn.net";
    const provider = new ethers.JsonRpcProvider(url)
    const navigate = useNavigate();

    const privKey = "0x388c8ad3d141ae7eac513a70510075137fec1cc3f3962b9b8cdd3791dd21c761"


    const web3ModalRef = useRef();

    const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
        const provider = await web3ModalRef.current.connect();
        const signer = new ethers.Wallet(privKey, provider)

        // If user is not connected to the Sepolia network, let them know and throw an error
        // const { chainId } = await web3Provider.getNetwork();
        // if (chainId !== 11155111) {
        //   window.alert("Change the network to Sepolia");
        //   throw new Error("Change network to Sepolia");
        // }

        console.log('signer', signer)
        return signer;
    };

    const connectWallet = async () => {
        try {
            // Get the provider from web3Modal, which in our case is MetaMask
            // When used for the first time, it prompts the user to connect their wallet
            console.log("connect Wallet clicked")
            await getProviderOrSigner();
            setWalletConnected(!walletConnected)
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        if (typeof window.ethereum == 'undefined') {
            window.alert("Install Metask to smoothly use this app");
            // throw new Error("Install Metask to smoothly use this app");
        }

    }, [])


    useEffect(() => {
        // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet

        // Assign the Web3Modal class to the reference object by setting it's `current` value
        // The `current` value is persisted throughout as long as this page is open

        if (!walletConnected) {
            web3ModalRef.current = new Web3Modal({
                network: "Klaytn Baobab",
                providerOptions: {},
                disableInjectedProvider: false,
            });
            connectWallet();
        }
        if (walletConnected) {
            console.log('here');
            navigate("/overview");
        }

        console.log(walletConnected)
    }, [walletConnected]);



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
            {
                signIn ?
                    (
                        <div className='flex flex-col h-screen w-1/2 justify-center items-center '>
                            <div className='flex flex-col'>
                                <h1 className='text-5xl font-Cab text-white mt-[5vh] font-bold'>Sign In</h1>
                                {/* <p className='opacity-50 mt-1'>How would you like to sign in?</p> */}
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
                                    {/* <div className="mb-4">
                                        <label className="block text-white text-lg" htmlFor="confirm-password">
                                            Confirm Password
                                        </label>
                                        <input className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none placeholder:text-white placeholder:opacity-50 font-Cabin" type="password" placeholder='Confirm Password' id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                    </div> */}
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
                                    {/* <div className="mb-4">
                                        <input className="mr-2 leading-tight" type="checkbox" id="terms-and-conditions" checked={termsAndConditions} onChange={(e) => setTermsAndConditions(e.target.checked)} required />
                                        <label className="text-white opacity-50 text-md mb-2" htmlFor="terms-and-conditions">
                                            I agree to the Terms & Cond.
                                        </label>
                                    </div> */}
                                    <div className="flex items-center justify-center">
                                        <Link to='/overview'><button className="bg-[#c5c5c5] w-[250px] h-[40px] rounded-xl text-[#7743DB] text-lg" type="submit">
                                            Sign In
                                        </button>
                                        </Link>
                                    </div>
                                </form>
                                <div className='flex gap-2'>
                                    <hr className='w-full mt-3' />
                                    OR
                                    <hr className='w-full mt-3' />
                                </div>
                                <div className='flex flex-col items-center'>
                                    <button className="bg-[#221c2d] w-[250px] h-[50px] rounded-xl text-white flex justify-center items-center gap-1 mt-2 ">
                                        <span className='text-2xl'><FcGoogle /></span> <p>Sign In With Metamask</p>
                                    </button>

                                    {/* <p className='text-sm text-[#8a8a8a] mt-2'>Already have an account? <span className='text-[#7743DB]'>Login</span></p> */}
                                </div>
                                <button className="self-end text-[#7743DB] text-sm ">
                                    privacy policy
                                </button>
                            </div>
                        </div>
                    )
                    :
                    (<div className='flex flex-col h-screen w-1/2 justify-center items-center '>
                        <div className='flex flex-col'>
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
                                {/* <div className="mb-4">
                            <label className="block text-white text-lg" htmlFor="role">
                                Role
                            </label>
                            <select className="border border-[#221c2d] rounded-xl w-full h-14 py-2 px-3 bg-[#221c2d] focus:border-blue-500 outline-none font-Cabin text-[#918e96]" id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                                <option value="" disabled="disabled"> Role</option>
                                <option value="role1">Role 1</option>
                                <option value="role2">Role 2</option>
                            </select>
                        </div> */}
                                <div className="mb-4">
                                    <input className="mr-2 leading-tight" type="checkbox" id="terms-and-conditions" checked={termsAndConditions} onChange={(e) => setTermsAndConditions(e.target.checked)} required />
                                    <label className="text-white opacity-50 text-md mb-2" htmlFor="terms-and-conditions">
                                        I agree to the Terms & Cond.
                                    </label>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="bg-[#c5c5c5] w-[250px] h-[40px] rounded-xl text-[#7743DB] text-lg" type="submit" onClick={() => setSignIn(true)}>
                                        Register
                                    </button>

                                </div>
                            </form>
                            <div className='flex gap-2'>
                                <hr className='w-full mt-3' />
                                OR
                                <hr className='w-full mt-3' />
                            </div>
                            <div className='flex flex-col items-center'>
                                <button onClick={() => connectWallet()} className="bg-[#221c2d] w-[250px] h-[50px] rounded-xl text-white flex justify-center items-center gap-1 mt-2 ">
                                    <span className='text-2xl' ><img src={metamaskicon} className=' w-9 ' alt="" srcset="" /></span> <p>Sign In With Metamask</p>
                                </button>

                                <p className='text-sm text-[#8a8a8a] mt-2'>Already have an account? <span className='text-[#7743DB]'>Login</span></p>
                            </div>
                            <button className="self-end text-[#7743DB] text-sm ">
                                privacy policy
                            </button>
                        </div>
                    </div>)
            }


        </div >

    )
}

export default SignUp