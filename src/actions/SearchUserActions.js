export const newpage = (page) => {
    return {
        type: 'PAGE_ADDED',
        payload: page + 1
    }
}

export const singleuser = (singleuser) => {
    return {
        type: 'USER_RECEIVED',
        payload: singleuser
    }
}