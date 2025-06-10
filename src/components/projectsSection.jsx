'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { icons } from './icons'; // Assuming your icons file is correctly set up

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            image: 'images/lmsportal.png',
            name: 'Labs for Home',
            description: 'LMS Portal designed for seamless course management, user engagement, and efficient learning.',
            technologies: [],
            hasMui: true,
            hasNext: true,
            hasTs: true,
            link: 'https://lms.siminds.net/'
        },
        {
            id: 2,
            image: 'images/siminds.png',
            name: 'Siminds',
            description: 'Siminds, a UK-based company, develops cutting-edge virtual reality and simulation solutions.',
            technologies: [{ icon: icons.html, color: "#e34c26" }, { icon: icons.css, color: "#61DBFB" }, { icon: icons.javascript, color: "#f0db4f" }],
            link: 'https://www.siminds.com/'
        },
        {
            id: 3,
            image: 'images/errcf.png',
            name: 'Egyptian Robotics & RC Sports Federation',
            description: 'The Federation empowers youth in Robotics, AI, RC Sports, and Unmanned Vehicles.',
            technologies: [{ icon: icons.html, color: "#e34c26" }, { icon: icons.javascript, color: "#f0db4f" }],
            hasTailwind: true,
            hasFire: true,
            link: 'https://staging.errcsf.org/'
        },
        {
            id: 4,
            image: 'images/arcon.png',
            name: 'Arcon',
            description: 'Arcon delivers innovative solutions to enhance productivity and growth across sectors.',
            hasNext: true,
            technologies: [{ icon: icons.css, color: "#61DBFB" }, { icon: icons.bootstrap, color: "#7618F6" }],
            link: 'https://www.arconcorp.com/'
        },
        {
            id: 5,
            image: 'images/movies.png',
            name: 'Movies App',
            description: 'A movies site offering a vast collection of films with ratings, reviews, and trailers.',
            technologies: [{ icon: icons.bootstrap, color: "#7618F6" }, { icon: icons.react, color: "#61DBFB" }],
            link: 'https://cimaforu.netlify.app/'
        },
        {
            id: 6,
            image: 'images/market.png',
            name: 'E-Commerce Site',
            description: 'An e-commerce site with a user-friendly experience, secure payments, and fast delivery.',
            technologies: [{ icon: icons.bootstrap, color: "#7618F6" }, { icon: icons.react, color: "#61DBFB" }],
            link: 'https://marketoz.netlify.app/'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className='py-10 font-montserrat w-full overflow-hidden'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>RECENT PROJECTS</p>
            <div className='relative w-full h-[500px] flex items-center justify-center' style={{ perspective: '1200px' }}>
                <AnimatePresence>
                    {projects.map((project, index) => {
                        const offset = index - currentIndex;
                        const isCenter = offset === 0;
                        const isLeft = offset < 0;
                        const isRight = offset > 0;

                        // Use Math.abs(offset) to treat left and right sides symmetrically
                        const absOffset = Math.abs(offset);

                        const scale = 1 - absOffset * 0.15;
                        const y = isCenter ? 0 : 40; // Lift center card slightly if desired, or keep at 0
                        const x = isCenter ? '0%' : (isLeft ? '-80%' : '80%'); // Position side cards
                        const zIndex = projects.length - absOffset;
                        const opacity = isCenter ? 1 : 0.4;
                        const rotateY = isCenter ? 0 : (isLeft ? 45 : -45);

                        // Only render a few cards for performance (e.g., center, one on each side, and the next ones out of view)
                        if (absOffset > 2) {
                            return null;
                        }

                        return (
                            <motion.div
                                key={project.id}
                                className='absolute w-[380px] h-[450px]'
                                style={{
                                    transformStyle: 'preserve-3d',
                                }}
                                initial={{ x: isLeft ? '-100%' : '100%', opacity: 0 }}
                                animate={{
                                    x,
                                    y,
                                    scale,
                                    zIndex,
                                    opacity,
                                    rotateY,
                                }}
                                exit={{
                                    x: isLeft ? '-100%' : '100%',
                                    opacity: 0,
                                }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            >
                                {/* This is your original card content */}
                                <div className='flex flex-col items-start h-full px-6 py-4 bg-primary rounded-[30px] shadow-lg group'>
                                    <div className='overflow-hidden rounded-[20px] mb-4'>
                                        <img
                                            src={project.image}
                                            alt="Project"
                                            className='w-full h-[200px] object-cover rounded-[20px]'
                                        />
                                    </div>
                                    <p className='text-lg font-montserrat font-bold text-white'>{project.name}</p>
                                    <p className='text-sm text-gray-400'>{project.description}</p>

                                    <div className="bg-black flex gap-2 px-2 py-1 mt-3 rounded-[20px]">
                                        {project.hasMui && <img src='/mui.svg' width={20} height={20} alt='MUI' className='transition-transform duration-300 hover:-translate-y-[5px]' />}
                                        {project.hasTailwind && <img src='/tcss.svg' width={20} height={20} alt='Tailwind' className='transition-transform duration-300 hover:-translate-y-[5px]' />}
                                        {project.hasTs && <img src='/ts.svg' width={20} height={20} alt='TypeScript' className='transition-transform duration-300 hover:-translate-y-[5px]' />}

                                        {project.technologies.map((tech, index) => (
                                            <FontAwesomeIcon
                                                key={index}
                                                icon={tech.icon}
                                                style={{ color: tech.color }} // Use style for dynamic colors
                                                className={`text-lg transition-transform duration-300 hover:-translate-y-[5px]`}
                                            />
                                        ))}
                                        {project.hasNext && <img src='/nextq.svg' width={20} height={20} alt='Next.js' className='bg-white p-[1px] rounded-[50%] transition-transform duration-300 hover:-translate-y-[5px]' />}
                                        {project.hasFire && <img src='/firebase.svg' width={13} height={10} alt='Firebase' className='transition-transform duration-300 hover:-translate-y-[5px]' />}
                                    </div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 mt-auto flex items-center gap-2 hover:text-white'>
                                        <FontAwesomeIcon icon={icons.link} />Visit Project
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 md:left-20 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
                >
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 md:right-20 z-50 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all"
                >
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                </button>
            </div>
        </div>
    );
};

export default ProjectsSection;