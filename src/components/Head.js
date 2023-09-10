import React from 'react'
import { useDispatch } from 'react-redux'
import { toggelMenu } from './utils/Cartslice';

const Head = () => {

    const dispatch=useDispatch();
  return (
    <div className='grid grid-flow-col p-5 m-3 shadow-lg'>
      <div className='col-span-1 flex cursor-pointer'>
        <img onClick={()=>{dispatch(toggelMenu())}} className='h-10' alt="ham-menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"/>
        <img  className='h-10' alt="logo" src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"/>
      </div>
      <div className='col-span-10 px-10'>
        <input className='w-1/2 p-1 border border-gray-300 rounded-l-full'  type='text' />
        <button className=' p-1 border border-gray-500 rounded-r-full bg-gray-300'>Search</button>
      </div>
      <div className='col-span-1'>
        <img className='h-10' alt="profile-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvm-Xk7pEU6EMYmm78CXL_KSbCWrQVsaYYR9hoi-_btLTZVWp_pOBXPOq5fsC28pbhxA&usqp=CAU"/>
      </div>
    </div>
  )
}

export default Head
