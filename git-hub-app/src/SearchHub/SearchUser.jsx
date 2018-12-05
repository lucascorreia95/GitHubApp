import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchUser extends Component {
    render() {   
        const list = this.props.users.items || []
        const renderList = list.map(user => (
            <li className="list__item" key={user.id}>
                <a href={user.html_url}><img className="list__img" src={user.avatar_url} alt=""/></a>
                <a className="list__link" href={user.html_url}>{user.login}</a>
                <span className="list__type"> Tipo: {user.type}</span>
                <span  className="list__score">Pontuacao: {user.score}</span>
            </li>
        ))
        return (
            <React.Fragment>
                <li className="list__item--count">Foram encontrados {this.props.users.total_count} registro!</li>
                {renderList}
                <li className="list__item--compleate"></li>
                <li className="list__item--compleate"></li>
                <li className="list__item--compleate"></li>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({users: state.searchButton.users, nothing: state.searchButton.nothing})
export default connect(mapStateToProps, null)(SearchUser)