import React, { useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Devider from '../Devider/Devider'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { searchAndFilterMovies } from '../../utils/utils'

function SavedMovies({
  moviesCardList,
  onDelete,
  isSuccess,
  isInfoTooltipOpen,
  errorMessage,
}) {
  const [searchedMovies, setSearchedMovies] = useState([])
  const [isSearchComplited, setIsSearchComplited] = useState(false)

  const [keyWord, setKeyWord] = useState('')
  const [checkBoxStatus, setCheckBoxStatus] = useState(false)

  const handleSearchMovies = (keyWord, checkBoxStatus) => {
    setKeyWord(keyWord)
    setCheckBoxStatus(checkBoxStatus)
    setSearchedMovies(
      searchAndFilterMovies(moviesCardList, keyWord, checkBoxStatus)
    )
    setIsSearchComplited(true)
  }

  useEffect(() => {
    if (searchedMovies.length > 0) {
      setSearchedMovies(
        searchAndFilterMovies(moviesCardList, keyWord, checkBoxStatus)
      )
    } else {
      setSearchedMovies(moviesCardList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviesCardList])

  return (
    <section className="saved-movies">
      <SearchForm
        onSearchMovies={handleSearchMovies}
        savedMoviesRoute={true}
      />
      {isSearchComplited ? (
        searchedMovies.length > 0 ? (
          <MoviesCardList
            savedMoviesRoute={true}
            movies={searchedMovies}
            onDelete={onDelete}
            isSaved={true}
          />
        ) : (
          <span className="movies__message">Ничего не найдено.</span>
        )
      ) : (
        <MoviesCardList
          movies={moviesCardList}
          onDelete={onDelete}
          isSaved={true}
        />
      )}

      <Devider />
      <InfoTooltip
        isSuccess={isSuccess}
        isInfoTooltipOpen={isInfoTooltipOpen}
        errorMessage={errorMessage}
      />
    </section>
  )
}

export default SavedMovies
