import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions/SearchButtonActions'

class SearchButton extends Component {
    render() {
        return(
            <button className="search__button" onClick={() => search()}>Buscar</button>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)
export default connect(null, mapDispatchToProps)(SearchButton)