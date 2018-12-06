import axios from 'axios'

const URL = 'https://api.github.com/search/users?q='

export const search = (description, page) => {
    if (description){
        const currentpage = page ? page : 1
        const request = axios.get(`${URL}${description}&page=${currentpage}`)
        console.log(`${URL}${description}&page=${currentpage}`)
        return {
            type: 'USERS_SEARCHED',
            payload: request
        }
    } else {
        return {
            type: 'NOTHING_TYPED'
        }
    }
}

export const newpage = (page) => {
    return {
        type: 'PAGE_ADDED',
        payload: page + 1
    }
}
