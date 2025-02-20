import React from 'react'
import { useForm } from "react-hook-form";

function FormHook() {

 const {register,handleSubmit,watch,reset}  = useForm();
 

  const onSubmit =  (data) =>{
    console.log(data)
    reset();
  }



  return (
    <div>

    <p className='text-center font-semibold text-xl text-red-500'>Form Handlig using React Hook</p>

    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-10 flex gap-2 items-center justify-center'>
            <input {...register('name')}className='outline-none border rounded-md px-2 py-1 placeholder:text-red-500'  placeholder="Enter Your Name" type="text"  id="" />
            <input {...register('email')} className='outline-none border rounded-md px-2 py-1 placeholder:text-red-500'  placeholder="Enter Your Email" type="email"  id="" />
            <input className='bg-orange-500 text-white px-3 py-1 rounded-md cursor-pointer ' type="submit" value="Submit" />
        </form>
        {/* <p className='text-center'>Live data :{JSON.stringify(watch())}</p> */}
    </div>
    


     
    
</div> 
  )
}

export default FormHook
