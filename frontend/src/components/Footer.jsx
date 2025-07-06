import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-5 md:px-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo & Description */}
        <div className='flex flex-col justify-start'>
          <img className='mb-5 w-40' src={assets.logo} alt="Hospivio logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Hospivio is your digital healthcare partner for smart doctor booking, easy access to specialists, and a seamless patient experience — all at your fingertips.
          </p>
        </div>

        {/* Company Info */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href="/" className='hover:text-primary'>Home</a></li>
            <li><a href="/about" className='hover:text-primary'>About Us</a></li>
            <li><a href="/doctors" className='hover:text-primary'>Doctors</a></li>
            <li><a href="/privacy" className='hover:text-primary'>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href="tel:+919876543210" className='hover:text-primary'>Phone: +91-98765-43210</a></li>
            <li><a href="mailto:support@hospivio.com" className='hover:text-primary'>Email: support@hospivio.com</a></li>
            <li>Location: Banjara Hills, Hyderabad, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2024 <span className='text-primary font-semibold'>Hospivio</span>. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
