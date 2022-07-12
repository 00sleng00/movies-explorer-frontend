import React from 'react'
import MarkButton from '../MarkButton/MarkButton'
import DelButton from '../DelButton/DelButton'
import './MoviesCard.css'

function MoviesCard({ moviesCard, isMarked, isSaved }) {

    return (
        <li className="movies-card" key={moviesCard.id}>
            <div className="movies-card__head">
                <div className="movies-card__head-info">
                    <h2 className="movies-card__title">{moviesCard.title}</h2>
                    <p className="movies-card__duration">
                        {moviesCard.duration}
                    </p>
                </div>
                {!isSaved ? <MarkButton isMarked={isMarked} /> : <DelButton />}
            </div>
            <img
                className="movies-card__image"
                src={moviesCard.image}
                alt={`Фото к фильму ${moviesCard.title}`}
            />
        </li>
    )
}

export default MoviesCard
