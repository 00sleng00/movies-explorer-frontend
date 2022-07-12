import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import savedMoviesCardList from '../../utils/сardList'
import Devider from '../Devider/Devider'

function SavedMovies() {
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList
                moviesCardList={savedMoviesCardList}
                isSaved={true}
            />
            <Devider />
        </section>
    )
}

export default SavedMovies
