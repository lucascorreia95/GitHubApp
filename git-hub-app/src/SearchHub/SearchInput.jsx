import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from '../actions/SearchInputActions'

class SearchInput extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){
        const { add, search, description, clear } = this.props
        if(e.key === 'Enter'){
            search()
        }
    }

    render() {
        return(
            <input id="description" className="search__input" 
            placeholder="Digite o usuario ... " 
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}/> 
        )
    }
}

const mapStateToProps = state => ({description: state.searchInput.valor})
const mapDispatchToPropas = dispatch => bindActionCreators({add, changeDescription, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(SearchInput)