import React, { useState } from 'react'

function Counter(props) {

    const [objvalue,setObjvvalue] = useState({name:"sainath mhetre   ",age:24,isBanned : true});
    

  return (
     
    <div className='p-2'>
      
      <h1>The Count is : {props.count}</h1>
      <p>The Red Team Is Banned : {props.banned.toString()}</p>
      <div className='flex gap-2'>

      <button onClick={()=>{props.setcount((prev)=>prev+1)}}  className='px-2 py-1 bg-blue-400 text-white font-semibold cursor-pointer'>Add</button>
      <button onClick={()=>{props.count <=0 ? props.setcount(0):props.setcount((prev)=>prev-1)}}  className='px-2 py-1 bg-blue-400 text-white font-semibold cursor-pointer'>Subtract</button>
      <button onClick={()=>props.setcount(0)}  className='px-2 py-1 bg-blue-400 text-white font-semibold cursor-pointer'>Reset</button>

      <button onClick={()=>props.setBanned(!props.banned)} className={`px-2 py-1 ${props.banned ? "bg-red-400":"bg-blue-400"}  text-white font-semibold cursor-pointer`}>Change Status</button>

      </div>


      <p>Name : {objvalue.name}</p>
      <p>Age : {objvalue.age}</p>
      <p>IsBanned: {objvalue.isBanned.toString()}</p>
      <button onClick={()=>setObjvvalue({...objvalue,isBanned : ! objvalue.isBanned})} className={`px-2 px-1 border-2 ${objvalue.isBanned ? "bg-red-700":"bg-blue-500"} text-white font-semibold`}>Change Status</button>
      <button onClick={()=>{setObjvvalue({...objvalue,Gender :"Male"})
    console.log(objvalue)}}  className={`px-2 px-1 border-2 bg-blue-500 text-white font-semibold cursor-pointer`}>Add Gender</button>






    </div>
  )
}

export default Counter
