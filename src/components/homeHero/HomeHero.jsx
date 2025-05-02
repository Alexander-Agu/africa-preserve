import React from 'react'
import "./homeHero.css"

function HomeHero() {
  return (
    <section className='homeHero'>
        <article className='leftArticle'>
            <h1>
                Preserving African Heritage
            </h1>

            <h2>
                One Story at a Time
            </h2>

            <p>
                Join our mission to capture, preserve, and share the rich oral traditions and cultural heritage of Africa through community-verified storytelling.
            </p>

            <div className="homeHeroNav">
                <a href="/feed" className='toSignIn'>Explore Stories</a>
                <a href="/submit" className='toCreate'>Share Your Story</a>
            </div>
        </article>

        <article className='rightArticle'>
            <div className="cul1"></div>
            <div className="cul2"></div>
            <div className="cul3"></div>
            <div className="cul4"></div>
        </article>
    </section>
  )
}

export default HomeHero