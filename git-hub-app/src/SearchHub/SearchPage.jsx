import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../actions/SearchInputActions'

class SearchPage extends Component {
    render() {
        console.log(this.props.total_count)
        if (this.props.total_count > 30 && 
            this.props.total_count > this.props.total_count_displayed &&
            this.props.total_count_displayed < 1000 ) {
            return(
                <div className="list__more">
                    <button className="list__button">Tem mais hein, quer ver?</button>
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = state => ({
    users: state.searchButton.users, 
    total_count: state.searchButton.total_count,
    total_count_displayed: state.searchButton.total_count_displayed
})
const mapDispatchToPropas = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(SearchPage)