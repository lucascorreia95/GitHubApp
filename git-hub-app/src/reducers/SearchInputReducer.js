const INITIAL_STATE = {
    description: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'RESET_APP':
            return {  ...state,  description: '' }
        default:
            return state
    }
}