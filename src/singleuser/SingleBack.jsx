import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { reset_single } from "../actions/SingleUserActions"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SingleBack extends Component {
    render() {
        return(
            <div className="single-back">
                <Link className="button" to="/GitHubApp" onClick={() => this.props.reset_single()}>Voltar</Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({reset_single}, dispatch)
export default connect(null, mapDispatchToProps)(SingleBack)