import React from "react";

function MusicBox({songdata,handltbtn}) {
  return (
    <>
      <div className="w-full flex  flex-wrap gap-10  bg-zinc-200 p-10">
        {songdata.map((item,index)=>{
          return (
            <div key={index} className="w-90 h-fit shadow-sm rounded-md shadow-orange-700 bg-white p-5">
            <div className="flex gap-4">
              <div className="">
                <img
                  src={item.image}
                  className="w-52 object-cover rounded-md"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <p>Name:{item.name}</p>
                <p>Artist: {item.artist}</p>
                <button onClick={()=>handltbtn(index)} className={`${item.isFavourite ?"bg-green-500": "bg-orange-500"} px-1 text-sm w-fit whitespace-nowrap py-1 rounded-md cursor-pointer  text-white font-semibold`}>
               {item.isFavourite ? "Favourite":"Add To Favourite"}
              </button>
              </div>
            </div>
  
            <div>
             
            </div>
          </div>
          )
        })}
       
      </div>
    </>
  );
}

export default MusicBox;
