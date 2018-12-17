import { combineReducers } from 'redux';

import SearchInputReducer from './SearchInputReducer'
import SearchButtontReducer from './SearchButtonReducer'
import SearchUserReducer from './SearchUserReducer'
import SingleUserReducer from './SingleUserReducer'

const rootReducer = combineReducers({
    searchInput: SearchInputReducer,
    searchButton: SearchButtontReducer,
    searchUser: SearchUserReducer,
    singleUser: SingleUserReducer
})

export default rootReducer;