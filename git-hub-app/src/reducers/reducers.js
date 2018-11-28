import { combineReducers } from 'redux';

import SearchInputReducer from './SearchInputReducer'

const rootReducer = combineReducers({
    searchInput: SearchInputReducer
})

export default rootReducer;