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

            {
                links.map(x => {
                    const {link, name} = x;

                    return <a href={link} className="navLinks">
                        {name}
                    </a>
                })
            }
        </nav>
    </header>
  )
}

export default Header