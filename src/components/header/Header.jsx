import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <a href='#'>Africa Preserve</a>
        </div>

        <nav className='navHeader'>
            <a href='#' className="navLinks">
                Sign In
            </a>
            <a href='#' className="navLinks">
                Sign Up
            </a>
        </nav>
    </header>
  )
}

export default Header