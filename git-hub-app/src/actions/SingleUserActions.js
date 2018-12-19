import axios from 'axios'

const URL = 'https://api.github.com/users/'

export const search = (singleuser) => {
    const request = axios.get(`${URL}${singleuser}`)
    return {
        type: 'SINGLE_SEARCHED',
        payload: request
    }
}

export const reset_single = () => {
    return {
        type: 'RESETED_SINGLE'
    }
}