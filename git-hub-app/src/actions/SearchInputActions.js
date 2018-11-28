
export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = (description) => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        
    }
}

export const add = (description) => {
    return dispatch => {
        
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        
    }
}

export const remove = (todo) => {
    return dispatch => {
        
    }
}

export const clear = () => {
    return[{
        type: "TODO_CLEAR"
    },  
    search()
]
}

