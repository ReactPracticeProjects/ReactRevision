import React from "react";
import Card from "./Card";

function Cards({ songdetails ,handleremove}) {
  return (
    <div className="w-full flex flex-wrap gap-4 h-[70%] mb-10 overflow-auto  items-center justify-center p-4">
      {
        songdetails.map((item,index)=>{
            return  <Card handleremove={handleremove} key={index} item={item} index={index} />;
        })
      }
       
    
    </div>
  );
}

export default Cards;
