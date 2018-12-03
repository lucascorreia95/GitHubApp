import React from 'react'
import Header from '../template/Header'
import Search from '../template/Search'
import Footer from '../template/Footer'
import List from '../template/List'

export default props => (
    <div className="container">
        <Header />
        <Search />
        <List />
        <Footer />
    </div>
)