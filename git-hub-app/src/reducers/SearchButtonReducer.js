const INITIAL_STATE = {
    users: [],
    nothing: false,
    page: 0,
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
                total_count: action.payload.data.total_count,
                total_count_displayed: 30
            }
        case 'NOTHING_TYPED':
            return { ...state, nothing: true, total_count: 0 }
        default:
            return state
    }
}