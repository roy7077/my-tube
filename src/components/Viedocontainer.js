import React, { useEffect, useState } from 'react'
import YOUTUBE_API_URL, { API_KEY } from "./utils/Conts"
import Viedocard, { AdViedoCard } from './Viedocard';
import { Link } from 'react-router-dom';
import { useDispatch,Selector,useSelector } from 'react-redux';

const Viedocontainer = () => {

  const [searchData,setSearchdata]=useState([]);
  // const [name,setname]=useState("");
  const name= useSelector((Store)=> Store.cart.name);
  // setname(n);

  const getdata_search=async ()=>{
    const data=await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+name+"&key="+API_KEY);
    const json=await data.json();
    //console.log(json.items);
    setSearchdata(json?.items);
  }

  useEffect(()=>{
    getdata_search();
  },[name])

     

    const [videos,setvideos]=useState([]);
    useEffect(()=>{
        getData();
    },[])

    const getData = async ()=>{
       const data = await fetch(YOUTUBE_API_URL);
       const json = await data.json();
       //console.log(json);
       setvideos(json.items);
    }

  if(searchData.length===0)
  {
    return (
    
      <div className='flex flex-wrap justify-center'>
        {/* <AdViedoCard info={videos[1]}/> */}
         {
          videos.map(viedo => <Link to={"watch?v="+viedo.id} key={viedo.id}><Viedocard info={viedo}/></Link>)
         }
      </div>
    )
  }
  else
  {
    return (
    
      <div className='flex flex-wrap justify-center'>
         {/* <AdViedoCard info={searchData[1]}/> */}
         {
          searchData.map(viedo => <Link to={"watch?v="+viedo.id.videoId} key={viedo.id.videoId}><Viedocard info={viedo}/></Link>)
         }
      </div>
    )
  }
}

export default Viedocontainer
