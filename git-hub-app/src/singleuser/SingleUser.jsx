import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search } from '../actions/SingleUserActions'
import SingleImage from './SingleImage'
import SingleInformation from './SingleInformation'
import SingleBack from './SingleBack'

class SingleUser extends Component {
    componentWillMount(){
        this.props.search(this.props.singleuser)
    }
    render() {
        return(
            <div className="single-user">
                <SingleImage />
                <SingleInformation />
                <SingleBack />
            </div>
        )
    }
}

const mapStateToProps = state => ({singleuser: state.searchUser.singleuser})
const mapDispatchToProps = dispatch => bindActionCreators({search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SingleUser)