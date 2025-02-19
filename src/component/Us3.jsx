import React, { useState } from 'react'

function Us3() {

       const [value,setValue] = useState(0);

       const handleIncrease = ()=>{
       setValue((prev)=>prev+1)
       }
       const handleDecrease = ()=>{
        setValue((prev)=>prev-1)
        }

        const [status,setStatus] = useState(false);

  return (
    <>
    <div className='p-5'>

    <h1>{value}</h1>
    <button onClick={handleIncrease} className='px-3 mr-2 py-2 bg-red-400 rounded-full font-semibold cursor-pointer'>Increase Value</button>
    <button onClick={handleDecrease} className='px-3 py-2 bg-red-400 rounded-full font-semibold cursor-pointer'>Decrease Value</button>
    </div>

    <h1>
        {status ? <p> Bahar Jao </p>:<p>Bahar mat jao</p>}
    </h1>


    <button  onClick={()=>setStatus(()=>!status)} className={`px-3 py-2 ${status ? "bg-blue-400":"bg-red-400"} rounded-full font-semibold cursor-pointer`}>Change Status</button>
    
    </>
  )
}

export default Us3
