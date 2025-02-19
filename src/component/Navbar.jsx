import React from 'react'
import { IoBookOutline,IoMoonSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

function Navbar({darkmode,setdarkmode,items}){
   
    return (
        <>
        <div className={`flex justify-around ${darkmode ? "bg-black text-white":'bg-white'} border-b-2 border-zinc-400 sticky top-0 left-0 z-50 overflow-hidden py-3`}>
            <div className='flex items-center text-2xl gap-3'>
                <IoBookOutline/>
                EduCode
            </div>
            <div className='hidden sm:flex gap-7'>{items.map((item,index)=><Link key={index} to="/navbar">{item}</Link>)}</div>
            <div className="flex  sm:hidden">
            <button className='cursor-pointer' type='button'>
            <RiMenu3Line className='text-2xl' />
                </button>
            </div>
            <div className='hidden lg:flex gap-3 items-center'>
                <form action="">
                    <input className={`${darkmode ? "bg-white placeholder:text-black":"bg-black placeholder:text-white"} outline-none rounded-full py-1 px-2.5`} type="text" name="" placeholder='Search' id="" />
                </form>
                <button className='cursor-pointer' onClick={()=>setdarkmode(!darkmode)} type='button'>
                    {/* <IoMoonSharp className='text-2xl'/> */}
                    {darkmode ? <IoMoonSharp className='text-2xl'/>:<FaMoon className='text-2xl'/>}
                </button>

            </div>
        </div>
        </>
    )
}

export default Navbar;