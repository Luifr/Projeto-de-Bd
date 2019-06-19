import React, { Component } from 'react'
import NoticiasDoFunc from './NoticiasDoFunc'

export class FuncionarioInfo extends Component {
    render() {
        console.log(this.props.funcionario.noticias);
        return (
            <div>
                <h3 style={{padding: '6px', textAlign: 'center', background: '#eee'}}>Ficha do funcionário</h3>
                <div style={{margin:'12px'}}>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Nome: </span>
                        <span>{this.props.funcionario.nome}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>CPF: </span>
                        <span>{this.props.funcionario.cpf}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Telefone: </span>
                        <span>{this.props.funcionario.telefone}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Cargo: </span>
                        <span>{this.props.funcionario.cargo}</span>
                    </p>
                    <p>
                        <span style={{fontWeight: 'bold'}}>Salário: </span>R$
                        <span>{this.props.funcionario.salario}</span>,00
                    </p>
                </div>
            </div>
        )
    }
}

export default FuncionarioInfo
