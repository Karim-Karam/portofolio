'use client';
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons'; // Ensure this path is correct

// --- Reusable Interactive 3D Card Component ---
const InteractiveCard = ({ children, className }) => {
    const ref = useRef(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['12deg', '-12deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-12deg', '12deg']);

    const spotlightX = useTransform(mouseX, (val) => `${val}px`);
    const spotlightY = useTransform(mouseY, (val) => `${val}px`);


    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / (width / 2);
        const y = (e.clientY - top - height / 2) / (height / 2);
        mouseX.set(x * width * 0.5);
        mouseY.set(y * height * 0.5);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className={`relative ${className}`}
        >
            {/* Dynamic Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: 'radial-gradient(400px at var(--spotlight-x) var(--spotlight-y), rgba(167, 27, 16, 0.2), transparent 40%)',
                    '--spotlight-x': spotlightX,
                    '--spotlight-y': spotlightY,
                }}
            />
            {children}
        </motion.div>
    );
};


// --- Main Hero Section Component ---
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

const HeroSection = ({ onScrollToProjects }) => {
    const name = "Karim Karam";
    const skills = [
        { icon: icons.react, color: "#61DBFB" },
        { src: "/nextq.svg", alt: "Next.js", isImg: true, className: "bg-white p-1 rounded-full" },
        { src: "/ts.svg", alt: "TypeScript", isImg: true },
        { src: "/redux.svg", alt: "Redux", isImg: true },
        { icon: icons.javascript, color: "#f0db4f" },
        { src: "/tcss.svg", alt: "Tailwind CSS", isImg: true },
        { src: "/mui.svg", alt: "Material UI", isImg: true },
        { icon: icons.html, color: "#e34c26" },
        { icon: icons.css, color: "#61DBFB" },
        { icon: icons.bootstrap, color: "#7618F6" },
        { src: "/firebase.svg", alt: "Firebase", isImg: true },
        { icon: icons.github, color: "#ffffff" },
        { src: "/fig.svg", alt: "Figma", isImg: true },
        { src: "/pm.svg", alt: "Postman", isImg: true },
    ];

    return (
        <div className='py-10 w-full flex flex-col lg:flex-row items-stretch gap-8 font-montserrat' style={{ perspective: '1200px' }}>
            {/* Left Column - Profile Card */}
            <InteractiveCard className="group flex-none lg:w-1/3 bg-primary rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl">
                <div style={{ transform: 'translateZ(50px)' }}>
                    <div className="w-48 h-48 rounded-full bg-[#2a2a2a] mb-6 overflow-hidden border-4 border-[#A71B10]">
                        <img src="oo.png" alt="Karim Karam" className="w-full h-full object-cover" />
                    </div>
                </div>

                <h1 className="text-4xl font-bold tracking-wider" style={{ transform: 'translateZ(40px)' }}>
                    {name}
                </h1>

                <p className="text-lg text-[#A71B10] font-semibold mt-2" style={{ transform: 'translateZ(30px)' }}>
                    Front-End Developer
                </p>

                <div className="flex gap-6 mt-8" style={{ transform: 'translateZ(50px)' }}>
                    <a href="https://www.linkedin.com/in/karim-karam-33a36b174/" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] text-3xl hover:text-white transition-colors">
                        <FontAwesomeIcon icon={icons.linkedin} />
                    </a>
                    <a href="https://github.com/Karim-Karam" target="_blank" rel="noopener noreferrer" className="text-white text-3xl hover:text-[#A71B10] transition-colors">
                        <FontAwesomeIcon icon={icons.github} />
                    </a>
                </div>
            </InteractiveCard>

            {/* Right Column - Info Card */}
            <InteractiveCard className="group flex-1 bg-primary rounded-3xl p-8 shadow-2xl flex flex-col">
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="h-full flex flex-col">
                    <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-wider mb-4" style={{ transform: 'translateZ(30px)' }}>ABOUT ME</motion.h1>
                    <motion.p variants={itemVariants} className='text-gray-400 leading-relaxed' style={{ transform: 'translateZ(20px)' }}>
                        I am a results-driven Front-End Developer with over two years of hands-on experience specializing in React.js and Next.js. Passionate about building high-performance, responsive, and user-centric web applications through clean, maintainable, and efficient code.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-6" style={{ transform: 'translateZ(25px)' }}>
                        <a href='https://drive.usercontent.google.com/download?id=1LTxxuAetY94qhPZgo9XeFFrZ3oiempUA&export=download&authuser=0&confirm=t&uuid=345745c2-2f69-4094-911b-26fcba460027&at=AEz70l6slISazWWy8MMr7mKJh4Ct:1740492798930' className='bg-[#A71B10] text-white font-bold px-6 py-3 rounded-full hover:bg-black transition-all duration-300 text-center shadow-md hover:shadow-lg'>
                            Download CV
                        </a>
                        <button onClick={onScrollToProjects} className="bg-gray-700 text-white font-bold px-6 py-3 rounded-full hover:bg-gray-600 transition-all duration-300 text-center shadow-md hover:shadow-lg">
                            View My Work
                        </button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="h-[1px] bg-gray-700 my-8"></motion.div>

                    <motion.h1 variants={itemVariants} className='font-bold text-2xl mb-4 font-mono tracking-wider' style={{ transform: 'translateZ(30px)' }}>SKILLS</motion.h1>
                    <motion.div variants={containerVariants} className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6' style={{ transform: 'translateZ(20px)' }}>
                        {skills.map((skill, index) => (
                            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, scale: 1.1 }} className="flex items-center justify-center">
                                {skill.isImg ? (
                                    <img src={skill.src} alt={skill.alt} className={`w-10 h-10 ${skill.className || ''}`} />
                                ) : (
                                    <FontAwesomeIcon icon={skill.icon} style={{ color: skill.color }} className="text-4xl" />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={itemVariants} className='mt-auto pt-8 text-center text-sm text-gray-500' style={{ transform: 'translateZ(10px)' }}>
                        Contact: <a href="mailto:karamkarim454@gmail.com" className="text-[#A71B10] hover:underline">karamkarim454@gmail.com</a> | Cairo, Egypt
                    </motion.div>
                </motion.div>
            </InteractiveCard>
        </div>
    );
};

export default HeroSection;