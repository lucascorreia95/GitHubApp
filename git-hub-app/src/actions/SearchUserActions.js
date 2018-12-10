export const newpage = (page) => {
    return {
        type: 'PAGE_ADDED',
        payload: page + 1
    }
}