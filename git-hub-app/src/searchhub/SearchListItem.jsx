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
            if (this.props.total_count > 0){
                return (
                    <SearchUser />
                )
            } else if (this.props.total_count === 0) {
                return(
                    <NothingFound />
                )
            } else {
                return null
            }
        }
    }
}

const mapStateToProps = state => ({
    nothing: state.searchButton.nothing,
    total_count: state.searchButton.total_count, 
})
export default connect(mapStateToProps)(SearchListItem)