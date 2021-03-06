import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppIndex from '../App'
import SingleUser from '../singleuser/SingleUser'
import Header from '../template/Header'
import Footer from '../template/Footer'

export default () => (
    <Router>
        <div className="container">
            <Header />
            <Route exact path="/github-app" component={AppIndex} />
            <Route path="/github-app/user" component={SingleUser} />
            <Footer />
        </div>
    </Router>
)