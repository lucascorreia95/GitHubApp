const INITIAL_STATE = {
    user:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SINGLE_SEARCHED':
            return {...state, user: action.payload.data}
        case 'RESET_APP':
            return {  ...state,  user:'' }
        case 'RESETED_SINGLE':
            return {  ...state,  user:'' }
        default:
            return state
    }
}