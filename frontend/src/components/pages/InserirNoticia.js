import React, { Component } from 'react'

export class InserirNoticia extends Component {
    state = {
        titulo: '',
        data: '',
        descricao: '',
        redator: '',
        produtor: '',
        nomeAcont: '',
        dataAcont: ''
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
                <h4 style={{ marginBottom: '6px'}}>Adicionar notícia</h4>
                <form onSubmit={this.onSubmit} style={formStyle}>
                    <input
                        type="text"
                        name="titulo"
                        style={{ padding: '5px', margin:'' }}
                        placeholder="Título"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="data"
                        style={{ padding: '5px', margin:'' }}
                        placeholder="Data (DD/MM/YYYY)"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="descricao"
                        style={{ padding: '5px', margin:'' }}
                        placeholder="Descrição"
                        onChange={this.onChange}
                    /><br/>
                    <input
                        type="number"
                        name="redator"
                        style={{ padding: '5px', margin:'' }}
                        placeholder="Redator (CPF)"
                        onChange={this.onChange}
                    />
                    <input
                        type="number"
                        name="produtor"
                        style={{ padding: '5px', margin:'' }}
                        placeholder="Produtor (CPF)"
                        onChange={this.onChange}
                    /><br/>
                    <input
                        type="text"
                        name="nomeAcont"
                        style={{ padding: '5px', margin:'' }}
                        placeholder="Nome do Acontecimento"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        name="dataAcont"
                        style={{ padding: '5px', margin:'' }}
                        placeholder="Data do Acontecimento (DD/MM/YYYY)"
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
    gridTemplateColumns: '2fr 1fr 1fr',
    gridGap: '20px'
}

export default InserirNoticia
