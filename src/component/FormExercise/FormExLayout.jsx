import React, { useState } from 'react'
import Cards from './Cards'
import FormexForm from './FormexForm'

function FormExLayout() {

    const songdetails = [
        {
            image: "https://i.ytimg.com/vi/IJq0yyWug1k/maxresdefault.jpg",
            name: "Tum Hi Ho",
            
            description: "A soulful love song from Aashiqui 2."
        },
        {
            image: "https://i.ytimg.com/vi/BddP6PYo2gs/maxresdefault.jpg",
            name: "Kesariya",
           
            description: "A romantic melody from Brahmāstra."
        },
        {
            image: "https://i.ytimg.com/vi/284Ov7ysmfA/maxresdefault.jpg",
            name: "Channa Mereya",
            
            description: "An emotional heartbreak song from Ae Dil Hai Mushkil."
        },
        {
            image: "https://i.ytimg.com/vi/gvyUuxdRdR4/maxresdefault.jpg",
            name: "Raataan Lambiyan",
            
            description: "A touching romantic track from Shershaah."
        },
        {
            image: "https://i.ytimg.com/vi/GdNKsW-E_po/maxresdefault.jpg",
            name: "Ae Dil Hai Mushkil",
            description: "A heartfelt ballad about unrequited love."
        }
    ];

    const handleremove = (btnindex)=>{
        setData((prev)=>prev.filter((item,index)=>{
           
                 if(index != btnindex){
                    return  item;
                 }
                   
            })
        )

    }

    const addData = (dataitem)=>{
        setData([...data,dataitem])
    }



     const [data,setData] =  useState(songdetails);

  return (
    <>
    <div className='w-full bg-zinc-100 h-[100vh] flex flex-col justify-center  items-center p-5'>

    <Cards handleremove={handleremove} songdetails={data}/>
    <FormexForm addData={addData} />
    
    </div>
     
      
    </>
  )
}

export default FormExLayout
