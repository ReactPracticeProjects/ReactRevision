import React from 'react'

function Button(props) {
  return (
   <>
   <button onClick={()=>props.handlefriendsbtn(props.index)} className={`${props.bgcolor || "bg-blue-400"} text-white font-semibold px-2 py-1 m-1 cursor-pointer rounded`}>{props.btncontent}</button>
   </>
  )
}

export default Button
