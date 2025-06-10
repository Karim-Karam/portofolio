'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons'; // Ensure this path is correct

// Animation Variants for Framer Motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 },
    },
};

const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        },
    },
};

const skillIconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: 'spring', stiffness: 150, damping: 10 }
    }
};

const HeroSection = ({ onScrollToProjects }) => {
    const name = "Karim Karam";

    // A reusable component for skill icons to keep the code DRY
    const SkillIcon = ({ icon, color, custom, alt, src, className = '' }) => (
        <motion.div
            variants={skillIconVariants}
            whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }}
            className={`flex items-center justify-center ${className} `}
        >
            {src ? (
                <img src={src} alt={alt} className="w-10 h-10" />
            ) : (
                <FontAwesomeIcon icon={icon} style={{ color }} className="text-4xl" />
            )}
        </motion.div>
    );

    return (
        <div className='py-10 w-full flex flex-col lg:flex-row items-stretch gap-8 font-montserrat'>
            {/* Left Column - Profile Card */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="sm:bg-primary flex-none lg:w-1/3 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-lg"
            >
                <motion.div
                    className="w-48 h-48 rounded-full bg-[#2a2a2a] mb-6 overflow-hidden border-4 border-[#A71B10]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
                >
                    {/* Replace with your actual image */}
                    <img src="oo.png" alt="Karim Karam" className="w-full h-full object-cover" />
                </motion.div>

                <motion.div
                    className="text-4xl font-bold tracking-wider"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {name.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariants} className="inline-block">
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.p
                    className="text-lg text-[#A71B10] font-semibold mt-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    Front-End Developer
                </motion.p>

                <motion.div
                    className="flex gap-6 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.a href="https://www.linkedin.com/in/karim-karam-33a36b174/" target="_blank" rel="noopener noreferrer" variants={itemVariants} className="text-[#0077B5] text-3xl hover:text-white transition-colors">
                        <FontAwesomeIcon icon={icons.linkedin} />
                    </motion.a>
                    <motion.a href="https://github.com/Karim-Karam" target="_blank" rel="noopener noreferrer" variants={itemVariants} className="text-white text-3xl hover:text-[#A71B10] transition-colors">
                        <FontAwesomeIcon icon={icons.github} />
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Right Column - Info Card */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="sm:bg-primary flex-1 rounded-3xl p-8 shadow-lg flex flex-col"
            >
                <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-wider mb-4">ABOUT ME</motion.h1>
                <motion.p variants={itemVariants} className='text-gray-400 leading-relaxed'>
                    I am a results-driven Front-End Developer with over two years of hands-on experience specializing in React.js and Next.js. Passionate about building high-performance, responsive, and user-centric web applications through clean, maintainable, and efficient code.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a
                        href='https://drive.usercontent.google.com/download?id=1LTxxuAetY94qhPZgo9XeFFrZ3oiempUA&export=download&authuser=0&confirm=t&uuid=345745c2-2f69-4094-911b-26fcba460027&at=AEz70l6slISazWWy8MMr7mKJh4Ct:1740492798930'
                        className='bg-[#A71B10] text-white font-bold px-6 py-3 rounded-full hover:bg-black transition-all duration-300 text-center shadow-md hover:shadow-lg'
                    >
                        Download CV
                    </a>
                    <button
                        onClick={onScrollToProjects}
                        className="bg-gray-700 text-white font-bold px-6 py-3 rounded-full hover:bg-gray-600 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                    >
                        View My Work
                    </button>
                </motion.div>

                <motion.div variants={itemVariants} className="h-[1px] bg-gray-700 my-8"></motion.div>

                <motion.h1 variants={itemVariants} className='font-bold text-2xl mb-4 font-mono tracking-wider'>SKILLS</motion.h1>
                <motion.div variants={containerVariants} className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6'>
                    {/* Replaced with the reusable SkillIcon component */}
                    <SkillIcon icon={icons.react} color="#61DBFB" />
                    <SkillIcon src="/nextq.svg" alt="Next.js" className="bg-white rounded-full " />
                    <SkillIcon src="/ts.svg" alt="TypeScript" />
                    <SkillIcon src="/redux.svg" alt="Redux" />
                    <SkillIcon icon={icons.javascript} color="#f0db4f" />
                    <SkillIcon src="/tcss.svg" alt="Tailwind CSS" />
                    <SkillIcon src="/mui.svg" alt="Material UI" />
                    <SkillIcon icon={icons.html} color="#e34c26" />
                    <SkillIcon icon={icons.css} color="#61DBFB" />
                    <SkillIcon icon={icons.bootstrap} color="#7618F6" />
                    <SkillIcon src="/firebase.svg" alt="Firebase" />
                    <SkillIcon icon={icons.github} color="#ffffff" />
                    <SkillIcon src="/fig.svg" alt="Figma" />
                    <SkillIcon src="/pm.svg" alt="Postman" />
                </motion.div>

                <motion.div variants={itemVariants} className='mt-auto pt-8'>
                    <p className='text-gray-500 font-montserrat text-center text-sm'>
                        Contact: <a href="mailto:karamkarim454@gmail.com" className="text-[#A71B10] hover:underline">karamkarim454@gmail.com</a> | Cairo, Egypt
                    </p>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default HeroSection;