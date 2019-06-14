import React, { Component } from 'react';
import NoticiasDoEpisodio from './NoticiasDoEpisodio';
import './FichaEpisodio.css';

export class FichaEpisodio extends Component {
    render() {    
        if(this.props.episodio == undefined) {  
            return (
                <div>
                    <p style= {EpisodeNotFound}>Não tem episódio nesta data :( </p>
                </div>
            )
        }
        else{
            
            return (
                <div>
                    <div className='main'>
                        <p><b>Data:</b> {this.props.episodio.data}</p>
                        <br/>
                        <p><b>Duração:</b> {this.props.episodio.duracao}</p>
                        <br/>
                        <p><b>Ibope:</b> {this.props.episodio.ibope}</p>
                        <br/>
                    </div>

                    <hr/>
                    <p className='noticias'><b>Notícias Exibidas</b></p>
                    <br/>
                    
                    <div className='flex-container'>
                        {this.props.episodio.noticiasExibidas.map( 
                            (noticia) =>  <NoticiasDoEpisodio noticia={noticia}/>
                        )}      
                    </div>
                                   

                </div>
            )     
        }
    }
}

const EpisodeNotFound = {
    color: '#ff0000',
    textAlign: 'center',
    padding: '0px 8px', 
    fontSize: 'small', 
    margin: '2px 0px'
}


export default FichaEpisodio
