import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../actions/SearchInputActions'

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

const mapStateToProps = state => ({users: state.searchButton.users, nothing: state.searchButton.nothing})
const mapDispatchToPropas = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(SearchList)