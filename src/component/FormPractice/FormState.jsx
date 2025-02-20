import React, { useState } from 'react'

function FormState() {
                
      const [name,setName] = useState('');
    const [email,setEmail] = useState('');

     const handlenameChange = (e)=>{
         setName(e.target.value);    
     }

     const handleemailChange = (e)=>{
         setEmail(e.target.value);
     }

    const handlestatesubmit = (e)=>{
          e.preventDefault();
          console.log(name)
          console.log(email)
    }


  return (
    <>
    <div>
        <p className='text-center font-semibold text-xl text-red-500'>Form Handlig using Controlled Components</p>

        <div>
            <form onSubmit={handlestatesubmit} className='mt-10 flex gap-2 items-center justify-center'>
                <input onChange={handlenameChange}  className='outline-none border rounded-md px-2 py-1 placeholder:text-red-500'  placeholder="Enter Your Name" type="text" name="" id="" required/>
                <input onChange={handleemailChange}  className='outline-none border rounded-md px-2 py-1 placeholder:text-red-500'  placeholder="Enter Your Email" type="email" name="" id="" required/>
                <input className='bg-orange-500 text-white px-3 py-1 rounded-md cursor-pointer ' type="submit" value="Submit" />
            </form>
        </div>
        
    </div> 
    
    </>
  )
}

export default FormState
