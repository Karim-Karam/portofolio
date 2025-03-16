'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const HeroSection = ({ onScrollToProjects }) => {

    return (
        <div className='py-10 w-full  flex flex-col lg:flex-row gap-7'>
            {/* First Div - Animates from Left on Scroll */}


            {/* Third Div - Animates from Right on Scroll */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-[#161616] flex-1 rounded-[20px] p-4"
            >
                <motion.div className='text-center font-montserrat font-bold text-[3rem]'>
                    {['K', 'a', 'r', 'i', 'm', ' ', 'K', 'a', 'r', 'a', 'm'].map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ color: '#ffffff' }}
                            animate={{
                                y: [-5, 5, -5],
                                color: ['#ffffff', '#A71B10', '#ffffff'],
                                scale: [1, 1.2, 1],
                                textShadow: [
                                    '0 0 0px rgba(255,255,255,0)',
                                    '0 0 10px rgba(167,27,16,0.5)',
                                    '0 0 0px rgba(255,255,255,0)'
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.1
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
                <p className='text-gray-400 mt-4 font-montserrat'>
                    I am a results-driven Front-End Developer with over two years of hands-on experience specializing in React.js and next.js. Passionate about building high-performance, responsive, and user-centric web applications, I excel in modern front-end technologies, component-based architecture, state management, API integration, and UI/UX implementation. With a strong focus on performance optimization, scalability, and cross-browser compatibility, I continuously adapt to emerging trends to deliver seamless digital experiences through clean, maintainable, and efficient code.
                </p>
                <div className='w-full flex justify-center mt-3'>
                    <a
                        href='https://drive.usercontent.google.com/download?id=1LTxxuAetY94qhPZgo9XeFFrZ3oiempUA&export=download&authuser=0&confirm=t&uuid=345745c2-2f69-4094-911b-26fcba460027&at=AEz70l6slISazWWy8MMr7mKJh4Ct:1740492798930'
                        className='font-montserrat bg-[#A71B10] px-5 py-2 rounded-[30px] hover:bg-[black] hover:cursor-pointer'
                    >
                        Download CV
                    </a>

                </div>
                <h1 className='font-bold text-[1.3rem] mt-8 font-mono tracking-wider'>CONTACT INFO</h1>
                <div className="mt-6 w-full flex flex-wrap justify-between px-2 lg:px-8">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                            icon={icons.location}
                            className="text-[#A71B10] text-xl"
                        />
                        <span className="text-gray-400">Cairo, Egypt</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                            icon={icons.phone}
                            className="text-[#A71B10] text-xl"
                        />
                        <span className="text-gray-400">+201092350393</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon
                            icon={icons.email}
                            className="text-[#A71B10] text-xl"
                        />
                        <span className="text-gray-400">karamkarim454@gmail.com</span>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.linkedin.com/in/karim-karam-33a36b174/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={icons.linkedin}
                                className="text-[#0077B5] text-2xl hover:scale-110 transition-transform"
                            />
                        </a>
                        <a href="https://github.com/Karim-Karam" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={icons.github}
                                className="text-white text-2xl hover:scale-110 transition-transform"
                            />
                        </a>
                        {/* <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={icons.whatsapp}
                                className="text-[#25D366] text-2xl hover:scale-110 transition-transform"
                            />
                        </a> */}
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className='font-bold text-[1.3rem] mb-3 font-mono tracking-wider'>SKILLS</h1>
                    <div className='flex flex-wrap w-full justify-center gap-4 my-4'>
                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={icons.html}
                                className={`text-[#e34c26] text-[2.8rem]`}
                            />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={icons.css}
                                className={`text-[#61DBFB] text-[2.8rem]`}
                            />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={icons.bootstrap}
                                className={`text-[#7618F6] text-[2.8rem]`}
                            />
                        </motion.div>
                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={icons.javascript}
                                className={`text-[#f0db4f] text-[2.8rem]`}
                            />
                        </motion.div>

                        <motion.img
                            src='/ts.svg'
                            width={40}
                            height={40}
                            alt='TypeScript'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                            }}
                        />
                        <motion.img
                            src='/mui.svg'
                            width={40}
                            height={40}
                            alt='Material UI'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
                            }}
                        />
                        <motion.img
                            src='/tcss.svg'
                            width={40}
                            height={40}
                            alt='Tailwind CSS'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                            }}
                        />

                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={icons.github}
                                className={`text-white text-[2.5rem]`}
                            />
                        </motion.div>

                        <motion.img
                            src='/redux.svg'
                            width={40}
                            height={40}
                            alt='Redux'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.6 }
                            }}
                        />

                        <motion.div
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
                            }}
                        >
                            <FontAwesomeIcon
                                icon={icons.react}
                                className={`text-[#61DBFB] text-[2.5rem]`}
                            />
                        </motion.div>

                        <motion.img
                            src='/nextq.svg'
                            width={40}
                            height={40}
                            alt='Next.js'
                            className='bg-white p-1 rounded-[50%]'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }
                            }}
                        />
                        <motion.img
                            src='/firebase.svg'
                            width={30}
                            height={30}
                            alt='Firebase'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.2 }
                            }}
                        />

                        <motion.img
                            src='/pm.svg'
                            width={40}
                            height={40}
                            alt='Postman'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.4 }
                            }}
                        />
                        <motion.img
                            src='/fig.svg'
                            width={30}
                            height={30}
                            alt='Figma'
                            animate={{
                                y: [-5, 5, -5],
                                transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.6 }
                            }}
                        />
                    </div>
                    <p className='text-gray-400 font-montserrat text-center px-4'>
                        Visit the <span onClick={onScrollToProjects} className="text-[#A71B10] font-bold cursor-pointer">Projects</span> section to explore some of the amazing work I have done using these modern web technologies.
                        I specialize in building responsive, interactive, and high-performance web applications.
                        Whether it's front-end development,state management, or integrating with back-end services, my skills in React.js, next.js, Redux, TypeScript, TailwindCSS, Firebase.
                    </p>
                </div>

            </motion.div>
        </div>
    )
}

export default HeroSection
