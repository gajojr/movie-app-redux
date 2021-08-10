import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovie } from '../../../redux/actions/movieActions';

import MovieComments from '../MovieComments/MovieComments.component';
import ThumbnailVideo from '../ThumbnailVideo/ThumbnailVideo.component';
import AddCommentForm from '../AddCommentForm/AddCommentForm.component';

import './MovieCard.styles.css';

const MovieCard = ({ id }) => {
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movies.movie);
    const loading = useSelector(state => state.movies.loading);
    const error = useSelector(state => state.movies.error);

    useEffect(() => {
        dispatch(getMovie(id));
    }, [dispatch, id]);

    if (loading) {
        return <p>Loading...</p>;
    } else if (error && !loading) {
        return <p>{error}</p>;
    }

    return (
        <main className='movie-card-container'>
            {loading && <p>Loading...</p>}
            {movie && <><h1>{movie.name}</h1>
                <div className='description-and-thumbnail'>
                    <p>{movie.description}</p>
                    <img src={movie.imageUrl} alt="movie thumbnail" />
                </div>
                <br />
                <ThumbnailVideo imdbId={movie.imdbId} />

                <MovieComments movieId={id} />

                <AddCommentForm /></>}

            {error && !loading && <p>{error}</p>}
        </main>
    )
}

export default MovieCard;
