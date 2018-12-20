const INITIAL_STATE = {
    users: [],
    nothing: false,
    total_count: -1,
    condition:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USERS_SEARCHED':
            return { 
                ...state, 
                users: action.payload.data.items,
                nothing: false,
                total_count: action.payload.data.total_count,
                condition:'block'
            }
        case 'NOTHING_TYPED':
            return { ...state, nothing: true, total_count: 0 }
        case 'CREATED_PAGE':
            return { ...state, users: action.payload }
        case 'RESET_APP':
            return {  ...state, users: [], condition:'',  total_count: -1, nothing: false }
        default:
            return state
    }
}