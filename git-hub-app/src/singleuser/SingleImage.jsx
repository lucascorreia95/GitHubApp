import React, { Component } from 'react'
import { connect } from 'react-redux'

class SingleInformation extends Component {
    render() {
        return(
            <div className="single-user__img">
                <img src={this.props.userimg} alt=""/>
            </div>
        )
    }
}

const mapStateToProps = state => ({userimg: state.singleUser.user.avatar_url})

export default connect(mapStateToProps, null)(SingleInformation)