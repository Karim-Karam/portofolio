'use client'
import React from 'react'
import SplineMac from './spline'

const HeroSection = () => {
    return (
        <div className='py-10 w-full h-[100vh] max-h-[800px] flex gap-7'>
            <div className="bg-[#161616] flex-1 rounded-[20px] py-2 px-6 ">
                <h1 className='font-bold text-[1.3rem] mb-3 font-mono tracking-wider'>Profile</h1>
                <p className='text-gray-400 font-montserrat'>Results-driven Front-End Developer with 2 years of hands-on experience in React.js and
                    next.js. Passionate about crafting high-performance, responsive, and user-centric web
                    applications that enhance digital experiences. Adept at optimizing application speed,
                    implementing best UI/UX practices, and collaborating with cross-functional teams to deliver
                    scalable, high-quality solutions within deadlines.</p>

                <div className='text-center mt-8'><a href='https://drive.usercontent.google.com/download?id=1LTxxuAetY94qhPZgo9XeFFrZ3oiempUA&export=download&authuser=0&confirm=t&uuid=345745c2-2f69-4094-911b-26fcba460027&at=AEz70l6slISazWWy8MMr7mKJh4Ct:1740492798930' className='font-montserrat bg-black px-5 py-2 rounded-[30px] hover:bg-[#A71B10] hover:cursor-pointer'>Download CV</a></div>
            </div>
            <div className="bg-[#A71B10] flex-[2] rounded-[20px] p-2">
                <h1 className='font-bold text-[1.3rem] mb-3 font-mono tracking-wider'>Profile</h1>
                <p className='text-gray-400 font-montserrat'>Results-driven Front-End Developer with 2 years of hands-on experience in React.js and
                    next.js. Passionate about crafting high-performance, responsive, and user-centric web
                    applications that enhance digital experiences. Adept at optimizing application speed,
                    implementing best UI/UX practices, and collaborating with cross-functional teams to deliver
                    scalable, high-quality solutions within deadlines.</p>


            </div>
            <div className="bg-[#161616] flex-1 rounded-[20px] p-2">s</div>
        </div >
    )
}

export default HeroSection
