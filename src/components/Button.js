import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-200 p-2 px-3 m-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
