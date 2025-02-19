import React from "react";

function EventHandling({ songdetails }) {

    const donwloadnow = ()=>{
        console.log("hello")
    }

  return (
    <>
      <div className="w-full w-full bg-red-200 flex flex-wrap p-10 gap-2 ">
        {songdetails.map((item, index) => {
          return (
            <div className="song px-3  py-2 bg-yellow-200 rounded w-[31%] h-fit">
              <h1 className="text-md font-bold">{item.song}</h1>
              <p>{item.description}</p>
              <button onClick={donwloadnow} className="px-2 py-1 text-sm rounded mt-2 mb-2 cursor-pointer bg-amber-500">
                Download Now
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EventHandling;
