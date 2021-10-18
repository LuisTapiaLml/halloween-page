import React, { useState } from 'react'

export const Header = () => {

    const [navState, setNavState] = useState({show : false})

    const {show}  = navState

    const toggleMenu = () => {

        setNavState({show : !show })
        
    }

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <img src="img/logo.png" alt="logo" className="nav__logo-img" />
                    Halloween
                </a>
                <div className={`nav__menu   ${ show ? 'show-menu' : '' } `}  id="nav-menu">
                    <ul className="nav__list">
                        <li 
                            className="nav__item" 
                            onClick={toggleMenu}
                        >
                            <a href="#" className="nav__link">Home</a>
                        </li>
                        <li 
                            className="nav__item" 
                            onClick={toggleMenu}
                        >
                            <a href="#about" className="nav__link">About</a>
                        </li>
                        <li 
                            className="nav__item" 
                            onClick={toggleMenu}
                        >
                            <a href="#candy" className="nav__link">Candy</a>
                        </li>
                        <li 
                            className="nav__item" 
                            onClick={toggleMenu}
                        >
                            <a href="#new" className="nav__link">New</a>
                        </li>
                        <a href="#support" className="button button--ghost">Support</a>
                    </ul>
                    <div className="nav__close" id="nav-close" onClick = { toggleMenu } >
                        <i className='bx bx-x'></i>
                    </div>
                    <img src="img/nav-img.png" alt="nav_img" className="nav__img" />
                </div>

                <div className="nav__toggle" id="nav-toggle" onClick = { toggleMenu } >
                    <i className='bx bx-grid-alt' ></i>
                </div>

            </nav>
        </header>
    )
}
