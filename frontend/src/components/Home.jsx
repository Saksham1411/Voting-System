import React, { Fragment } from 'react'
import { motion } from "framer-motion"
import { AuroraBackground } from "./ui/aurora-background";
import { Link } from 'react-router-dom'
import facebook from '../assets/social-icons/facebook.svg'
import twitter from '../assets/social-icons/twitter.svg'
import telegram from '../assets/social-icons/telegram.svg'
import ballot from '../assets/ballot.svg'
import vote from '../assets/vote.svg'

function Home() {
    return (
        <div className='h-screen w-screen overflow-hidden font-sans text-white'>
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative w-full px-20 gap-4 items-center justify-center"
                >
                    <div className=" bg-white-600/10 backdrop-blur-lg  px-5 py-8 flex flex-col justify-center align-items-center text-lg rounded-3xl border border-white/70 shadow-md shadow-white/40">
                        {/* Brand & Login */}
                        <div className='flex gap-10 my-5 mx-5 justify-between items-center'>
                            <h1 className='text-4xl pl-2 font-poppins tracking-widest text-white/90 font-medium'>SUFF <span className='tracking-normal font-medium font-fredoka'>O.O</span> RAGE</h1>
                            <Link className='w-fit px-7 py-1  rounded-lg ring-1 ring-white/80 text-white  hover:ring-1 hover:bg-clip-text 
                             font-fredoka  tracking-widest ' to='/login'>Login</Link>
                        </div>

                        {/* Hero Section */}
                        <div className='flex flex-row pt-10 text-white/80 font-fredoka'>
                            <div className='w-2/3 flex flex-col mx-10'>
                                <p className='my-4'>This is your <span className='mx-2 text-xl font-medium tracking-widest'>RIGHT TO VOTE</span></p>
                                <p className='tracking-wide font-thin mb-6'>Polling made easy for all types of events. Live Polling and managing predictable outcomes.</p>
                                <Link className='w-fit px-8 py-2  rounded-lg ring-1 ring-white/80 text-white hover:font-medium hover:ring-1 hover:bg-clip-text 
                             font-fredoka  tracking-widest ' to="/register">Get Started</Link>
                            </div>
                            <div className='w-full flex relative translate-x-10'>
                                <img className='w-36  translate-x-24 absolute opacity-80' src={vote} alt="graph" />
                                <img className='w-72 absolute -translate-y-8 translate-x-56 rounded-xl opacity-80' src={ballot} alt="voting ballot" />
                            </div>
                        </div>

                        {/* Social Media Handles */}
                        <div className='flex mx-10 mt-10 gap-6 opacity-80'>
                            <img className='cursor-pointer w-10' src={twitter} alt="twitter" />
                            <img className='cursor-pointer w-10' src={facebook} alt="facebook" />
                            <img className='cursor-pointer w-12' src={telegram} alt="telegram" />
                        </div>
                    </div>
                </motion.div>
            </AuroraBackground>

        </div>
    )
}

export default Home