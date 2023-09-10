import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import Buttonlist from './Buttonlist'

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Maincontainer/>
    </div>
  )
}

export default Body
