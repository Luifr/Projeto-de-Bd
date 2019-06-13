import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class NoticiaItem extends Component {
    render() {
        const { titulo, categoria, data } = this.props.noticia;
        return (
            <div style={{ fontSize: 'medium', margin: '2px 0px', display: 'flex'}}>
                <span style={{  padding: '0px 8px', margin: '0px 1px', textAlign: 'left', flex: '3'}}>{titulo}</span>
                <span style={{  padding: '0px 8px', margin: '0px 1px', textAlign: 'center', flex: '1'}}>{categoria}</span>
                <Link to={"/noticias/" + titulo + data}style={{  padding: '0px 8px', margin: '0px 1px', textAlign: 'center', flex: '1'}}>{data}</Link>
            </div>
        )
    }
}

export default NoticiaItem;
