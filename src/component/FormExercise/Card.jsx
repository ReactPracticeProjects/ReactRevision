import React from 'react'

function Card({item,index,handleremove}) {
    const handleRemove = (index)=>{
        console.log("hello " + index)
    }
  return (
    <div className='bg-white shadow-lg w-40  rounded-lg  flex flex-col items-center gap-3 p-2'>
       <div className='bg-zinc-600 w-32 h-20 rounded-md  overflow-hidden'>
        <img src={item.image} className='w-full h-full object-cover ' alt="" />
       
       </div>
       <div className='flex flex-col text-center'>
       <p className='text-center font-semibold mt-1'>{item.name}</p>
       <p className='text-sm text-center mt-2'>{item.description}</p>
       <button onClick={()=>handleremove(index)}   className='bg-red-500 mt-2 text-white px-2 py-1 rounded-md text-center cursor-pointer'>Remove it</button>
       </div>
       
      
    </div>
  )
}

export default Card
