import React from 'react'
import "./feedPost.css"

function FeedPost() {
  return (
    <article className='feedPost'>
        <div className="feedPostHeader">
            <h1 className='feedTitle'>
                Township art Revolution
            </h1>

            <p className='feedAuthor'>
                Alexander I. Agu
            </p>
            <p className='feedLocation'>
                Nigeria, South Africa
            </p>
        </div>

        <div className="feedPostContent">
            Tonight was magical at Labadi Beach. As the sun set over the Atlantic, local drummers began to gather near the shore. The rhythm started slowly - just one djembe at first, then another joined, and soon a full circle had formed.

            Tourists and locals alike were drawn to the music. An older man pulled me into the circle, laughing as he showed me how to move my feet with the changing beats. 'The drum speaks,' he told me. 'You must listen with your body, not your ears.'

            By midnight, the circle had grown to nearly fifty people. I've never felt so connected to strangers before.
        </div>
    </article>
  )
}

export default FeedPost