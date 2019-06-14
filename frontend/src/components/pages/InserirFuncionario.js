import React, { Component } from 'react'

export class InserirFuncionario extends Component {
    state = {
        nome: '',
        cpf: '',
        telefone: '',
        cargo: '',
        tipo: '',
        salario: '',
        salarioExtra: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
    
    render() {
        return (
            <div style={{ margin:'8px' }}>
                <h4 style={{ marginBottom: '6px'}}>Adicionar funcionário</h4>
                <form onSubmit={this.onSubmit} style={formStyle}>
                    <input
                        type="text"
                        name="cpf"
                        style={{ flex: '10', padding: '5px', margin:'' }}
                        placeholder="CPF (xxx.xxx.xxx-xx)"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="nome"
                        style={{ flex: '20', padding: '5px', margin:'' }}
                        placeholder="Nome"
                        onChange={this.onChange}
                    />
                    <br/>
                    <input
                        type="number"
                        name="telefone"
                        style={{ flex: '10', padding: '5px', margin:'' }}
                        placeholder="Telefone (xxxx-xxxx ou xxxxx-xxxx)"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="cargo"
                        style={{ flex: '10', padding: '5px', margin:'' }}
                        placeholder="Cargo"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="tipo"
                        style={{ flex: '10', padding: '5px', margin:'' }}
                        placeholder="Tipo (para Agentes)"
                        onChange={this.onChange}
                    />
                    <input
                        type="number"
                        name="salario"
                        style={{ flex: '10', padding: '5px', margin:'' }}
                        placeholder="Salário"
                        onChange={this.onChange}
                    />
                    <input
                        type="number"
                        name="salarioExtra"
                        style={{ flex: '10', padding: '5px', margin:'' }}
                        placeholder="Salário Extra (para Agentes)"
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Adicionar"
                        className="btn"
                        style={{flex: '1'}}
                    />
                </form>
            </div>
        )
    }
}

const formStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',
    gridGap: '20px'
}

export default InserirFuncionario
