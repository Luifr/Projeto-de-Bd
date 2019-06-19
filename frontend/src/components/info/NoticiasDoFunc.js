import React, { Component } from 'react'

export class NoticiasDoFunc extends Component {
    render() {
        console.log(this.props.noticia);
        return (
            <p>{this.props.noticia.titulo}</p>
        )
    }
}

export default NoticiasDoFunc
