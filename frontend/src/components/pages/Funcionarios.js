import React from 'react';

export default class Funcionarios extends React.Component{
    state = {
        busca: '',
        atributo: 'nome'
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.buscarFuncionario(this.state.busca, this.state.atributo);
    }

    render(){
        return (
        <React.Fragment>
            <div style={{ padding: '10px', background: '#eee'}}>
                <p style={{ fontSize: 'medium'}}>Buscar um funcionário</p>
                <form onSubmit = {this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="busca"
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Buscar..."
                        onChange={this.onChange}
                    />
                    <select
                        name="atributo"
                        style={{flex: '2'}}
                        onChange={this.onChange}>
                        <option value="nome">Nome</option>
                        <option value="cpf">CPF</option>
                        <option value="cargo">Cargo</option>
                    </select>
                    <input
                        type="submit"
                        value="Buscar"
                        className="btn"
                        style={{flex: '1'}}
                    />
                    <input
                        type="button"
                        value="Mostrar todos"
                        className="btn"
                        style={{flex: '1', margin: '0px 1px'}}
                        onClick={this.props.mostrarTodos}
                    />
                </form>
            </div>
            <div style={{ fontSize: 'small', margin: '2px 0px', display: 'flex'}}>
                <span style={{ color: '#333', padding: '0px 8px', margin: '0px 1px', textAlign: 'center', background: '#c0c0c0', flex: '3'}}>Nome</span>
                <span style={{ color: '#333', padding: '0px 8px', margin: '0px 1px', textAlign: 'center', background: '#c0c0c0', flex: '1'}}>Cargo</span>
                <span style={{ color: '#333', padding: '0px 8px', margin: '0px 1px', textAlign: 'center', background: '#c0c0c0', flex: '1'}}>CPF</span>
            </div>
        </React.Fragment>
    )
    }
}
