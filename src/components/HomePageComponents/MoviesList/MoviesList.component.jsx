import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../../redux/actions/movieActions';

import Movie from '../Movie/Movie.component';

import './MoviesList.style.css';

const MoviesList = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const loading = useSelector(state => state.movies.loading);
    const error = useSelector(state => state.movies.error);

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <section className='movies-list-container'>
            {loading && <p>Loading...</p>}
            {movies && movies.length > 0 && movies.map((movie, idx) => <Movie key={movie.id} movie={{ ...movie, idx }} />)}
            {error && !loading && <p>{error}</p>}
        </section>
    )
}

export default MoviesList;
