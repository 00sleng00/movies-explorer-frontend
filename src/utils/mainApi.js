class MainApi {
  constructor(options) {
      this._baseUrl = options.baseUrl
  }

  get _headers() {
    return {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    }
  }

  _getResponseData(res) {
      if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`)
      }
      return res.json()
  }

  register({ name, email, password }) {
      return fetch(`${this._baseUrl}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password }),
      }).then(this._getResponseData)
  }
  authorize({ email, password }) {
      return fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password,}),
      }).then(this._getResponseData)
  }

  checkToken(token) {
      return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
      }).then(this._getResponseData)
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  updateProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._getResponseData);
  }

  saveMovie({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    id,
  }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: country || 'unknown',
        director: director || 'unknown',
        duration: duration,
        year: year || 'no data',
        description: description || 'no data',
        image: image,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: id,
        nameRU: nameRU ||'no name',
        nameEN: nameEN || 'no name',
      }),
  }).then(this._getResponseData)
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
  }).then(this._getResponseData)
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
  }).then(this._getResponseData)
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api-roman-movies.nomoredomains.sbs',
})

export default mainApi