import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    teste: () => ({valor:'Apenas um teste'})
})

export default rootReducer;