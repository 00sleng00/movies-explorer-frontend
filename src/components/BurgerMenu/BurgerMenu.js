import React, { useEffect } from 'react'
import './BurgerMenu.css'
import closeIcon from '../../images/close-icon.svg'
import { Link } from 'react-router-dom'
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
                className={isOpen ? 'burger-menu__left' : 'burger-menu__left burger-menu__left_none'}
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
                        <Link
                            className="burger-menu-nav__link"
                            to="/"
                            onClick={onClose}
                        >
                            Главная
                        </Link>
                        <Link
                            className="burger-menu-nav__link burger-menu-nav__link_active"
                            to="/movies"
                            onClick={onClose}
                        >
                            Фильмы
                        </Link>
                        <Link
                            className="burger-menu-nav__link"
                            to="/saved-movies"
                            onClick={onClose}
                        >
                            Сохраненные фильмы
                        </Link>
                    </React.Fragment>
                </nav>
                <ProfileButton />
            </div>
        </>
    )
}

export default BurgerMenu
