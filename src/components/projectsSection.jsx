'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

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

    return (
        <div className='py-10 font-montserrat w-full'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>RECENT PROJECTS</p>
            <div className='flex w-full flex-wrap gap-10 mt-11 justify-center'>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='flex flex-col items-start px-6 py-4 bg-primary flex-1 min-w-[300px] max-w-[380px] rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300 group'
                    >
                        <div className='overflow-hidden rounded-[20px] mb-4'>
                            <img
                                src={project.image}
                                alt="Project"
                                className='w-full h-[200px] rounded-[20px] transform transition-transform duration-300 group-hover:scale-110'
                            />
                        </div>
                        <p className='text-lg font-montserrat font-bold text-white'>{project.name}</p>
                        <p className='text-sm text-gray-400'>{project.description}</p>

                        <div className="bg-black flex gap-2 px-2 py-1 mt-3 rounded-[20px]">
                            {project.hasMui && <img src='/mui.svg' width={20} height={20} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />}
                            {project.hasTailwind && <img src='/tcss.svg' width={20} height={20} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />}
                            {project.hasTs && <img src='/ts.svg' width={20} height={20} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />}

                            {project.technologies.map((tech, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={tech.icon}
                                    className={`text-[${tech.color}] text-lg transition-transform duration-300 hover:-translate-y-[5px]`}
                                />
                            ))}
                            {project.hasNext && <img src='/nextq.svg' width={20} height={20} alt='React' className='bg-white p-[1px] rounded-[50%] transition-transform duration-300 hover:-translate-y-[5px]' />}
                            {project.hasFire && <img src='/firebase.svg' width={13} height={10} alt='React' className=' transition-transform duration-300 hover:-translate-y-[5px]' />}

                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 mt-3 flex items-center gap-2'>
                            <FontAwesomeIcon icon={icons.link} />Visit Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
