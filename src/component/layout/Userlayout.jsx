import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import HeroSec from '../../../HeroSec'
import ParentComponent from '../ParentComponent';
import EventHandling from '../EventHandling';
import Counter from '../Counter';
import US2 from '../US2';
import Us3 from '../Us3';
import Button from '../../PropDrilling/Button';
import Card from '../../PropDrilling/Card';

function Userlayout() {

  const [count,setcount] =  useState(0);
  const [banned,setBanned] = useState(true);
  const [darkmode,setdarkmode] = useState(false);
  const items = ["Home","Products","Features","About"];
  const songdetails = [
    {
      "song": "Tum Hi Ho",
      "description": "A soulful romantic ballad from *Aashiqui 2*, sung by Arijit Singh."
    },
    {
      "song": "Maa Tujhe Salaam",
      "description": "A patriotic anthem by A.R. Rahman that evokes deep national pride."
    },
    {
      "song": "Kal Ho Naa Ho",
      "description": "A heart-touching song about living in the moment, sung by Sonu Nigam."
    },
    {
      "song": "Chaiyya Chaiyya",
      "description": "A high-energy Sufi-inspired song from *Dil Se*, featuring Shah Rukh Khan dancing on a moving train."
    },
    {
      "song": "Jai Ho",
      "description": "An Oscar-winning song by A.R. Rahman from *Slumdog Millionaire*, celebrating victory and hope."
    },
    {
      "song": "Tera Ban Jaunga",
      "description": "A romantic melody from *Kabir Singh*, sung by Akhil Sachdeva and Tulsi Kumar."
    }
  ]
  

  const friendcarddata = [{name:"sainath",city:"Latur",age:22,image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",isfriend : false},
    {name:"amol",city:"udgir",age:25,image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",isfriend : false},
    {name:"amit",city:"pune",age:20,image:"https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",isfriend : false},
    {name:"vaibhav",city:"parbhani",age:18,image:"https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",isfriend : false}
,  ]

 const [realFdata,setRealFdata] =  useState(friendcarddata);


 const handlefriendsbtn = (cardindex)=>{
  setRealFdata((prev)=>{
    return prev.map((item,index)=>{
      if(index === cardindex){
        return {...item,isfriend : !item.isfriend}

      }
      return item;
    })
  })
  
 }


// const handlefriendsbtn = (cardindex)=>{
//   setRealfdata((prev)=>{
//     return prev.map((item,index)=>{
//       if (index === cardindex){
//         return {...item,isfriend : !item.isfriend}
//       }
//       return item;
//     })
//   })

// }

  return (
   <>
   <Navbar darkmode = {darkmode} setdarkmode = {setdarkmode} items = {items}/>
  <HeroSec darkmode = {darkmode} setdarkmode = {setdarkmode}/>
  {/* <EventHandling songdetails = {songdetails}/> */}
   {/* Hero Section */}
  {/* <ParentComponent/>   */}
  {/* <Counter count = {count} setcount = {setcount} banned = {banned} setBanned = {setBanned}/> */}
  {/* <US2/> */}
  {/* <Us3/> */}

  {/* <Button bgcolor = "bg-red-400" btncontent={"Submit"}/> */}
  {/* <Button btncontent={"Click Me"}/> */}
  {/* <Button bgcolor = "bg-yelloxw-400" btncontent={"Increase Counter"}/> */}
 



<div className='w-full h-[50vh] flex gap-2 items-center justify-center'>
{realFdata.map((item,key)=>{
    return ( <Card key={key} index={key} handlefriendsbtn={handlefriendsbtn} data={item}/>)
  })}

</div>

 
   
   
   </>
  )
}

export default Userlayout
