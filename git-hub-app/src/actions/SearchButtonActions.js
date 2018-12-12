import axios from 'axios'

const URL = 'https://api.github.com/search/users?q='

export const search = (description) => {
    if (description) {
        const request = axios.get(`${URL}${description}&page=1`)
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

export const nextpage = (description, page, users) => {
    const currentpage = page
    return dispatch => {
        axios.get(`${URL}${description}&page=${currentpage}`)
            .then(resp => dispatch(createNewPage(users, resp)))
    }
}

export const createNewPage = (users, resp) => {
    const newlist = users.concat(resp.data.items);
    return{
        type: 'CREATED_PAGE',
        payload: newlist
    }
}