import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NoticiasDoEpisodio extends Component {
    render() {
        return (
            <div>
                   <Link to="noticias/info"
                    onClick={this.props.onClick.bind(this, this.props.noticia.titulo, this.props.noticia.data)}><p><b>Nome:</b> {this.props.noticia.titulo}</p></Link>
                    <br/>
                    <p><b>Data:</b> {this.props.noticia.data}</p>
                    <br/>
                    <p><b>Categoria:</b> {this.props.noticia.categoria}</p>
                    <br/>
                    <p><b>Hora de Exibição:</b> {this.props.noticia.hora}</p>
                    <br/>
                    <p><b>Código da Filmagem:</b> {this.props.noticia.filmbruta + " / " + this.props.noticia.nroedic}</p>
                    <br/>
                    <p><b>Número do Bloco:</b> {this.props.noticia.nroBloco}</p>

            </div>
        )
    }
}

export default NoticiasDoEpisodio
