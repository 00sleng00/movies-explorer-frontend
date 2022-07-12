class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
        return res.json()
    }

    getInitialMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: this._headers,
        }).then(this._getResponseData)
    }
}

const api = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api
