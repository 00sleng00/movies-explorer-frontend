import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="main-nav">
            <React.Fragment>
                <Link
                    className="main-nav__link main-nav__link_active"
                    to="/movies"
                >
                    Фильмы
                </Link>
                <Link className="main-nav__link" to="/saved-movies">
                    Сохраненные фильмы
                </Link>
            </React.Fragment>
        </nav>
    )
}

export default Navigation
