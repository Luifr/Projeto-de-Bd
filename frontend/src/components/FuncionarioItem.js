import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


export class FuncionarioItem extends Component {
    render() {
        const { cpf, nome, cargo } = this.props.funcionario;        return (
            <div style={{ fontSize: 'medium', margin: '2px 0px', display: 'flex'}} key={cpf}>
                <Link to="/funcionarios/info" 
                    style={{  
                        padding: '0px 8px', 
                        margin: '0px 1px', 
                        textAlign: 'center', 
                        flex: '1', 
                        textDecoration: 'underline'
                    }}
                    onClick={this.props.onClick.bind(this, cpf)}>{cpf}</Link>
                <span style={{  padding: '0px 8px', margin: '0px 1px', textAlign: 'left', flex: '3'}}>{nome}</span>
                <span style={{  padding: '0px 8px', margin: '0px 1px', textAlign: 'center', flex: '1'}}>{cargo}</span>
            </div>
        )
    }
}

export default FuncionarioItem;