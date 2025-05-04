import React, { useEffect, useState } from 'react'
import "./feed.css"
import FeedPost from '../../components/feedPost/FeedPost'
import Header from '../../components/header/Header'
import { getPosts } from '../../apis/fetchData';
import { links } from '../../links';

function Feed() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
        setData(res);
        console.log(res)
        
        if (res) setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("ghkjnmb")
      }
    };

    fetchPosts();
  }, []);


  return <>
  <Header links={links}/>
    <main className='feedApp'>
        <h1 className='feedAppTitle'>
            Preserving African culture
        </h1>

        <p className='feedAppIntro'>
            Share Your Story, Preserve Our Heritage — Create a Post Today!
        </p>

        <div className="feedContainer">
          {isLoading ? (
            <p>Loading posts...</p>
          ) : 
            data.map(x => {
              const {title, region, content, created_at} = x;

              return <FeedPost 
                title={title}
                region={created_at}
                content={content}
                name={region}
              />
            })
          }
        </div>
    </main>
  </>
}

export default Feed