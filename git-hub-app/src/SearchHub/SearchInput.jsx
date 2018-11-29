import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../actions/SearchInputActions'

class SearchInput extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){
        if(e.key === 'Enter'){
            this.props.search()
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
const mapDispatchToPropas = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(SearchInput)