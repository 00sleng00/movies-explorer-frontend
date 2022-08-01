import React, { useEffect } from 'react'
import './BurgerMenu.css'
import closeIcon from '../../images/close-icon.svg'
import { NavLink } from 'react-router-dom'
import ProfileButton from '../ProfileButton/ProfileButton'

function BurgerMenu({ isOpen, handleClick, onClose }) {
  useEffect(() => {
    if (!isOpen) return
    const closeByEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', closeByEscape)
    return () => document.removeEventListener('keydown', closeByEscape)
  }, [isOpen, onClose])

  const closeByOverlay = (event) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      <div
        className={
          isOpen
            ? 'burger-menu__left'
            : 'burger-menu__left burger-menu__left_none'
        }
        onClick={closeByOverlay}
      ></div>
      <div
        className={
          isOpen ? 'burger-menu burger-menu_opened' : 'burger-menu'
        }
        onClick={closeByOverlay}
      >
        <button
          className="burger-menu-close-button"
          type="button"
          onClick={handleClick}
          onClose={onClose}
        >
          <img
            className="burger-menu__close-icon"
            src={closeIcon}
            alt="иконка закрытия"
          />
        </button>
        <nav className="burger-menu-nav">
          <React.Fragment>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'burger-menu-nav__link_active'
                  : 'burger-menu-nav__link'
              }
              exact="true"
              to="/"
              onClick={onClose}
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'burger-menu-nav__link_active'
                  : 'burger-menu-nav__link'
              }
              exact="true"
              to="/movies"
              onClick={onClose}
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'burger-menu-nav__link_active'
                  : 'burger-menu-nav__link'
              }
              exact="true"
              to="/saved-movies"
              onClick={onClose}
            >
              Сохраненные фильмы
            </NavLink>
          </React.Fragment>
        </nav>
        <ProfileButton onClose={onClose} />
      </div>
    </>
  )
}

export default BurgerMenu
