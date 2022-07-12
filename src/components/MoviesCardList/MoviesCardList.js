import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ moviesCardList, isMarked, isSaved }) {
    return (
        <div className="movies-card-lis-container">
            <ul className="movies-card-list">
                {moviesCardList.map((moviesCard) => (
                    <MoviesCard
                        key={moviesCard.id}
                        moviesCard={moviesCard}
                        isMarked={isMarked}
                        isSaved={isSaved}
                    />
                ))}
            </ul>
        </div>
    )
}

export default MoviesCardList
