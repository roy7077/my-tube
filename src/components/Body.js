import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import Buttonlist from './Buttonlist'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body
