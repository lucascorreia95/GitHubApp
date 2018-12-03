import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../actions/SearchInputActions'

class SearchList extends Component {

    renderUsers() {
        const list = this.props.users.items || []
        console.log(list)
        return list.map(user => (
            <li className="list__item" key={user.id}>
                <img className="list__img" src={user.avatar_url} alt=""/>
                <a className="list__link" href={user.html_url}>{user.login}</a>
                <span className="list__type"> Tipo: {user.type}</span>
                <span  className="list__score">Pontuacao: {user.score}</span>
            </li>
        ))
    }

    render() {
        return(
            <ul className="list__users">
                {this.renderUsers()}
            </ul>
        )
    }
}

const mapStateToProps = state => ({users: state.searchButton.users})
const mapDispatchToPropas = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(SearchList)