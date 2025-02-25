'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const HeroSection = () => {

    return (
        <div className='py-10 w-full  flex flex-col lg:flex-row gap-7'>
            {/* First Div - Animates from Left on Scroll */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#161616] flex-1 rounded-[20px] py-2 px-6"
            >
                <h1 className='font-bold text-[1.3rem] mb-3 font-mono tracking-wider'>Profile</h1>
                <p className='text-gray-400 font-montserrat'>
                    Results-driven Front-End Developer with 2 years of hands-on experience in React.js and
                    Next.js. Passionate about crafting high-performance, responsive, and user-centric web
                    applications that enhance digital experiences.
                </p>
                <div className='text-center mt-8'>
                    <a
                        href='https://drive.usercontent.google.com/download?id=1LTxxuAetY94qhPZgo9XeFFrZ3oiempUA&export=download&authuser=0&confirm=t&uuid=345745c2-2f69-4094-911b-26fcba460027&at=AEz70l6slISazWWy8MMr7mKJh4Ct:1740492798930'
                        className='font-montserrat bg-black px-5 py-2 rounded-[30px] hover:bg-[#A71B10] hover:cursor-pointer'
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>

            {/* Second Div - Animates from Top on Scroll */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#A71B10] flex-[2] rounded-[20px] p-2"
            >
                <h1 className='font-bold text-[1.3rem] mb-3 font-mono tracking-wider'>Profile</h1>
                <p className='text-gray-400 font-montserrat'>
                    Results-driven Front-End Developer with 2 years of hands-on experience in React.js and
                    Next.js. Passionate about crafting high-performance, responsive, and user-centric web
                    applications that enhance digital experiences.
                </p>
            </motion.div>

            {/* Third Div - Animates from Right on Scroll */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#161616] flex-1 rounded-[20px] p-4"
            >
                <h1 className='font-bold text-[1.3rem] mb-3 font-mono tracking-wider'>SKILLS</h1>
                <div className='flex justify-center gap-4 my-4'>
                    <FontAwesomeIcon
                        icon={icons.html}
                        className={`text-[#e34c26] text-[2.8rem] transition-transform duration-300 hover:-translate-y-[5px]`}
                    />
                    <FontAwesomeIcon
                        icon={icons.css}
                        className={`text-[#61DBFB] text-[2.8rem] transition-transform duration-300 hover:-translate-y-[5px]`}
                    />
                    <FontAwesomeIcon
                        icon={icons.bootstrap}
                        className={`text-[#7618F6] text-[2.8rem] transition-transform duration-300 hover:-translate-y-[5px]`}
                    />
                    <FontAwesomeIcon
                        icon={icons.javascript}
                        className={`text-[#f0db4f] text-[2.8rem] transition-transform duration-300 hover:-translate-y-[5px]`}
                    />
                </div>
                <div className='flex justify-center gap-4 my-4'>
                    <img src='/ts.svg' width={40} height={40} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />
                    <img src='/mui.svg' width={40} height={40} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />
                    <img src='/tcss.svg' width={40} height={40} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />

                    <FontAwesomeIcon
                        icon={icons.github}
                        className={`text-white text-[2.5rem] transition-transform duration-300 hover:-translate-y-[5px]`}
                    />

                </div>
                <div className='flex justify-center gap-4 my-4'>
                    <img src='/redux.svg' width={40} height={40} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />

                    <FontAwesomeIcon
                        icon={icons.react}
                        className={`text-[#61DBFB] text-[2.5rem] transition-transform duration-300 hover:-translate-y-[5px]`}
                    />
                    <img src='/nextq.svg' width={40} height={40} alt='React' className='bg-white p-1 rounded-[50%] transition-transform duration-300 hover:-translate-y-[5px]' />
                    <img src='/firebase.svg' width={30} height={30} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />

                </div>

            </motion.div>
        </div>
    )
}

export default HeroSection
