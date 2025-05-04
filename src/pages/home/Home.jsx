import React from 'react'
import Header from '../../components/header/Header'
import HomeHero from '../../components/homeHero/HomeHero'
import About from '../../components/about/About'
import "./home.css"

function Home() {
  return <>
    <Header />
    <HomeHero />
    <About />

    <footer className='footer'>
      <h2>
        One Story at a Time. One Legacy Forever.
      </h2>

      <p>
        Voices of the past still echo.
        Join us to preserve Africa’s soul—
        story by story, truth by truth.

        Share. Remember. Keep it alive.
      </p>
    </footer>
  </>
}

export default Home