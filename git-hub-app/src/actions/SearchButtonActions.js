import axios from 'axios'

const URL = 'https://api.github.com/search/users?q='

export const search = (description, page, users) => {
    if (description){
        if (page){
            const currentpage = page
            const newlist = users
            axios.get(`${URL}${description}&page=${currentpage}`)
                .then(resp => resp.data.items.map(user => (
                    newlist.push(user)
                )))
            return {
                type: 'NEW_PAGE',
                payload: newlist
            }
        } else {
            const currentpage = 1
            const request = axios.get(`${URL}${description}&page=${currentpage}`)
            return {
                type: 'USERS_SEARCHED',
                payload: request
            }
        }
    } else {
        return {
            type: 'NOTHING_TYPED'
        }
    }
}