import React, { useEffect, useState } from 'react'
import YOUTUBE_API_URL from "./utils/Conts"
import Viedocard from './Viedocard';
import { Link } from 'react-router-dom';

const Viedocontainer = () => {

    const [videos,setvideos]=useState([]);
    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
       const data = await fetch(YOUTUBE_API_URL);
       const json = await data.json();
       console.log(json.items);
       setvideos(json.items);
    }

  return (
    
    <div className='flex flex-wrap justify-center'>
       {
        videos.map(viedo => <Link to={"watch?v="+viedo.id} key={viedo.id}><Viedocard info={viedo}/></Link>)
       }
    </div>
  )
}

export default Viedocontainer
