import React from 'react'
import styles from "../component/Style.module.css"
function FavSongNavbar({favcount}) {
  return (
    <>
     
     <div className=" flex items-center justify-between px-20 py-10 w-full h-15">
           
           <p className='text-2xl font-semibold text-orange-500'>Orange</p>

           <button className='bg-orange-500 text-white font-semibold px-3 py-2 rounded-lg shadow-md shadow-amber-700'>Favourites <span className={styles.greencolor}>{favcount}</span></button>

     </div>
    
    </>
  )
}

export default FavSongNavbar
