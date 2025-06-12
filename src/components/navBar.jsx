'use client';
import React from 'react';

// It's good practice to define your navigation items as an array of objects.
// This makes the component cleaner and easier to manage.
const navItems = [
    {
        id: 'hero', label: 'Home', icon: (
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
            </svg>
        )
    },
    {
        id: 'projects', label: 'Projects', icon: (
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z" />
            </svg>
        )
    },
    {
        id: 'services', label: 'Services', icon: (
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 5V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5M9 3v4a1 1 0 0 1-1 1H4m11.383.772 2.745 2.746m1.215-3.906a2.089 2.089 0 0 1 0 2.953l-6.65 6.646L9 17.95l.739-3.692 6.646-6.646a2.087 2.087 0 0 1 2.958 0Z" />
            </svg>
        )
    },
    {
        id: 'experience', label: 'Experience', icon: (
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01" />
            </svg>
        )
    },
    {
        id: 'contact', label: 'Contact', icon: (
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
            </svg>
        )
    },
];

// Correct the prop name from onScrollToExperirnce -> onScrollToExperience
const NavBar = ({ activeSection, onScrollToHero, onScrollToProjects, onScrollToServices, onScrollToExperience, onScrollToContact }) => {

    // Match the onClick functions to the correct id
    const scrollHandlers = {
        hero: onScrollToHero,
        projects: onScrollToProjects,
        services: onScrollToServices,
        experience: onScrollToExperience,
        contact: onScrollToContact,
    };

    return (
        <nav
            style={{ zIndex: '50' }}
            className='fixed top-[90vh] px-4 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:right-8 lg:translate-x-0
                       flex lg:flex-col items-center justify-center gap-4 py-3 
                       bg-gray-900/30 dark:bg-black/30 backdrop-blur-lg border border-white/20 rounded-full'
        >
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={scrollHandlers[item.id]}
                    // The 'group' class is for the tooltip hover effect
                    className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ease-in-out
                                ${activeSection === item.id
                            ? "bg-secondary text-white scale-110"
                            : "text-gray-300 hover:bg-secondary/50 hover:text-white"
                        }`}
                    aria-label={`Scroll to ${item.label}`}
                >
                    {item.icon}
                    {/* Tooltip for desktop */}
                    <div className="hidden lg:block absolute right-full mr-4 px-3 py-1.5 bg-gray-800 text-white text-sm font-semibold rounded-md shadow-lg 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {item.label}
                    </div>
                </button>
            ))}
        </nav>
    );
}

export default NavBar;