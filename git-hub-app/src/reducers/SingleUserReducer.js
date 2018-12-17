const INITIAL_STATE = {
    users: [],
    nothing: false,
    total_count: -1,
    condition:''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SINGLE_SEARCHED':
            console.log(action.payload)
            return state
        default:
            return state
    }
}