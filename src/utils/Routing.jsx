import React from 'react'
import Home from '../component/RoutingExamples/Home'
import Features from '../component/RoutingExamples/Features'
import About from '../component/RoutingExamples/About'
import Products from '../component/RoutingExamples/Products'
import { Route, Routes } from "react-router-dom";
import Users from '../component/RoutingExamples/Users'
import UserDetails from '../component/RoutingExamples/UserDetails'

function Routing() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Home/>}/>  
     <Route path="/features" element={<Features/>}/>  
     <Route path="/about" element={<About/>}/>  
     <Route path="/products" element={<Products/>}/> 

     {/* <Route path="/users" element={<Users/>}><Route/>  */}
     <Route path='/users' element={<Users/>}>
     
        <Route path="/users/:name" element={<UserDetails/>}></Route>  
     </Route>


      
    </Routes> 
    
    </>
  )
}

export default Routing
