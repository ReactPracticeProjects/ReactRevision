import React from 'react'
import { IoBookOutline,IoMoonSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

function Navbar() {
  return (
    <nav>
        <div className='flex px-20 py-3 w-full justify-between border-b'>
            <div>
                <p className='text-xl'>EduCode</p>
            </div>
            <div className='flex gap-10'>
                <NavLink style={(e)=>{
                  return {
                    color : e.isActive && "red" 
                  }

                }} to="/">Home</NavLink>
                <NavLink style={(e)=>{
                  return {
                    color : e.isActive && "red" 
                  }

                }}  to="/features">Features</NavLink>
                <NavLink style={(e)=>{
                  return {
                    color : e.isActive && "red" 
                  }

                }} to="/products">Products</NavLink>
                <NavLink style={(e)=>{
                  return {
                    color : e.isActive && "red" 
                  }

                }} to="/about">About</NavLink>

                <NavLink style={(e)=>{
                  return {
                    color : e.isActive && "red" 
                  }

                }} to="/users">Users</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <input className='border px-3 py-1 rounded-full outline-none' type="text" placeholder='Search' id="" />
                <button type='button'  className='text-xl cursor-pointer'>
                <FaMoon/>
                </button>
                
            </div>
        </div>

        
      
    </nav>
  )
}

export default Navbar
