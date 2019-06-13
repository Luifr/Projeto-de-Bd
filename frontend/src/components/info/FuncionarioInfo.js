import React, { Component } from 'react'

export class FuncionarioInfo extends Component {
    render() {
        return (
            <div>
                <p>{this.props.funcionario.nome}</p>
            </div>
        )
    }
}

export default FuncionarioInfo
