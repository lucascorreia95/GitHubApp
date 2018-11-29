import { combineReducers } from 'redux';

import SearchInputReducer from './SearchInputReducer'
import SearchButtontReducer from './SearchButtonReducer'

const rootReducer = combineReducers({
    searchInput: SearchInputReducer,
    searchButton: SearchButtontReducer
})

export default rootReducer;