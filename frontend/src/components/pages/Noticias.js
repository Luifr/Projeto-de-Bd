import React from 'react';

export default class Noticias extends React.Component{
    state = {
        busca: '',
        atributo: 'name'
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.buscarNoticia(this.state.busca, this.state.atributo);
    }

    render(){
        return (
        <React.Fragment>
            <div style={{ padding: '10px', background: '#eee'}}>
                <p style={{ fontSize: 'medium'}}>Buscar uma notícia</p>
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
                        <option value="name">Título</option>
                        <option value="date">Data</option>
                        <option value="category">Categoria</option>
                    </select>
                    <input
                        type="submit"
                        value="Buscar"
                        className="btn"
                        style={{flex: '1'}}
                    />
                    <input
                        type="button"
                        value="Mostrar todas"
                        className="btn"
                        style={{flex: '1', margin: '0px 1px'}}
                        onClick={this.props.mostrarTodos}
                    />
                </form>
            </div>
            <div style={{ fontSize: 'small', margin: '2px 0px', display: 'flex'}}>
                <span style={{ color: '#333', padding: '0px 8px', margin: '0px 1px', textAlign: 'center', background: '#c0c0c0', flex: '3'}}>Título</span>
                <span style={{ color: '#333', padding: '0px 8px', margin: '0px 1px', textAlign: 'center', background: '#c0c0c0', flex: '1'}}>Categoria</span>
                <span style={{ color: '#333', padding: '0px 8px', margin: '0px 1px', textAlign: 'center', background: '#c0c0c0', flex: '1'}}>Data</span>
            </div>
        </React.Fragment>
    )        
    }   
}

