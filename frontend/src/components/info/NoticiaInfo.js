import React, { Component } from 'react'

export class NoticiaInfo extends Component {
    render() {
        return (
            <div>
                <h3 style={{padding: '6px', textAlign: 'center', background: '#eee'}}>Informações da Notícia</h3>
                <div style={{margin:'12px'}}>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Título: </span>
                        <span>{this.props.noticia.titulo}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Data: </span>
                        <span>{this.props.noticia.data}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Descrição: </span>
                        <span>{this.props.noticia.descricao}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Acontecimento: </span>
                        <span>{this.props.noticia.nomeAcont + " (" + this.props.noticia.dataAcont + ")"}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Funcionários responsáveis: </span>
                        <span>{}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default NoticiaInfo
