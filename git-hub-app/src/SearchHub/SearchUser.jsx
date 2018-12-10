import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newpage } from '../actions/SearchUserActions'

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
                <a href={user.html_url}><img className="list__img" src={user.avatar_url} alt=""/></a>
                <a className="list__link" href={user.html_url}>{user.login}</a>
                <span className="list__type"> Tipo: {user.type}</span>
                <span  className="list__score">Pontuacao: {user.score}</span>
            </li>
        ))
        console.log("render dos usuarios")
        return (
            <React.Fragment>
                <li className="list__item--count">Foram encontrados {this.props.total_count} registro!</li>
                {renderList}
                <li className="list__item--compleate"></li>
                <li className="list__item--compleate"></li>
                <li className="list__item--compleate"></li>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: state.searchButton.users,
    page: state.searchUser.page,
    total_count: state.searchButton.total_count
})
const mapDispatchToProps = dispatch => bindActionCreators({newpage}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SearchUser)