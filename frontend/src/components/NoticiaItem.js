import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class NoticiaItem extends Component {
    render() {
        const { titulo, categoria, data } = this.props.noticia;
        return (
            <div style={{ fontSize: 'medium', margin: '2px 0px', display: 'flex', borderLeft: '6px solid red', background: '#eeecea'}}>
            <Link to="/noticias/info"
                    style={{
                        padding: '0px 8px',
                        margin: '0px 1px',
                        textAlign: 'left',
                        flex: '3',
                        textDecoration: 'underline'
                    }}
                    onClick={this.props.onClick.bind(this, titulo, data)}>{titulo}</Link>
                <span style={{  padding: '0px 8px', margin: '0px 1px', textAlign: 'center', flex: '1'}}>{categoria}</span>
                <span style={{  padding: '0px 8px', margin: '0px 1px', textAlign: 'center', flex: '1'}}>{data}</span>
            </div>
        )
    }
}

export default NoticiaItem;
