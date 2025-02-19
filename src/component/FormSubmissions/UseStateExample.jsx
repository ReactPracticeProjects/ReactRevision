import React, { useState } from 'react'

function UseStateExample() {


     const [formdata,setFormdata] = useState({name: "",email : ""});


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formdata)
    }


  return (
    <>
   <div className='p-10'>
    <p className='text-center font-semibold text-2xl'>Form Handling Controlled Components</p>
    <br />
    <br />
    <form  onSubmit={handleSubmit}  action="" className='flex justify-center gap-2'>
        <input onChange={(e)=>setFormdata({...formdata,name:e.target.value})}  className='rounded-md p-2 outline-none border w-fit' type="text" name="" placeholder='Enter Your Name' id="" />
        <input onChange={(e)=>setFormdata({...formdata,email:e.target.value})} className='rounded-md w-fitd p-2 outline-none border w-fit' type="email" name="" placeholder='Enter Your Email' id="" />
        <input className='px-2 py-1 bg-orange-500 w-fit text-white font-semibold rounded-md' type="submit" value="Submit" />
    </form>
   </div>
    
    </>
  )
}

export default UseStateExample
