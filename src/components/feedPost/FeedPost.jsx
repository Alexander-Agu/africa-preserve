import React from 'react'
import "./feedPost.css"

function FeedPost({title, name, region, content}) {
  return (
    <article className='feedPost'>
        <div className="feedPostHeader">
            <h1 className='feedTitle'>
                {title}
            </h1>

            <p className='feedAuthor'>
                {name}
            </p>
            <p className='feedLocation'>
                {region}
            </p>
        </div>

        <div className="feedPostContent">
            {content}
        </div>
    </article>
  )
}

export default FeedPost