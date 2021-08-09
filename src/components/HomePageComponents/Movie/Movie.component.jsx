import React from 'react';
import { Link } from 'react-router-dom';

import './Movie.style.css';

const Movie = ({ movie }) => {
    return (
        <article>
            <h3>{movie.idx + 1}. {movie.name}</h3>
            <p>{movie.description}</p>
            <Link to={`movies/${movie.id}`} className='link'>See movie</Link>
            <hr />
        </article>
    )
}

export default Movie;
