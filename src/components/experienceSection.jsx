import React from 'react'

const ExperirnceSection = () => {

    const works = [
        {
            id: 1,
            organization: 'Freelance',
            title: 'Freelance Full-Stack Developer',
            description: ' Developed a customizable Arabic-language dashboard using Next.js (React) and Firebase  to manage customer data and dynamic questionnaires, later integrated into a Unity-based game.',
            date: '04/25 - 06/25',
        },
        {
            id: 2,
            organization: 'ARCON ME',
            title: 'FRONT END  Developer',
            description: 'As a Front-End Developer specializing in React and Next.js, I design, develop, and maintain responsive web applications, including LMS and medical platforms, collaborating with cross-functional teams to deliver user-centric,high-performance solutions.',
            date: '01/23 - PRESENT',
        },
        {
            id: 3,
            organization: 'EGYPTIAN ARMY',
            title: 'OFFICER',
            description: 'Served as an officer in the Egyptian Army, leading and managing teams in high-pressure environments. Gained expertise in strategic planning, operations, discipline, and teamwork while ensuring mission success and maintaining security and efficiency in military operations.',
            date: '04/20 - 10/22',
        },
    ];

    return (

        <div className='py-10 font-montserrat w-full'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>EXPERIENCE OR WORK</p>
            <div className='flex flex-col w-full flex-wrap gap-10 mt-11 '>
                {works.map((work) => (
                    <div key={work.id} className='flex flex-col lg:flex-row gap-1 lg:items-center px-6 py-4  flex-1 justify-between rounded-[30px] shadow-lg hover:
                                    transition-shadow duration-300 group'>
                        <div className=' font-bold text-[1.5rem]'>
                            {work.organization}
                        </div>
                        <div className='bg-primary py-5 flex flex-col rounded-[30px] px-5 w-full lg:w-[60%]'>
                            <span className='text-[1.3rem] font-bold'>{work.title}</span>
                            <span className='mb-4 text-[0.8rem]'>{work.date}</span>
                            <p className='text-gray-400 w-[95%]'>{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperirnceSection
