import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menu,setMenu] = useState(false)
  const menuItems = [
    {id:1,text:"About"},
    {id:2,text:"Services"},
    {id:3,text:"Skills"},
    {id:4,text:"Education & Experience"},
    {id:5,text:"Projects"},
    {id:6,text:"Contact"},
  ]

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md'>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-2'>
            <img src="public/dummy_male_profile_pic.jpg" alt="Image Logo" className='w-15 h-15 rounded-full'/>
            <h1 className='text-xl cursor-pointer'>Muhammad Usman</h1>
          </div>
          {/* Desktop Menu Items */}
          <div className='flex space-between'>
            <ul className='hidden md:flex space-x-8'>
              {menuItems.map(({id,text})=>(
                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</li>
              ))}
            </ul>
            <div className='md:hidden' onClick={()=>setMenu(!menu)}>
              {menu?<IoClose size={24}/>:<FiMenu size={24}/>}
            </div>
          </div>
        </div>
        {/* Mobile Menu Items */}
        {
          menu && (
            <div>
              <ul className='md:hidden h-screen flex flex-col items-center justify-center space-y-3 text-xl'>
                {menuItems.map(({id,text})=>(
                  <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>{text}</li>
                ))}
              </ul>
            </div>
          )
        }

      </div>
    </>
  )
}

export default Header
