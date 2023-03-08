import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDashboard } from 'react-icons/ai'
import { MdOutlineDomainAdd , MdPersonAdd } from 'react-icons/md'
import {BsEnvelopeFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center space-x-3'>
            <li className='nav-item nav-item-active'><Link className='flex justify-center items-center space-x-3' to="/dashboard" ><AiOutlineDashboard size={24}/><span>Dashboard</span></Link></li>
            <li className='nav-item' ><Link className='flex justify-center items-center space-x-3' to="/dashboard" ><MdOutlineDomainAdd size={24} /><span>Add company</span></Link></li>
            <li className='nav-item' ><Link className='flex justify-center items-center space-x-3' to="/dashboard" ><MdPersonAdd size={24} /><span>Add user</span></Link></li>
            <li className='nav-item' ><Link className='flex justify-center items-center space-x-3' to="/dashboard" ><BsEnvelopeFill size={24} /><span>messages</span></Link></li>
        </ul>
    </div>
  )
}

export default Navbar