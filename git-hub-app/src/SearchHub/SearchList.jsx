import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from '../actions/SearchInputActions'

class SearchList extends Component {

    renderUsers() {
        if (this.props.nothing === true) {
            return(
                <li className="list__item--empty">Cara, você não digitou nada ...</li>
            )
        } else {
            if (this.props.users.total_count > 0){
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
                    </React.Fragment>
                )
            } else if (this.props.users.total_count === 0) {
                return(
                    <li className="list__item--empty">Cara, voce tem certeza? Nao foi encontrado nenhum registro!</li>
                )
            }
        }
    }

    render() {
        return(
            <ul className="list__users">
                {this.renderUsers()}
            </ul>
        )
    }
}

const mapStateToProps = state => ({users: state.searchButton.users, nothing: state.searchButton.nothing})
const mapDispatchToPropas = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(SearchList)