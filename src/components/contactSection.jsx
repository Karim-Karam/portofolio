import React from 'react'

const ContactSection = () => {
    return (
        <div className='py-10 font-montserrat w-full'>
            <p className='text-4xl font-bold text-center font-montserrat py-6'>CONTACT ME</p>
            <form className='px-[20%] my-10'>
                <div className="flex gap-6">
                    <input required type="text" placeholder='name' className='w-full bg-[#161616] px-4 py-3 rounded-[30px] mb-4' />
                    <input required type="email" placeholder='Email' className='w-full bg-[#161616] px-4 py-3 rounded-[30px] mb-4' />
                </div>
                <textarea required type="text" rows='5' style={{ resize: "none" }} placeholder='message' className='w-full bg-[#161616] px-4 py-4 rounded-[30px] mb-4' />
                <div className="text-center">
                    <button type='submit' className='bg-[#A71B10] px-6 py-2 rounded-[30px]'>send message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactSection
