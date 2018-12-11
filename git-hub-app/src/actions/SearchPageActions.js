import axios from 'axios'

const URL = 'https://api.github.com/search/users?q='

export const nextpage = (description, page, users) => {
    const currentpage = page
    return dispatch => {
        axios.get(`${URL}${description}&page=${currentpage}`)
            .then(resp => dispatch(createNewPage(users, resp)))
    }
}

export const createNewPage = (users, resp) => {
    const newList = users
    const newUsers =  resp.data.items
    newUsers.map(newUser => (
        newList.push(newUser)
    ))
    return dispatch => {
        dispatch(setNewPage())
    }
}

export const setNewPage = () => {
    console.log("alguem me ajuda")
    return {
        type: ''
    }
}