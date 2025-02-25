'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            name: 'WEB DEVELOPMENT',
            description: 'Building responsive and user-friendly websites for modern businesses.',
            icon: icons.code,
        },
        {
            id: 2,
            name: 'SEO OPTIMIZATION',
            description: 'Improving website visibility and ranking on search engines effectively.',
            icon: icons.search,
        },
        {
            id: 3,
            name: 'MOBILE APPLICATIONS',
            description: 'Developing high-performance mobile apps for iOS and Android platforms.',
            icon: icons.mobile,
        }
    ];

    return (
        <div className='py-10 font-montserrat w-full'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>OUR SERVICES</p>
            <div className='flex w-full flex-wrap gap-10 mt-11 justify-center'>
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ y: -50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className='flex flex-col items-start px-6 py-4 bg-primary flex-1 min-w-[300px] max-w-[380px] rounded-[30px] shadow-lg hover:shadow-xl transition-shadow duration-300 group'
                    >
                        <div className='pt-10 mb-8 relative'>
                            <div className='absolute top-4 left-3 w-[45px] h-[45px] rounded-[50%] bg-[red] z-5 transform transition-transform duration-300 group-hover:left-4 group-hover:top-3'></div>
                            <FontAwesomeIcon icon={service.icon} className='text-white text-4xl z-10 relative' />
                        </div>
                        <p className='text-lg font-montserrat font-bold text-white mb-1'>{service.name}</p>
                        <p className='text-sm text-gray-400'>{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;
