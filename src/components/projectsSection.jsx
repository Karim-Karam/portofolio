import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const ProjectsSection = () => {
    // Array of project data
    const projects = [
        {
            id: 1,
            image: 'images/lmsportal.png',
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: '#'
        },
        {
            id: 2,
            image: 'images/siminds.png',
            name: 'Project 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: '#'
        },
        {
            id: 3,
            image: 'images/arcon.png',
            name: 'Project 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: '#'
        },
        {
            id: 4,
            image: 'images/lmsportal.png',
            name: 'Project 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: '#'
        },
        {
            id: 5,
            image: 'images/lmsportal.png',
            name: 'Project 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            technologies: [{ icon: icons.javascript, color: "red" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: '#'
        }
    ];

    return (
        <div className='py-10 font-montserrat w-full'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>RECENT PROJECTS</p>
            <div className='flex w-full flex-wrap gap-10 mt-11'>
                {projects.map((project) => (
                    <div key={project.id} className='flex flex-col items-start px-6 py-4 bg-primary flex-1 min-w-[300px] max-w-[380px] rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300 group'>
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
                            {project.technologies.map((tech, index) => (
                                <FontAwesomeIcon key={index} icon={tech.icon} className={`text-[${tech.color}] text-lg transition-transform duration-300 hover:-translate-y-[5px]`} />
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className='text-sm text-gray-400 mt-3 flex items-center gap-2'>
                            <FontAwesomeIcon icon={icons.link} />Visit Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;