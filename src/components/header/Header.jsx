import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'

function Header({links}) {
  return (
    <header className='header'>
        <div className="logo">
            <a href='/'>Africa Preserve</a>
        </div>

        <nav className='navHeader'>
            <a href='/signup' className="navLinks">
                Sign In
            </a>
            <a href='signin' className="navLinks">
                Sign Up
            </a>
        </nav>
    </header>
  )
}

export default Header