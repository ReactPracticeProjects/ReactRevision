import React from 'react'
import { useForm } from "react-hook-form";

function ReactFormExample() {
            
             const {register,handleSubmit,watch} =  useForm();
             
            
             const onSubmit = (data) => {
                console.log(data);
              };

  return (
    <>

    <div>
        <div>
        <p className='text-center font-semibold text-2xl'>Form Handling Using React Hook</p>

        <form onSubmit={handleSubmit(onSubmit)} className='flex justify-center gap-2'>
     
            <input {...register('name')} type="text"  className='border  rounded-md px-2 py-1' id="" placeholder='Enter Your Name' />
            <input {...register('email')} type="email" className='border  rounded-md px-2 py-1' id="" placeholder='Enter Your Email' />
           
            <input className='px-2 py-1 cursor-pointer text-white font-semibold bg-orange-500 rounded-md' type="submit" value="Submit" />

        </form>

   <p className='text-center'>Live Data:-{JSON.stringify(watch())} </p>
        </div>
    
    </div>
    
    
    </>
  )
}

export default ReactFormExample
