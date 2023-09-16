import React, { useEffect, useState } from 'react'
import Buttonlist from './Buttonlist'
import Viedocontainer from './Viedocontainer'
import { useDispatch, useSelector } from 'react-redux';

const Maincontainer = () => {

  return (
    <div className='justify-center'>
      <Buttonlist/>
      <Viedocontainer/>
    </div>
  )
}

export default Maincontainer
