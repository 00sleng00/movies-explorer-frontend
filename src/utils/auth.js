class Auth {
  constructor(options) {
      this._baseUrl = options.baseUrl
      // this._headers = options.headers
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

  register(name, email, password) {
      return fetch(`${this._baseUrl}/signup`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
              name: name,
              email: email,
              password: password,
          }),
      }).then(this._getResponseData)
  }
  authorize(email, password) {
      return fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify({
              email: email,
              password: password,
          }),
      }).then(this._getResponseData)
  }

  checkToken() {
      return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: {
              ...this._headers,
              // Authorization: `Bearer ${token}`,
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

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie),
  }).then(this._getResponseData)
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
  }).then(this._getResponseData)
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
  }).then(this._getResponseData)
  }
}

const auth = new Auth ({
  baseUrl: 'https://api-roman-movies.nomoredomains.sbs',
  // headers: { 'Content-Type': 'application/json' },
})

export default auth
