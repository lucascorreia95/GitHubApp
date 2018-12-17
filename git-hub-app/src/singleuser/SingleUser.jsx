import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions/SingleUserActions'

class SingleUser extends Component {
    componentWillMount(){
        this.props.search(this.props.singleuser)
    }
    render() {
        return(
            <div>teste</div>
        )
    }
}

const mapStateToProps = state => ({singleuser: state.searchUser.singleuser})
const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)