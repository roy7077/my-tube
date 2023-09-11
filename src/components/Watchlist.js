import React, { useState } from 'react'
import { closeMenu } from './utils/Cartslice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from "react-router-dom";

const Watchlist = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    const dispatch=useDispatch();
    useState(()=>{
     dispatch(closeMenu()) ;
    },[])

    
  return (
    <div className='p-2 m-2 cursor-pointer'>
      <iframe 
      width="930" 
      height="523" 
      src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
      title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
  )
}

export default Watchlist
