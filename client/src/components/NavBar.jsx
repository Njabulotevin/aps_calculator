import React from 'react'
import {IoIosMenu} from "react-icons/io"
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='flex justify-between p-8 md:max-w-7xl md:mx-auto'>
        <div className="">
            <Link to='/'><h1 className='font-bold'>ApsCalcutor</h1></Link>
        </div>
        <div className="w-[27px] h-[15.75px]  md:hidden">
            <IoIosMenu className='text-[27px]'/>

            
        </div>
        <ul className="md:flex hidden gap-16 items-center">
        <li>About</li>
        <li>Support</li>
        <li className='border border-black px-8 py-2 rounded'>Sign-in</li>
        </ul>
    </div>
  )
}

export default NavBar