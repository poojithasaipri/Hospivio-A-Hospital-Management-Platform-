import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About Hospivio" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to <span className='text-primary font-semibold'>Hospivio</span>, your reliable companion for managing healthcare easily and smartly. At Hospivio, we simplify the way you book appointments, track consultations, and access your health information securely.</p>
          <p>Hospivio is built to empower patients with technology. Our mission is to provide fast, intuitive, and personalized healthcare access — whether you're scheduling a visit or keeping up with ongoing treatment.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We envision a connected healthcare ecosystem where convenience meets care. Hospivio aims to remove the friction from patient-provider interactions and help you focus on your health — not the hassle.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment booking that fits seamlessly into your routine.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>Connect with trusted healthcare professionals across Hyderabad with ease.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Get tailored health tips, alerts, and appointment reminders — all in one place.</p>
        </div>
      </div>

    </div>
  )
}

export default About
