import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Inserir extends Component {
    render() {
        return (
            <div style={{padding: '6px', textAlign: 'center', background: '#eee'}}>
                <h3>Inserção no banco de dados</h3>
                <form onSubmit={this.onSubmit}>
                    <span>Adicionar </span>
                    <Link to="/inserir/funcionario" style={{textDecoration: 'underline'}}>funcionário</Link>
                    <span> ou </span> 
                    <Link to="/inserir/noticia" style={{textDecoration: 'underline'}}>notícia</Link>
                </form>
            </div>
        )
    }
}

export default Inserir
