import React, { useState, useEffect } from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreButton from '../MoreButton/MoreButton'
import Preloader from '../Preloader/Preloader'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import moviesApi from '../../utils/moviesApi'
import {
    searchAndFilterMovies,
    findShortMovies,
    changeMovies,
} from '../../utils/utils'
import {
    MOBILE_WIDTH,
    TABLET_WIDTH,
    MOBILE_COUNT,
    TABLET_COUNT,
    DESKTOP_COUNT,
    TABLET_MOBILE_ADDITIONAL,
    DESKTOP_ADDITIONAL,
} from '../../utils/constants'

function Movies({
    moviesCardList,
    onSave,
    onDelete,
    isSuccess,
    isInfoTooltipOpen,
    errorMessage,
}) {
    const [isLoading, setIsLoading] = useState(false)
    const [searchMessage, setSearchMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isSearchComplited, setIsSearchComplited] = useState(false)

    const [keyWord, setKeyWord] = useState('')
    const [checkBoxStatus, setCheckBoxStatus] = useState(false)

    const [initialMovies, setInitialMovies] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])

    const [toRenderMovies, setToRenderMovies] = useState([])

    const [isMore, setIsMore] = useState(false)
    const [count, setCount] = useState(0)
    const [additional, setAdditional] = useState(0)

    const windowSize = document.documentElement.clientWidth

    useEffect(() => {
        if (windowSize > TABLET_WIDTH) {
            setCount(DESKTOP_COUNT)
            setAdditional(DESKTOP_ADDITIONAL)
        } else if (windowSize <= TABLET_WIDTH && windowSize >= MOBILE_WIDTH) {
            setCount(TABLET_COUNT)
            setAdditional(TABLET_MOBILE_ADDITIONAL)
        } else if (windowSize < MOBILE_WIDTH) {
            setCount(MOBILE_COUNT)
            setAdditional(TABLET_MOBILE_ADDITIONAL)
        }
    }, [windowSize])

    const handleMoreMoviesLoad = () => {
        setToRenderMovies((prev) =>
            searchedMovies.slice(0, prev.length + additional)
        )
    }

    useEffect(() => {
        if (searchedMovies.length > 0) {
            if (searchedMovies.length > count) {
                setToRenderMovies(searchedMovies.slice(0, count))
                setIsMore(true)
            } else {
                setToRenderMovies(searchedMovies)
            }
        } else if (searchedMovies.length === 0) {
            setIsSearchComplited(true)
            setToRenderMovies([])
        }
    }, [count, searchedMovies])

    const handleSearchAndFilterMovies = (movies, kyeWord, checkBoxStatus) => {
        const moviesList = searchAndFilterMovies(
            movies,
            kyeWord,
            checkBoxStatus
        )

        setSearchedMovies(moviesList)
        localStorage.setItem('movies', JSON.stringify(moviesList))

        setIsSearchComplited(true)
    }

    const handleSearchMovies = (keyWord, checkBoxStatus) => {
        setToRenderMovies([])
        setKeyWord(keyWord)
        setCheckBoxStatus(checkBoxStatus)

        localStorage.setItem('keyWord', keyWord)
        localStorage.setItem('checkBoxStatus', checkBoxStatus)

        if (!initialMovies.length) {
            setIsLoading(true)
            moviesApi
                .getInitialMovies()
                .then((data) => {
                    changeMovies(data)
                    setInitialMovies(data)
                    handleSearchAndFilterMovies(data, keyWord, checkBoxStatus)
                })
                .catch((err) => {
                    setIsError(true)
                    setSearchMessage(
                        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
                    )
                    localStorage.removeItem('movies')
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        } else {
            handleSearchAndFilterMovies(initialMovies, keyWord, checkBoxStatus)
            setIsLoading(false)
            setIsError(false)
        }
    }

    useEffect(() => {
        const arrMovies = JSON.parse(localStorage.getItem('movies'))

        setToRenderMovies(arrMovies)
        if (arrMovies && !keyWord) {
            setCheckBoxStatus(checkBoxStatus)
            setSearchedMovies(
                checkBoxStatus ? findShortMovies(arrMovies) : arrMovies
            )
        }
    }, [checkBoxStatus, keyWord])

    useEffect(() => {
        if (keyWord) {
            const arrMovies = searchAndFilterMovies(
                initialMovies,
                keyWord,
                checkBoxStatus
            )
            setSearchedMovies(arrMovies)
        }
    }, [keyWord, checkBoxStatus, initialMovies])

    useEffect(() => {
        if (toRenderMovies) {
            if (toRenderMovies.length === searchedMovies.length) {
                setIsMore(false)
            } else {
                setIsMore(true)
            }
        }
    }, [searchedMovies, toRenderMovies])

    return (
        <section className="movies">
            <SearchForm onSearchMovies={handleSearchMovies} />
            {isLoading ? (
                <Preloader />
            ) : isSearchComplited ? (
                toRenderMovies && searchedMovies.length > 0 ? (
                    <MoviesCardList
                        movies={toRenderMovies}
                        moviesCardList={moviesCardList}
                        onSave={onSave}
                        onDelete={onDelete}
                    />
                ) : searchedMovies.length === 0 && initialMovies.length > 0 ? (
                    <span className="movies__message">Ничего не найдено.</span>
                ) : (
                    ''
                )
            ) : (
                isError && (
                    <span className="movies__message">{searchMessage}</span>
                )
            )}
            {isMore && <MoreButton onClick={handleMoreMoviesLoad} />}
            <InfoTooltip
                isSuccess={isSuccess}
                isInfoTooltipOpen={isInfoTooltipOpen}
                errorMessage={errorMessage}
            />
        </section>
    )
}

export default Movies
