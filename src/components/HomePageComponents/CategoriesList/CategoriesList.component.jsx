import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../../redux/actions/categoryActions';
import './CategoriesList.style.css';

const CategoriesList = () => {
    const [currentCategory, setCurrentCategory] = useState('all');

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    const loading = useSelector(state => state.categories.loading);
    const error = useSelector(state => state.categories.error);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <nav>
            <h3>Categories:</h3>

            {loading && <p>Loading...</p>}
            {categories && categories.length > 0 && <form>
                <label className='movie-label'>
                    <input type="radio" onChange={e => setCurrentCategory(e.target.value)} checked={currentCategory.toString() === 'all' ? true : false} name='category' value={'all'} onClick={() => setCurrentCategory('all')} />
                    All
                </label>
                {categories.map(category => (
                    <label key={category.id} className='movie-label'>
                        <input type="radio" onChange={e => setCurrentCategory(e.target.value)} checked={currentCategory.toString() === category.id ? true : false} name='category' value={category.id} onClick={() => setCurrentCategory(category.id)} />
                        {category.name}
                    </label>
                ))}
                <hr />
            </form>}
            {error && !loading && <p>{error}</p>}
        </nav>
    )
}

export default CategoriesList;
