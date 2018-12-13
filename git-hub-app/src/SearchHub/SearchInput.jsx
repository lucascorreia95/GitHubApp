import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../actions/SearchInputActions'
import { search } from '../actions/SearchButtonActions'

class SearchInput extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){
        if(e.key === 'Enter'){
            this.props.search(this.props.description)
        }
    }

    render() {
        return(
            <input id="description" className="search__input" datatype={this.props.condition}
            placeholder="Digite o usuario ... " 
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}/>
        )
    }
}

const mapStateToProps = state => ({description: state.searchInput.description, condition: state.searchButton.condition})
const mapDispatchToPropas = dispatch => bindActionCreators({changeDescription, search}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(SearchInput)