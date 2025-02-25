'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const HeroSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            // Replace with your EmailJS service ID, template ID, and user ID
            const serviceId = 'service_kktbuds';
            const templateId = 'template_gaknvhv';
            const userId = 'Ih_UWqIFj37pW3qM5';

            // Send the email
            await emailjs.send(serviceId, templateId, {
                name: name,
                email: email,  // Sender email
                // subject: subject,   // Email subject
                message: message,   // Email body
            }, userId);


            setSuccess(true);
            setName('');
            setEmail('')
            setMessage('');
        } catch (err) {
            setError('Failed to send email. Please try again.');
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='py-10 font-montserrat w-full'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>CONTACT ME</p>


            <motion.form
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }} // Animates only once
                className="lg:px-[20%] my-10"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col lg:flex-row lg:gap-6">
                    <input
                        required
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#161616] px-4 py-3 rounded-[30px] mb-4"
                    />
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full bg-[#161616] px-4 py-3 rounded-[30px] mb-4"
                    />
                </div>
                <div className='mb-4'>
                    <textarea
                        required
                        type="text"
                        rows="5"
                        style={{ resize: "none" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full p-2 rounded bg-black text-white'
                        placeholder="message"
                        className="w-full bg-[#161616] px-4 py-4 rounded-[30px]"
                    />
                    {success && <p className=''>message Sent Successfully  <FontAwesomeIcon
                        icon={icons.check}
                        className={`text-green-500 text-lg transition-transform duration-300 hover:-translate-y-[5px]`}
                    /> </p>}
                    {error && <p className='text-red-500 '>{error}</p>}
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-[#A71B10] px-6 py-2 rounded-[30px]"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send message'}
                    </motion.button>
                </div>
            </motion.form>

        </div>

    );
};

export default HeroSection;