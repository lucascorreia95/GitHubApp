const INITIAL_STATE = {
    page: 1
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PAGE_ADDED':
            return { ...state, page: action.payload }
        default:
            return state
    }
}