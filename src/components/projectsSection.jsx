'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { icons } from './icons'; // Make sure this file is updated with a video icon

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            image: 'images/lmsportal.png', // The image is now used as the thumbnail
            video: '/videos/lms-demo.mp4',   // The path to the video for the modal
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
            image: 'images/medyour.png', // The image is now used as the thumbnail
            video: '/videos/med.mp4',   // The path to the video for the modal
            name: 'medyour',
            description: 'A comprehensive Medical Portal designed to streamline healthcare access, offering seamless  and personalized health management for users and corporate employees.',
            technologies: [],
            hasMui: true,
            hasNext: true,
            hasTailwind: true,
            hasTs: true,
            link: 'https://portal.medyour.com/'
        },
        {
            id: 3,
            image: 'images/droub.png', // The image is now used as the thumbnail
            video: '/videos/durob.mp4',   // The path to the video for the modal
            name: 'Duroob Al-majd',
            description: 'a customizable Arabic-language dashboard using Next.js (React) and Firebase to manage customer data and dynamic questionnaires, later integrated into a Unity-based game.',
            technologies: [],
            hasMui: true,
            hasNext: true,
            hasTailwind: true,
            hasFire: true,
            hasTs: true,
            link: 'https://droobalmjd.netlify.app/'
        },
        {
            id: 4,
            image: 'images/siminds.png',
            video: null, // This project does not have a video, so the button won't show
            name: 'Siminds',
            description: 'Siminds, a UK-based company, develops cutting-edge virtual reality and simulation solutions.',
            technologies: [{ icon: icons.html, color: "#e34c26" }, { icon: icons.css, color: "#61DBFB" }, { icon: icons.javascript, color: "#f0db4f" }],
            link: 'https://www.siminds.com/'
        },
        {
            id: 5,
            image: 'images/errcf.png',
            video: null,
            name: 'Egyptian Robotics & RC Sports Federation',
            description: 'The Federation empowers youth in Robotics, AI, RC Sports, and Unmanned Vehicles.',
            technologies: [{ icon: icons.html, color: "#e34c26" }, { icon: icons.javascript, color: "#f0db4f" }],
            hasTailwind: true,
            hasFire: true,
            link: 'https://staging.errcsf.org/'
        },
        {
            id: 6,
            image: 'images/arcon.png',
            video: null,
            name: 'Arcon',
            description: 'Arcon delivers innovative solutions to enhance productivity and growth across sectors.',
            hasNext: true,
            technologies: [{ icon: icons.css, color: "#61DBFB" }, { icon: icons.bootstrap, color: "#7618F6" }],
            link: 'https://www.arconcorp.com/'
        },
        {
            id: 7,
            image: 'images/movies.png',
            video: null,
            name: 'Movies App',
            description: 'A movies site offering a vast collection of films with ratings, reviews, and trailers.',
            technologies: [{ icon: icons.bootstrap, color: "#7618F6" }, { icon: icons.react, color: "#61DBFB" }],
            link: 'https://cimaforu.netlify.app/'
        },
        {
            id: 8,
            image: 'images/market.png',
            video: null,
            name: 'E-Commerce Site',
            description: 'An e-commerce site with a user-friendly experience, secure payments, and fast delivery.',
            technologies: [{ icon: icons.bootstrap, color: "#7618F6" }, { icon: icons.react, color: "#61DBFB" }],
            link: 'https://marketoz.netlify.app/'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    // State to manage which video URL is currently shown in the modal
    const [videoToShow, setVideoToShow] = useState(null);

    const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);

    // Handlers to open and close the video modal
    const handleShowVideo = (videoUrl) => setVideoToShow(videoUrl);
    const handleCloseVideo = () => setVideoToShow(null);

    return (
        <div className='py-10 font-montserrat w-full overflow-hidden relative z-0'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>RECENT PROJECTS</p>
            <div className='relative w-full h-[500px] flex items-center justify-center' style={{ perspective: '1200px' }}>
                <AnimatePresence>
                    {projects.map((project, index) => {
                        const offset = index - currentIndex;
                        const isCenter = offset === 0;
                        const isLeft = offset < 0;
                        const absOffset = Math.abs(offset);
                        const scale = 1 - absOffset * 0.15;
                        const y = isCenter ? 0 : 40;
                        const x = isCenter ? '0%' : (isLeft ? '-80%' : '80%');
                        const zIndex = projects.length - absOffset;
                        const opacity = isCenter ? 1 : 0.4;
                        const rotateY = isCenter ? 0 : (isLeft ? 45 : -45);

                        if (absOffset > 2) return null;

                        return (
                            <motion.div
                                key={project.id}
                                // Responsive width for better mobile display
                                className='absolute w-[90%] md:w-[380px] h-[450px]'
                                style={{ transformStyle: 'preserve-3d' }}
                                initial={{ x: isLeft ? '-100%' : '100%', opacity: 0 }}
                                animate={{ x, y, scale, zIndex, opacity, rotateY }}
                                exit={{ x: isLeft ? '-100%' : '100%', opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            >
                                <div className='flex flex-col items-start h-full px-6 py-4 bg-primary rounded-[30px] shadow-lg group'>
                                    <div className='overflow-hidden rounded-[20px] mb-4'>
                                        {/* The image is always displayed on the card now */}
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
                                            <FontAwesomeIcon key={index} icon={tech.icon} style={{ color: tech.color }} className={`text-lg transition-transform duration-300 hover:-translate-y-[5px]`} />
                                        ))}
                                        {project.hasNext && <img src='/nextq.svg' width={20} height={20} alt='Next.js' className='bg-white p-[1px] rounded-[50%] transition-transform duration-300 hover:-translate-y-[5px]' />}
                                        {project.hasFire && <img src='/firebase.svg' width={13} height={10} alt='Firebase' className='transition-transform duration-300 hover:-translate-y-[5px]' />}
                                    </div>

                                    {/* Container for the action links at the bottom of the card */}
                                    <div className="mt-auto flex items-center gap-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 flex items-center gap-2 hover:text-white'>
                                            <FontAwesomeIcon icon={icons.link} />Visit Project
                                        </a>

                                        {/* Conditionally render the "Show Video" button if a video URL exists */}
                                        {project.video && (
                                            <button onClick={() => handleShowVideo(project.video)} className='text-sm text-gray-400 flex items-center gap-2 hover:text-white'>
                                                <FontAwesomeIcon icon={icons.video} />Show Video
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button onClick={handlePrev} className="absolute left-4 md:left-20 z-40 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all">
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                </button>
                <button onClick={handleNext} className="absolute right-4 md:right-20 z-40 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition-all">
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                </button>
            </div>

            {/* Video Modal - appears when 'videoToShow' is not null */}
            <AnimatePresence>
                {videoToShow && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseVideo}
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    >
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <video
                                src={videoToShow}
                                controls
                                autoPlay
                                className="w-full max-w-4xl max-h-[85vh] rounded-lg"
                            />
                            <button
                                onClick={handleCloseVideo}
                                className="absolute -top-3 -right-3 bg-white text-black rounded-full h-8 w-8 flex items-center justify-center text-lg font-bold shadow-lg"
                            >
                                &times;
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectsSection;