import React from 'react'
import Button from './Button'

const tags=["All","Music","Sports","Gaming","DSA","Striver","Akshay","Virat","Emiway","Virat","Web dev"];
const Buttonlist = () => {
  return (
    <div className='flex justify-center'>
      {
        tags.map((tag)=>
          <Button name={tag}/>
        )
      }
    
    </div>
  )
}

export default Buttonlist
