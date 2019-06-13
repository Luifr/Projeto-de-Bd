import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FuncionarioItem from './FuncionarioItem';

class FuncionariosList extends React.Component {
    render(){
        return this.props.funcionarios.map((funcionario) => (
            <React.Fragment key={funcionario.cpf}>
                <FuncionarioItem funcionario={funcionario} onClick={this.props.onClick}/>
            </React.Fragment>
        )); 
    }
}

export default FuncionariosList;
