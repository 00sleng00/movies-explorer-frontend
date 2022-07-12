/* eslint-disable react-hooks/rules-of-hooks */
import './Header.css'
import { React, useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import LogoContainer from '../LogoConteiner/LogoContainer'
import ProfileButton from '../ProfileButton/ProfileButton'
import LoginButton from '../LoginButton/LoginButton'
import RegButton from '../RegButton/RegButton'
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

function Header() {
  const location = useLocation();
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 768

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResizeWindow)
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [])

    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

    function handleClickBurgerMenu() {
        setIsBurgerMenuOpen(!isBurgerMenuOpen)
    }

    function handleCloseBurgerMenu() {
        setIsBurgerMenuOpen(false)
    }

    if (width > breakpoint) {

        return (
            <header  className={`header header_theme_${
        location.pathname === '/' ? 'bright' : 'dark'
      }`}>
                <Routes>
                    <Route path="/" element={<LogoContainer />}></Route>
                    <Route path="/movies" element={<LogoContainer />}></Route>
                    <Route
                        path="/saved-movies"
                        element={<LogoContainer />}
                    ></Route>
                    <Route path="/profile" element={<LogoContainer />}></Route>
                </Routes>

                <div className="header__content" >
                    <Routes>
                        <Route
                            path="/"
                            element={[
                                <RegButton key={'index0'} />,
                                <LoginButton key={'index1'} />,
                            ]}
                        ></Route>
                        <Route
                            path="/movies"
                            element={[
                                <Navigation key={'index0'} />,
                                <ProfileButton key={'index1'} />,
                            ]}
                        ></Route>
                        <Route
                            path="/saved-movies"
                            element={[
                                <Navigation key={'index0'} />,
                                <ProfileButton key={'index1'} />,
                            ]}
                        ></Route>
                        <Route
                            path="/profile"
                            element={[
                                <Navigation key={'index0'} />,
                                <ProfileButton key={'index1'} />,
                            ]}
                        ></Route>
                    </Routes>
                </div>
            </header>
        )
    }

    return (
        <header className={`header header_theme_${
          location.pathname === '/' ? 'bright' : 'dark'
        }`} >
            <Routes>
                <Route path="/" element={<LogoContainer />}></Route>
                <Route path="/movies" element={<LogoContainer />}></Route>
                <Route path="/saved-movies" element={<LogoContainer />}></Route>
                <Route path="/profile" element={<LogoContainer />}></Route>
            </Routes>
            <div className="header__content">
                <Routes>
                    <Route
                        path="/"
                        element={[
                            <RegButton key={'index0'} />,
                            <LoginButton key={'index1'} />,
                        ]}
                    ></Route>

                    <Route
                        path="/movies"
                        element={[
                            <BurgerMenuButton
                                isOpen={isBurgerMenuOpen}
                                handleClick={handleClickBurgerMenu}
                                key={'index0'}
                            />,
                            <BurgerMenu
                                isOpen={isBurgerMenuOpen}
                                handleClick={handleClickBurgerMenu}
                                onClose={handleCloseBurgerMenu}
                                key={'index1'}
                            />,
                        ]}
                    ></Route>

                    <Route
                        path="/saved-movies"
                        element={[
                            <BurgerMenuButton
                                isOpen={isBurgerMenuOpen}
                                handleClick={handleClickBurgerMenu}
                                key={'index0'}
                            />,
                            <BurgerMenu
                                isOpen={isBurgerMenuOpen}
                                handleClick={handleClickBurgerMenu}
                                onClose={handleCloseBurgerMenu}
                                key={'index1'}
                            />,
                        ]}
                    ></Route>

                    <Route
                        path="/profile"
                        element={[
                            <BurgerMenuButton
                                isOpen={isBurgerMenuOpen}
                                handleClick={handleClickBurgerMenu}
                                key={'index0'}
                            />,
                            <BurgerMenu
                                isOpen={isBurgerMenuOpen}
                                handleClick={handleClickBurgerMenu}
                                onClose={handleCloseBurgerMenu}
                                key={'index1'}
                            />,
                        ]}
                    ></Route>
                </Routes>
            </div>
        </header>
    )
}

export default Header
