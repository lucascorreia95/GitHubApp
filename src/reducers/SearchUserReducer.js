const INITIAL_STATE = {
    page: 1,
    singleuser: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'PAGE_ADDED':
            return { ...state, page: action.payload }
        case 'RESET_APP':
            return {  ...state,  page: 1, singleuser: '' }
        case 'USER_RECEIVED':
            return {  ...state,  singleuser: action.payload }
        default:
            return state
    }
}