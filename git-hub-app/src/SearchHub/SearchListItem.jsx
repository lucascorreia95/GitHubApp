import React, { Component } from 'react'
import { connect } from 'react-redux'

import NothingTyped from './SearchNothing'
import NothingFound from './SearchNothingFound'
import SearchUser from './SearchUser'

class SearchListItem extends Component {
    render() {
        if (this.props.nothing === true) {
            return(
                <NothingTyped />
            )
        } else {
            if (this.props.users.total_count > 0){
                return (
                    <SearchUser />
                )
            } else if (this.props.users.total_count === 0) {
                return(
                    <NothingFound />
                )
            } else {
                return null
            }
        }
    }
}

const mapStateToProps = state => ({users: state.searchButton.users, nothing: state.searchButton.nothing})
export default connect(mapStateToProps)(SearchListItem)