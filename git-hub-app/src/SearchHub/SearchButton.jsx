import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions/SearchButtonActions'

class SearchButton extends Component {
    render() {
        return(
            <button className="search__button" onClick={() => this.props.search(this.props.description)}>Buscar</button>
        )
    }
}

const mapStateToProps = state => ({description: state.searchInput.description})
const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchButton)