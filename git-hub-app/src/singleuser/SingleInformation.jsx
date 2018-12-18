import React, { Component } from 'react'
import { connect } from 'react-redux'

class SingleImage extends Component {
    
    getDate(date){
        const newdate = date.substr(0, 10)
        return newdate
    }

    render() {
        return(
            <div className="single-user__info">
                {this.props.user.name && <div className="single-user__name"><span>Nome: </span><strong>{this.props.user.name}</strong></div>}
                {this.props.user.login && <div className="single-user__name"><span>Login: </span><strong>{this.props.user.login}</strong></div>}
                {this.props.user.company && <div className="single-user__name"><span>Empresa: </span><strong>{this.props.user.company}</strong></div>}
                {this.props.user.location && <div className="single-user__name"><span>Localização: </span><strong>{this.props.user.location}</strong></div>}
                {this.props.user.email && <div className="single-user__name"><span>E-mail: </span><strong>{this.props.user.email}</strong></div>}
                {this.props.user.bio && <div className="single-user__name"><span>Bio: </span><strong>{this.props.user.bio}</strong></div>}
                {this.props.user.html_url && <div className="single-user__name"><span>Github: </span><a href={this.props.user.html_url}>{this.props.user.html_url}</a></div>}
                {this.props.user.blog && <div className="single-user__name"><span>Blog: </span><a href={this.props.user.blog}>{this.props.user.blog}</a></div>}
                {this.props.user.created_at && <div className="single-user__name"><span>Criado em: </span><strong>{this.getDate(this.props.user.created_at)}</strong></div>}
                {this.props.user.updated_at && <div className="single-user__name"><span>Atualizado em: </span><strong>{this.getDate(this.props.user.updated_at)}</strong></div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({user: state.singleUser.user})

export default connect(mapStateToProps, null)(SingleImage)