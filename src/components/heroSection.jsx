'use client'
import React from 'react'
import SplineMac from './spline'

const HeroSection = () => {
    return (
        <div className='py-10 w-full h-[100vh] max-h-[800px] flex gap-7'>
            <div className="bg-[#161616] flex-1 rounded-[20px] p-2">s</div>
            <div className="bg-[#A71B10] flex-[2] rounded-[20px] p-2">
                {/* <SplineMac /> */}
            </div>
            <div className="bg-[#161616] flex-1 rounded-[20px] p-2">s</div>
        </div>
    )
}

export default HeroSection
