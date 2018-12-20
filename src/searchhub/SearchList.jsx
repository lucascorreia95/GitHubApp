import React, { Component } from 'react'

import SearchListItem from './SearchListItem'
import SearchPage from './SearchPage'

class SearchList extends Component {
    render() {
        return(
            <React.Fragment>
                <ul className="list__users">
                    <SearchListItem />
                </ul>
                <SearchPage />
            </React.Fragment>
        )
    }
}
export default SearchList