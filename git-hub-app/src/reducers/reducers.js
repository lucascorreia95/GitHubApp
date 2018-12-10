import { combineReducers } from 'redux';

import SearchInputReducer from './SearchInputReducer'
import SearchButtontReducer from './SearchButtonReducer'
import SearchUserReducer from './SearchUserReducer'

const rootReducer = combineReducers({
    searchInput: SearchInputReducer,
    searchButton: SearchButtontReducer,
    searchUser: SearchUserReducer
})

export default rootReducer;