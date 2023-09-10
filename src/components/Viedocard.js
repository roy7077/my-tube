import React from 'react'

const Viedocard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=info;
    //console.log(snippet.thumbnails);

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' alt="thumbnail" src={snippet.thumbnails?.medium?.url}/>
      <ul>
        <li className='font-bold py-2'>{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default Viedocard
