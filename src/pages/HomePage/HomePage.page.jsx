import React from 'react';

import CategoriesList from '../../components/HomePageComponents/CategoriesList/CategoriesList.component';
import MoviesList from '../../components/HomePageComponents/MoviesList/MoviesList.component';

const HomePage = () => {
    return (
        <main>
            <CategoriesList />
            <MoviesList />
        </main>
    )
}

export default HomePage;