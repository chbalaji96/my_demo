import React from 'react'

import { all } from './ApiExample';
function Text() {
  return (
   
    <div className='post-container'>
      
       {
        all.map((item)=>{
            const{ albumId,id,title,url,thumbnailUrl}=item
            return(
                <Profile key={id} albumId={albumId} id={id} title={title} url={url} thumbnailUrl={thumbnailUrl}/>
            )
        })
       }

    </div>

  )
}

function Profile(props){
    const{albumId,id,title,url,thumbnailUrl}=props
    return<article className='profile'>
        <p>{id}</p>
        <h1>{albumId}</h1>
        <img src={url} alt=' hello world'/>
        <h2 className='title'>{title}</h2> 
        <a href={thumbnailUrl} className='Button'> Details</a>

    </article>
}
export default Text;

