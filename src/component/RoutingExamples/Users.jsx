import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Users() {
  return (
    <>
    
    
    <div>
    <p className='text-xl font-semibold text-center p-5'>List Of Users</p>
    <div className='flex  w-1/2 mx-auto rounded-full py-2 justify-around items-center gap-2 bg-zinc-200 border'>
      <Link  className='text-lg hover:text-orange-500 font-semibold  py-1' to="/users/sainath">Sainath</Link>
      <Link className='text-lg hover:text-orange-500 font-semibold  py-1' to="/users/vaibhav">Vaibhav</Link>
      <Link className='text-lg hover:text-orange-500 font-semibold  py-1' to="/users/tushar">Tushar</Link>
      <Link className='text-lg hover:text-orange-500 font-semibold  py-1' to="/users/krushna">Krushna</Link>
      <Link className='text-lg hover:text-orange-500 font-semibold  py-1' to="/users/samarth">Samarth</Link>

    </div>

    
  </div>
          
          <Outlet/>

    </>
  )
}

export default Users
