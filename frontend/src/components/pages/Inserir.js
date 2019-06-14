import React, { Component } from 'react'

export class Inserir extends Component {

    render() {
        return (
            <div style={{padding: '6px', textAlign: 'center', background: '#eee'}}>
                <h3>Inserção no banco de dados</h3>
                <form onSubmit={this.onSubmit}>
                    <span>Adicionar </span>
                    <select name="tabela" onChange={this.onChange}>
                        <option value="employees">Funcionário</option>
                        <option value="news">Notícia</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Inserir
