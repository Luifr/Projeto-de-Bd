import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NoticiasDoEpisodio extends Component {
    render() {
        return (
            <div>
                   <p><b>Nome:</b> {this.props.noticia.titulo}</p>
                    <br/>
                    <p><b>Categoria:</b> {this.props.noticia.categoria}</p>
                    <br/>
                    <p><b>Hora de Exibição:</b> {this.props.noticia.horaExibicao}</p>
                    <br/>
                    <p><b>Código da Filmagem:</b> {this.props.noticia.codigoDaFilmagem}</p>
                    <br/>
                    <p><b>Número do Bloco:</b> {this.props.noticia.numeroBloco}</p>
            </div>
        )
    }
}

export default NoticiasDoEpisodio
