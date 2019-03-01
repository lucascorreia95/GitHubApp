import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newpage, singleuser } from '../actions/SearchUserActions'
import { Link } from "react-router-dom"

class SearchUser extends Component {
    
    componentWillUpdate() {
        this.props.newpage(this.props.page)
    }

    componentWillMount() {
        this.props.newpage(this.props.page)
    }

    render() {
        const list = this.props.users || []
        const renderList = list.map(user => (
            <li className="list__item" key={user.id}>
                <Link to="/github-app/user" onClick = {() => this.props.singleuser(user.login)}>
                    <img className="list__img" src={user.avatar_url} alt=""/>
                    <span className="list__link">{user.login}</span>
                    <span className="list__type"> Tipo: {user.type}</span>
                    <span  className="list__score">Pontuacao: {user.score}</span>
                </Link>
            </li>
        ))
        return (
            <React.Fragment>
                <li className="list__item--count" key="count">Foram encontrados {this.props.total_count} registro para {this.props.description}!</li>
                {renderList}
                <li className="list__item--compleate" key="compleate1"><div className="list__item--div"></div></li>
                <li className="list__item--compleate" key="compleate2"><div className="list__item--div"></div></li>
                <li className="list__item--compleate" key="compleate3"><div className="list__item--div"></div></li>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.searchButton.users,
    page: state.searchUser.page,
    total_count: state.searchButton.total_count,
    description: state.searchInput.description
})
const mapDispatchToProps = dispatch => bindActionCreators({newpage, singleuser}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchUser)