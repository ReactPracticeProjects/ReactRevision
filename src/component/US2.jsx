import React, { useState } from 'react'

function US2() {

  const [value,setvalue] =  useState([1,2,3,4,5,6])

  return (
    <div className='p-3'>
      {value.map((item,index)=>{
        return (
            <h1>{item}</h1>
        )
      })}

       <button onClick={()=>setvalue(()=>{
        return value.filter((item,index)=>index!= value.length-1)
       })} className='text-sm px-1 cursor-pointer bg-red-500 py-1 rounded-md'>Remove</button>

<button onClick={()=>setvalue(()=>{
    return value.filter((item,index)=>index != 2)
})} className='text-sm px-1 cursor-pointer bg-red-500 py-1 rounded-md'>Remove 3</button>

    </div>
  )
}

export default US2
