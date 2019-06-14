import React, { Component } from 'react'

export class Episodios extends Component {

    state = {
        busca: '',
        data: '00/00/0000',
        epSelecionado: 'Episódio'
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('pesquisa:', this.state.busca);
        this.props.buscarEpisodio(this.state.busca);
        this.setState({epSelecionado:("Episódio "+this.state.busca)});
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    render() {
        return (
        <React.Fragment>
            <div style={{ padding: '10px', background: '#eee'}}>
                <p style={{ fontSize: 'medium'}}>Buscar um episódio</p>
                <form onSubmit = {this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="busca"
                        style={{ flex: '10', padding: '5px' }}
                        placeholder="Buscar..."
                        onChange={this.onChange}
                    />
                    <select
                        name="data"
                        style={{flex: '2'}}
                        onChange={this.onChange}>
                        <option value="name">Data</option>
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
                <span style={{ color: '#333', padding: '0px 8px', margin: '0px 1px', textAlign: 'center', background: '#c0c0c0', flex: '1'}}> {this.state.epSelecionado} </span>            
            </div>
        </React.Fragment>
        )
    }
}

export default Episodios
