import React from 'react'
import github from "../asset/img/github-mark1.png"

export default () => (
    <div className="header">
        <span className="header__name">SearchHub Ver. 1.0</span>
        <a href="https://github.com/">
            <img src={github} alt="github-mark" className="header__logo"/>
        </a>
    </div>
)