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
                        onClick={() => this.props.search(this.props.description, this.props.page, this.props.users)}>
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
    total_count: state.searchButton.total_count,
    users: state.searchButton.users,
    description: state.searchInput.description,
    page: state.searchUser.page
})
const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)