import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NoticiaItem from './NoticiaItem';
import PropTypes from 'prop-types';

class NoticiasList extends React.Component {
    render(){
        return this.props.noticias.map((noticia) => (
            <NoticiaItem 
                key={noticia.titulo + noticia.data} 
                noticia={noticia}
                onClick={this.props.onClick}/>
        )); 
    }
}

export default NoticiasList;
