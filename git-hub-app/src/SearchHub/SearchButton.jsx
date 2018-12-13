import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, reset } from '../actions/SearchButtonActions'

class SearchButton extends Component {
    render() {
        if(this.props.condition){
            return(
                <button className="search__button" onClick={() => this.props.reset()}>Outra busca?</button>
            )
        }else{
            return(
                <button className="search__button" onClick={() => this.props.search(this.props.description)}>Buscar</button>
            )
        }
    }
}

const mapStateToProps = state => ({description: state.searchInput.description, condition: state.searchButton.condition})
const mapDispatchToProps = dispatch => bindActionCreators({search, reset}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchButton)