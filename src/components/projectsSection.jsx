import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const ProjectsSection = () => {
    // Array of project data
    const projects = [
        {
            id: 1,
            image: 'images/lmsportal.png',
            name: 'labs for home',
            description: 'Lms Portal designed for seamless course management, user engagement, and efficient learning. It enables instructors to create, manage, and deliver content while providing students with interactive learning experiences, progress tracking, and assessment tools for an optimized education experience.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: 'https://lms.siminds.net/'
        },
        {
            id: 2,
            image: 'images/siminds.png',
            name: 'Siminds',
            description: 'Siminds, a UK-based company, develops cutting-edge virtual reality and simulation solutions for industries like Oil & Gas, Medicine, and Science. Combining expertise and innovation, it revolutionizes training by connecting global tellectuals through state-of-the-art simulation technology.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: 'https://www.siminds.com/'
        },

        {
            id: 3,
            image: 'images/errcf.png',
            name: 'Egyptian Robotics & RC Sports Federation',
            description: 'The Federation empowers youth in Robotics, AI, RC Sports, Unmanned Vehicles, and Programming through training and competitions. We drive digital transformation, enhance global competitiveness, and support Egypt’s Vision 2030, positioning Egypt as a regional innovation hub for sustainable development.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: 'https://staging.errcsf.org/'
        },
        {
            id: 4,
            image: 'images/arcon.png',
            name: 'Arcon',
            description: 'Arcon delivers innovative solutions to enhance productivity and growth across sectors. Committed to bridging technology and education, it fosters creativity and learning, creating transformative environments where individuals and businesses thrive.',
            technologies: [{ icon: icons.javascript, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: 'https://www.arconcorp.com/'
        },
        {
            id: 5,
            image: 'images/movies.png',
            name: 'movies app',
            description: 'A movies site offering a vast collection of films with detailed information, including ratings, reviews, cast, and trailers.Users can explore genres, discover new releases, and stay updated on their favorite movies for an enhanced viewing experience.',
            technologies: [{ icon: icons.javascript, color: "red" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: 'https://cimaforu.netlify.app/'
        },
        {
            id: 6,
            image: 'images/market.png',
            name: 'E–commerse site',
            description: 'An e-commerce site enabling seamless online shopping with a wide range of products, secure payments, and fast delivery. It offers a user-friendly experience, personalized recommendations, and efficient order management for a convenient and enjoyable shopping journey.',
            technologies: [{ icon: icons.javascript, color: "red" }, { icon: icons.database, color: "#61DAFB" }, { icon: icons.database, color: "#61DAFB" }],
            link: 'https://marketoz.netlify.app/'
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