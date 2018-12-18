import React, { Component } from 'react'
import { Link } from "react-router-dom"

class SingleBack extends Component {
    render() {
        return(
            <div className="single-back">
                <Link className="button" to="/">Voltar</Link>
            </div>
        )
    }
}

export default SingleBack