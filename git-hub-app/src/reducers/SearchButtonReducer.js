const INITIAL_STATE = {
    users: [],
    nothing: false,
    page: 1,
    total_count: 0,
    total_count_displayed:0
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USERS_SEARCHED':
            return { 
                ...state, 
                users: action.payload.data,
                nothing: false,
                total_count: action.payload.data.total_count
            }
        case 'NOTHING_TYPED':
            return { ...state, nothing: true, total_count: 0, page: 1 }
        case 'PAGE_ADDED':
            return { ...state, page: action.payload }
        default:
            return state
    }
}