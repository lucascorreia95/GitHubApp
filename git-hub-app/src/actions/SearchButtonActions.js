import axios from 'axios'

const URL = 'https://api.github.com/search/users?q='

export const search = (description) => {
    const request = axios.get(`${URL}${description}`)
    return {
        type: 'USERS_SEARCHED',
        payload: request
    }
}
