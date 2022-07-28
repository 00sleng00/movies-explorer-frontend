import { SHORT_DURATION, CARDS_URL } from "./constants"

//фильтрация фильмов по длине до 40минут
export function findShortMovies(movies) {
  return movies.filter((item) => item.duration < SHORT_DURATION)
}

//филтрация фильмов по ключевому слову и длине
export function searchAndFilterMovies(movies, keyWord, checkBoxStatus) {
  const queryMovies = Array.isArray(movies)
    ? movies.filter((item) => {
      return (
        item.nameRU.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
      )
    })
    : []
  if (checkBoxStatus) {
    return findShortMovies(queryMovies)
  }
  return queryMovies
}

//конвертация минут в часы-минуты
export function getTimeFromMin(min) {
  const hours = Math.trunc(min / 60)
  const minutes = min % 60
  return `${hours}ч ${minutes}м`
}

export function changeMovies(movies) {
  movies.forEach((movie) => {
    if (!movie.image) {
      movie.image = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80'
      movie.thumbnail = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1940&q=80'
    } else {
      movie.thumbnail = `${CARDS_URL}${movie.image.formats.thumbnail.url}`
      movie.image = `${CARDS_URL}${movie.image.url}`
    }
  })
}