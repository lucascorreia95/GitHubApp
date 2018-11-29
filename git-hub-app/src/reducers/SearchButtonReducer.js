const INITIAL_STATE = {
    users: []
}
export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type) {
        case 'USERS_SEARCHED':
            return { ...state, users: action.payload.data }
        default:
            return state
    }
}