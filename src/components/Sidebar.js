import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const c= useSelector((Store)=> Store.cart.isMenuOpen);

    //early return
    if(!c)
    return null;
  
  return (
    <div className='w-48 p-5 shadow-lg'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>

      <h1 className='mt-5 font-bold'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shoping</li>
        <li>Music</li>
        <li>Flim</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>

      <h1 className='mt-5 font-bold'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shoping</li>
        <li>Music</li>
        <li>Flim</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>
    </div>
  )
}

export default Sidebar
