import React, { useRef } from 'react'

function UseRefExample() {

    const name = useRef(null);
    const email = useRef(null);


    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log( name.current.value , email.current.value)
    }
    


 

  return (
   <>
   <div className='p-10'>
   <p className='text-center font-semibold text-2xl'>Form Handling Using UseRef</p>
   <br />
   <br />
    <form onSubmit={handlesubmit} action="" className='flex justify-center gap-2'>
        <input ref={name} className='rounded-md p-2 outline-none border w-fit' type="text" name="" placeholder='Enter Your Name' id="" />
        <input ref={email} className='rounded-md w-fitd p-2 outline-none border w-fit' type="email" name="" placeholder='Enter Your Email' id="" />
        <input className='px-2 py-1 bg-orange-500 w-fit text-white font-semibold rounded-md' type="submit" value="Submit" />
    </form>
   </div>
   
   
   </>
  )
}

export default UseRefExample
