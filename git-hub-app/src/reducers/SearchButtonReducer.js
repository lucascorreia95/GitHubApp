const INITIAL_STATE = {
    users: [],
    nothing: false
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USERS_SEARCHED':
            return { ...state, users: action.payload.data, nothing: false }
        case 'NOTHING_TYPED':
            return { ...state, nothing: true }
        default:
            return state
    }
}