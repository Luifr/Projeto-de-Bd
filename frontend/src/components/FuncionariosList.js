import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FuncionarioItem from './FuncionarioItem';

class FuncionariosList extends React.Component {
    render(){
        return this.props.funcionarios.map((funcionario) => (
            <FuncionarioItem 
                key={funcionario.cpf} 
                funcionario={funcionario} 
                onClick={this.props.onClick}/>
        )); 
    }
}

export default FuncionariosList;
