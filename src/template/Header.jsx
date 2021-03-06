import React from 'react'
import github from "../asset/img/github-mark1.png"
import { Link } from "react-router-dom"

export default () => (
    <div className="header">
        <span className="header__name">SearchHub Ver. 1.1</span>
        <Link to="/github-app">
            <img src={github} alt="github-mark" className="header__logo"/>
        </Link>
    </div>
)