import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({
  movies,
  moviesCardList,
  onSave,
  onDelete,
  isMarked,
  isSaved,
}) {
  return (
    <div className="movies-card-lis-container">
      <ul className="movies-card-list">
        {movies.map((moviesCard) => (
          <MoviesCard
            key={moviesCard.id || moviesCard.movieId}
            moviesCard={moviesCard}
            moviesCardList={moviesCardList}
            onSave={onSave}
            onDelete={onDelete}
            isMarked={isMarked}
            isSaved={isSaved}
          />
        ))}
      </ul>
    </div>
  )
}

export default MoviesCardList
