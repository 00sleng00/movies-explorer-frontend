import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import PageNotFound from '../PageNotFound/PageNotFound'
import api from '../../utils/api'
import auth from '../../utils/auth'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [searchMoviesError, setSearchMoviesError] = useState('')
  const [initialMovies, setInitialMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState([])
  const [isSaved, setIsSaved] = useState(false)
  const [savedMovies, setSavedMovies] = useState([])

  function getMovies() {
    api
      .getInitialMovies()
      .then((movieData) => {
        if (movieData.length !== 0) {
          localStorage.setItem('movies', JSON.stringify(movieData))
          setInitialMovies(movieData)
        }
      })
      .catch(() => {
        localStorage.removeItem('movies')
        setSearchMoviesError(
          'Во время запроса произошла ошибка. ' +
          'Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз'
        )
      })
  }



  useEffect(() => {
    setIsLoading(false);
    const initialMovies = JSON.parse(localStorage.getItem('movies'))

    if (initialMovies) {
      const movieData = initialMovies.map((item) => {
        const imageURL = item.image.url
        return {
          id: item.id,
          title: item.nameRU,
          duration: item.duration,
          image: `https://api.nomoreparties.co${imageURL}`,
          trailer: item.trailerLink,
        }
      })

      setInitialMovies(movieData)
    } else {
      getMovies()
    }
  }, [])


  function searchMovies(initialMovies, searchQuery) {
    setIsLoading(true)
    if (searchQuery) {
      const searchedMovies = initialMovies.filter((movie) =>
        movie.title.includes(searchQuery)
      )
      if (searchedMovies.length === 0) {
        setSearchMoviesError('Ничего не найдено.')
      } else {
        setSearchMoviesError('')
      }
      // localStorage.setItem('searchQuery', searchQuery);
      // localStorage.setItem('searchedMovies', searchedMovies);
      return searchedMovies;
    }
    return []
  }

  function handleSearchMovies(searchQuery) {
    const searchedMovies = searchMovies(initialMovies, searchQuery)

    setSearchedMovies(searchedMovies)
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('searchedMovies', searchedMovies);
    setIsLoading(false)
  }

  function handleSaveMovie(movie) {
    auth.saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
        console.log(savedMovies)
        setIsSaved(true);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movie) {
    auth.deleteMovie(movie.id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((item) => item.id !== movie.id));
        setIsSaved(false);
      })
      .catch((err) => console.log(err));
  }
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const history = useNavigate();
  function handleInfoTooltipSetOpen() {
    setIsInfoTooltipOpen(!isInfoTooltipOpen);
  }
  const [loggedIn, setLoggedIn] = useState(false);

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        setIsSuccess(true);
        console.log(isSuccess);
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
      })
      .finally(() => {
        handleInfoTooltipSetOpen();
      });
  }

  function handleAuthorize(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          // setEmailAuthorized(data.email);
          history.push('/');
          // handleTokenCheck();
          setLoggedIn(true);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleTokenCheck() {
    const token = localStorage.getItem("jwt");
    if (token) {
      setLoggedIn(true);
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            // setEmailAuthorized(res.email);
          }

          history.push('/');
        })
        .catch((err) => console.log(err));
    }
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser({});
  }

  useEffect(() => {
    handleTokenCheck();
    if (loggedIn) {
      // history.push('/');
      auth.getProfile()
        .then((profileData) => {
          const data = {
            name: profileData.name,
            email: profileData.email,
            _id: profileData._id,
          };
          setCurrentUser(data);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    const timer = setTimeout(() => setIsInfoTooltipOpen(false), 3000)
    return () => clearTimeout(timer)
  })
  const [currentUser, setCurrentUser] = useState({});


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page-container">
        <Header />

        <Routes>
          <Route path="/signup" element={<Register onRegister={handleRegister} isSuccess={isSuccess} />}></Route>

          <Route path="/signin" element={<Login onLogin={handleAuthorize} isSuccess={isSuccess} />}></Route>

          <Route path="/profile" element={<Profile onLogout={handleLogOut} />}></Route>

          <Route
            path="/"
            element={[
              <Main key={'index0'} />,
              <Footer key={'index1'} />,
            ]}
          ></Route>

          <Route
            path="/movies"
            element={[
              <Movies
                key={'index0'}
                isLoading={isLoading}
                searchMoviesError={searchMoviesError}
                filterCheckbox
                onSearch={handleSearchMovies}
                searchedMovies={searchedMovies}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                isSaved={isSaved}
              />,
              <Footer key={'index1'} />,
            ]}
          ></Route>

          <Route
            path="/saved-movies"
            element={[
              <SavedMovies
                key={'index0'}
                isLoading={isLoading}
                searchMoviesError={searchMoviesError}
                filterCheckbox
                onSearch={handleSearchMovies}
                savedMovies={savedMovies}
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
                isSaved={isSaved}
              />,
              <Footer key={'index1'} />,
            ]}
          ></Route>

          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
