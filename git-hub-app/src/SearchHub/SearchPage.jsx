import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions/SearchButtonActions'

class SearchPage extends Component {
    render() {
        if (this.props.total_count > 30 && this.props.page < 34 && this.props.page < (this.props.total_count / 30)) {
            return(
                <div className="list__more">
                    <button className="list__button"
                        onClick={() => this.props.search(this.props.description, this.props.page)}>
                        Tem mais hein, quer ver?
                    </button>
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
    total_count_displayed: state.searchButton.total_count_displayed,
    description: state.searchInput.description,
    page: state.searchButton.page
})
const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)