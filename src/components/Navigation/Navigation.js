import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="main-nav">
      <React.Fragment>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? 'main-nav__link_active' : 'main-nav__link'
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'main-nav__link_active' : 'main-nav__link'
          }
          to="/saved-movies"
        >
          Сохраненные фильмы
        </NavLink>
      </React.Fragment>
    </nav>
  )
}

export default Navigation
