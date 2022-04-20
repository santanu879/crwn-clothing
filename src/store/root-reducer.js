import {combineReducers} from 'redux';

import {categoriesReducer} from '../store/categories/category.reducer';

export const rootReducer=combineReducers({
    categories:categoriesReducer
})