import React from 'react'
import { navLinks } from '../contants'

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="logo.svg" alt="Apple logo" />
                <ul>
                    {navLinks.map(({ name, link }) => (
                        <li key={name}>
                            <a href={link}>{name}</a>
                        </li>
                    ))}
                </ul>

                <div className='flex-center gap-3'>
                    <button>
                        <img src="search.svg" alt="Search icon" />
                    </button>
                    <button>
                        <img src="cart.svg" alt="Cart icon" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar