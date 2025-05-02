import React from 'react'
import "./feed.css"
import FeedPost from '../../components/feedPost/FeedPost'
import Header from '../../components/header/Header'

function Feed() {
  return <>
  <Header />
    <main className='feedApp'>
        <h1 className='feedAppTitle'>
            Preserving African culture
        </h1>

        <p className='feedAppIntro'>
            Share Your Story, Preserve Our Heritage — Create a Post Today!
        </p>

        <div className="feedContainer">
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
            <FeedPost />
        </div>
    </main>
  </>
}

export default Feed