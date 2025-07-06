import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        {/* Replace logo image if it still shows “Prescripto” */}
        <img 
          onClick={() => navigate('/')} 
          className='w-36 sm:w-40 cursor-pointer' 
          src={assets.admin_logo} 
          alt="Hospivio Logo" 
        />
        <p className='border px-2.5 py-0.5 rounded-full border-orange-500 text-orange-600'>
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button 
  onClick={logout} 
  className='bg-orange-500 text-white text-sm px-10 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200'
>
  Logout
</button>

    </div>
  )
}

export default Navbar
