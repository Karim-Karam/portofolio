import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const ProjectsSection = () => {
    return (
        <div className='py-10 font-montserrat w-full '>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>RECENT PROJECTS</p>
            <div className='flex w-full flex-wrap gap-10 mt-11 '>


                <div className='flex flex-col items-start px-6 py-4 bg-primary flex-1 min-w-[300px] max-w-[380px] rounded-[30px] shadow-lg'>
                    <img src='images/lmsportal.png' alt="Project" className='w-full h-[200px] rounded-[20px] mb-4 ' />
                    <p className='text-lg font-montserrat font-bold text-white'>Project name</p>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

                    <div className="bg-black flex gap-2 px-2 py-1 mt-3 rounded-[20px]">
                        <FontAwesomeIcon icon={icons.javascript} className="text-[#61DAFB] text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 mt-3 flex items-center gap-2'><FontAwesomeIcon icon={icons.link} />Visit Project</a>
                </div>


                <div className='flex flex-col items-start px-6 py-4 bg-primary flex-1 min-w-[300px] max-w-[380px] rounded-[30px] shadow-lg'>
                    <img src='images/arcon.png' alt="Project" className='w-full h-[200px] rounded-[20px] mb-4 ' />
                    <p className='text-lg font-montserrat font-bold text-white'>Project name</p>

                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

                    <div className="bg-black flex gap-2 px-2 py-1 mt-3 rounded-[20px]">
                        <FontAwesomeIcon icon={icons.react} className="text-[#61DAFB] text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.css} className="text-[#2965f1] text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.github} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 mt-3 flex items-center gap-2'><FontAwesomeIcon icon={icons.link} />Visit Project</a>

                </div>


                <div className='flex flex-col items-start px-6 py-4 bg-primary flex-1 min-w-[300px] max-w-[380px] rounded-[30px] shadow-lg'>
                    <img src='images/siminds.png' alt="Project" className='w-full h-[200px] rounded-[20px] mb-4 ' />
                    <p className='text-lg font-montserrat font-bold text-white'>Project name</p>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

                    <div className="bg-black flex gap-2 px-2 py-1 mt-3 rounded-[20px]">
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 mt-3 flex items-center gap-2'><FontAwesomeIcon icon={icons.link} />Visit Project</a>

                </div>
                <div className='flex flex-col items-start px-6 py-4 bg-primary flex-1 min-w-[300px] max-w-[380px] rounded-[30px] shadow-lg'>
                    <img src='images/bg.png' alt="Project" className='w-full h-[200px] rounded-[30px] mb-4 object-cover' />

                    <p className='text-lg font-montserrat font-bold text-white'>Project name</p>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>

                    <div className="bg-black flex gap-2 px-2 py-1 mt-3 rounded-[20px]">
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                        <FontAwesomeIcon icon={icons.database} className="text-yellow-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]" />
                    </div>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 mt-3 flex items-center gap-2'><FontAwesomeIcon icon={icons.link} />Visit Project</a>

                </div>
            </div>

        </div >

    );
};

export default ProjectsSection;
