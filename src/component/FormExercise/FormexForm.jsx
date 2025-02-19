import React from 'react'
import { useForm } from "react-hook-form";

function FormexForm({addData}) {

const {register,handleSubmit,reset,watch}=  useForm();
           
  const onSubmit = (data)=>{
    console.log(data)
    addData(data);
    reset();
  }
     
           
  return (
    <>
    
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-4'>
            <input {...register('image')} className='border rounded-md px-2 outline-none placeholder:text-red-500 py-1' placeholder='Enter Your Image Url ' type="text" required/>
            <input {...register('name')} className='border rounded-md px-2 outline-none placeholder:text-red-500 py-1' placeholder='Enter Your Name ' type="text" required/>
            <input {...register('description')} className='border rounded-md px-2 outline-none placeholder:text-red-500 py-1' placeholder='Enter Your Description ' type="text" required />
            <input className='bg-orange-400 px-2 py-1 rounded-full text-white font-semibold cursor-pointer' type="submit" value="Add Card" />

        </form>
    </div>
      
    </>
  )
}

export default FormexForm
