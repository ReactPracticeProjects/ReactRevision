import React, { useRef } from 'react'

function FormRef() {

         const name =useRef(null);
         const email = useRef(null);
      
     const handlerefSubmit = (e)=>{
      e.preventDefault();
      console.log(name.current.value)
      console.log(email.current.value)

     }

  return (
    <div>

    <p className='text-center font-semibold text-xl text-red-500'>Form Handlig using Unontrolled Components</p>

    <div>
        <form onSubmit={handlerefSubmit} className='mt-10 flex gap-2 items-center justify-center'>
            <input ref={name} className='outline-none border rounded-md px-2 py-1 placeholder:text-red-500'  placeholder="Enter Your Name" type="text" name="" id="" />
            <input ref={email} className='outline-none border rounded-md px-2 py-1 placeholder:text-red-500'  placeholder="Enter Your Email" type="email" name="" id="" />
            <input className='bg-orange-500 text-white px-3 py-1 rounded-md cursor-pointer ' type="submit" value="Submit" />
        </form>
    </div>
    


     
    
</div> 
  )
}

export default FormRef
