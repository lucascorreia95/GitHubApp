import axios from 'axios'

const URL = 'https://api.github.com/search/users?q='

export const search = (description) => {
    const request = axios.get(`${URL}${description}&page=1`)
    return {
        type: 'USERS_SEARCHED',
        payload: request
    }
}