import { useNavigate } from 'react-router-dom'
import './PageNotFound.css'

function PageNotFound() {
    const navigate = useNavigate()

    return (
        <div className="page-not-found">
            <h1 className="page-not-found__title">404</h1>
            <p className="page-not-found__caption">Страница не найдена</p>
            <button
                type="button"
                className="page-not-found__go-back"
                onClick={() => navigate(-1)}
            >
                Назад
            </button>
        </div>
    )
}

export default PageNotFound
