import React from "react";
import Button from "./Button";

function Card({handlefriendsbtn, data,index}) {
  return (
    <>
     <div className="bg-red-300 rounded-xl p-2">
        <div className="w-full h-32">
            <img src={data.image} className="w-full h-full object-cover" alt="" />
        </div>
        <div>
            <p>Name:{data.name}</p>
            <p>City:{data.city}</p>
            <p>Age:{data.age}</p>
        </div>

        <div>
          {data.isfriend ? <Button data={data} index={index}  handlefriendsbtn = {handlefriendsbtn}  btncontent={"Add a Friend"}/> : <Button index={index} handlefriendsbtn = {handlefriendsbtn}  btncontent={"Remove Friend"}/> }
        

        </div>
     </div>
    </>
  );
}

export default Card;
