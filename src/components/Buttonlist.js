import React from 'react'
import Button from './Button'

const tags=["All","Music","Sports","Gaming","DSA","Striver","Akshay","Virat","Emiway","Web dev"];
const Buttonlist = () => {
  return (
    <div className='flex justify-center'>
      {
        tags.map((tag)=>
          <Button name={tag} key={tag}/>
        )
      }
    
    </div>
  )
}

export default Buttonlist
