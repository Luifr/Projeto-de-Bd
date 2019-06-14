import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Banco de Dados Produtora</h1>
            <Link style={linkStyle} to="/funcionarios"> Funcionários</Link> | 
            <Link style={linkStyle} to="/noticias"> Notícias</Link> |
            <Link style={linkStyle} to="/episodio"> Episodios</Link>
        </header>
    )
}

export default Header;

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}