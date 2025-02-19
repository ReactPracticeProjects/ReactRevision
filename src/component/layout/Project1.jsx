import React, { useEffect, useState } from 'react'
import FavSongNavbar from '../../PropDrilling/FavSongNavbar'
import MusicBox from '../../PropDrilling/MusicBox'

function Project1() {



  const songdetails = [
    {
      name: "Tum Hi Ho",
      artist: "Arijit Singh",
      image: "https://i.ytimg.com/vi/IJq0yyWug1k/maxresdefault.jpg",
      isFavourite: false
    },
    {
      name: "Kesariya",
      artist: "Arijit Singh",
      image: "https://i.ytimg.com/vi/BddP6PYo2gs/maxresdefault.jpg",
      isFavourite: true
    },
    {
      name: "Channa Mereya",
      artist: "Arijit Singh",
      image: "https://i.ytimg.com/vi/284Ov7ysmfA/maxresdefault.jpg",
      isFavourite: false
    },
    {
      name: "Raataan Lambiyan",
      artist: "Jubin Nautiyal, Asees Kaur",
      image: "https://i.ytimg.com/vi/gvyUuxdRdR4/maxresdefault.jpg",
      isFavourite: false
    },
    {
      name: "Ae Dil Hai Mushkil",
      artist: "Arijit Singh",
      image: "https://i.ytimg.com/vi/GdNKsW-E_po/maxresdefault.jpg",
      isFavourite: false
    }
]


       const [songrealdata,setSongrealdata] =    useState(songdetails);

       const [favcount,setFavcount] = useState(0);

       const handlefav = (btnindex)=>{
          setSongrealdata((prev)=>{
            return prev.map((item,index)=>{
              if(index === btnindex){
                return {...item,isFavourite : !item.isFavourite}
              }
                        
              return item;
            })
          })
       }

       useEffect(()=>{
        const favcount = songrealdata.filter((song)=>song.isFavourite).length;
        setFavcount(favcount)
       },[songrealdata])

  return (
    <>

    
    <FavSongNavbar favcount = {favcount}/>
    <MusicBox handltbtn={handlefav} songdata={songrealdata}/>
    </>
  )
}

export default Project1
