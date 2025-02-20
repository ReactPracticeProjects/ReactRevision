import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
           
    const data = useParams();
   const navigate = useNavigate();
             
    
    const goBackHandler = ()=>{
        // navigate("/users");
        navigate(-1);
        console.log("hello")
    }



  return (
   <div className='flex w-full h-[50vh] justify-center items-center'>
      
      <div className='w-50 h-50 flex flex-col gap-2 bg-red-400 rounded-md p-2'>
        <h1 className="text-center text-xl font-semibold">Hello {data.name}</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, maxime.
        </p>


        <button onClick={goBackHandler} className='bg-amber-500 text-white px-2 py-1 rounded-md cursor-pointer'>Go Back</button>
      </div>
           
   </div>
  )
}

export default UserDetails
