import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import Funcionarios from './components/pages/Funcionarios';
import FuncionariosList from './components/FuncionariosList';
import FuncionarioInfo from './components/info/FuncionarioInfo';
import Noticias from './components/pages/Noticias';
import NoticiasList from './components/NoticiasList';
import Episodios from './components/pages/Episodios';
import uuid from 'uuid';
import axios from 'axios'
import FichaEpisodio from './components/FichaEpisodio';

class App extends React.Component {

  serverAddress = 'http://localhost:8000/';

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'aaa',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'bbb',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'ccc',
        completed: false
      }
    ],
    funcionarioSelecionado: '',
    funcionarios: [
      {
        cpf: 12345,
        nome: 'Joao Vitor Ponte',
        telefone: '99999-9991',
        cargo: 'Editor',
        salario: 11000
      },
      {
        cpf: 12346,
        nome: 'Joao Pedro Souza',
        telefone: '96599-9991',
        cargo: 'Produtor',
        salario: 12000
      },
      {
        cpf: 12347,
        nome: 'Gabriel Silva',
        telefone: '99829-9691',
        cargo: 'Redator',
        salario: 7100
      },
      {
        cpf: 12348,
        nome: 'Lucas Carvalho',
        telefone: '87699-4391',
        cargo: 'Agente',
        salario: 2200
      },
      {
        cpf: 12349,
        nome: 'Mariana Costa',
        telefone: '99313-7691',
        cargo: 'Editor',
        salario: 9300
      }
    ],
    noticias: [
      {
        titulo: 'Acidente na avenida',
        data: '10/06/2019',
        categoria: 'Cidade',
        descricao: 'Lorem ipsum dolem ir ahal tumpar',
        nomeAcont: 'Acidente na avenida',
        dataAcont: '10/06/2019',
        redator: 'Joao Carvalho',
        produtor: 'Pedro Cardoso'
      },
      {
        titulo: 'Selecao brasileira ganha jogo da Copa',
        data: '09/06/2019',
        categoria: 'Esportes',
        descricao: 'Lorem ipsum dolem ir ahal tumpar',
        nomeAcont: 'Vitória da seleção brasileira',
        dataAcont: '09/06/2019',
        redator: 'Paulo César',
        produtor: 'Roberto Silva'
      },
      {
        titulo: 'Vaza conversas de Sergio Moro',
        data: '10/06/2019',
        categoria: 'Política',
        descricao: 'Lorem ipsum dolem ir ahal tumpar',
        nomeAcont: 'Vazamento Moro',
        dataAcont: '09/06/2019',
        redator: 'Carla Menezes',
        produtor: 'Lucas Torres'
      },
      {
        titulo: 'Anitta grava novo clipe',
        data: '20/05/2019',
        categoria: 'Música',
        descricao: 'Lorem ipsum dolem ir ahal tumpar',
        nomeAcont: 'Clipe Anitta',
        dataAcont: '16/05/2019',
        redator: 'Karen Martins',
        produtor: 'Maria Nascimento'
      }
    ],
    episodio: [
      {
        data: '10/05/2017',
        duracao: 20,
        ibope: 10.1,
        noticiasExibidas: [
          {
            titulo: 'Roubo na casa da Ana',
            categoria: 'Crime',
            descricao: 'Ana FOI ROUBADA',
            horaExibicao: '20:21', 
            numeroBloco: 1,
            codigoDaFilmagem: '6/2'
          }
        ]
      },
      {
        data: '12/12/2012',
        duracao: 21,
        ibope: 13.1,
        noticiasExibidas: [
          {
            titulo: 'Roubo na casa do Lui',
            categoria: 'Crime Chato',
            descricao: 'Lui FOI ROUBADO',
            horaExibicao: '19:50', 
            numeroBloco: 3,
            codigoDaFilmagem: '23/6'
          },
          {
          titulo: 'Roubo na casa do Mariana',
          categoria: 'Crime Muuuito Chato',
          descricao: 'Mariana FOI ROUBADO',
          horaExibicao: '23:45', 
          numeroBloco: 2,
          codigoDaFilmagem: '22/2'
          },
          {
          titulo: 'Leite e vida',
          categoria: 'Comida',
          descricao: 'leite é bom',
          horaExibicao: '12:50', 
          numeroBloco: 4,
          codigoDaFilmagem: '22/1'
          }
        ]
      },

    ],
    episodioSelecionado: undefined
  }

  buscarFuncionario = (busca, atributo) => {
    console.log(busca, atributo);

  }

  mostrarTodosFunc = () => {
    axios.get(this.serverAddress + 'employees/').then( (response) => {
      this.setState({funcionarios: response.data});
    })
  }

  buscarNoticia = (busca, atributo) => {
    axios.get(this.serverAddress + 'news/' + atributo + '/' + busca).then( (response) => {
      this.setState({noticias: response});
    })
  }

  //ANA ---- IMPLEMENTAR --------------------------------
  buscarEpisodio = (busca) => {
    this.setState({episodioSelecionado:undefined});
    this.state.episodio.map( episodio => {
      if(episodio.data === busca){
        this.setState({episodioSelecionado:episodio});
      }
      return episodio;
    } );   
  }

  mostrarTodosEps = () => {
    console.log('mostrando noticias');
    
  }

  selecionarEps = (data) =>{
    console.log(data);
  }

  //FIM ANA -------------------------------------------

  mostrarTodasNot = () => {
    axios.get(this.serverAddress + 'news/').then( (response) => {
      this.setState({noticias: response});
    })
  }

  criarRoute = () => {
    return this.state.funcionarios.map((funcionario) => (
      <Route path={"/funcionarios/" + funcionario.cpf} render={props => (
        <FuncionarioInfo funcionario={funcionario}/>
      )}/>
    ));
  }

  selecionarFunc = (cpf) => {
    this.setState({ todos: this.state.funcionarios.map((funcionario) => {
      if(funcionario.cpf === cpf) {
        this.state.funcionarioSelecionado = funcionario;
      }
      return funcionario;
    }) });
  }

  render(){
     return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/funcionarios" render={props => (
              <React.Fragment>
                <Funcionarios buscarFuncionario={this.buscarFuncionario} mostrarTodos={this.mostrarTodosFunc}/>
                <FuncionariosList funcionarios={this.state.funcionarios} onClick={this.selecionarFunc}/>
              </React.Fragment>
            )}/>

            <Route exact path="/episodios" render={props => (
              <React.Fragment>
                <Episodios buscarEpisodio={this.buscarEpisodio} mostrarTodos={this.mostrarTodosEps}/>
                <FichaEpisodio episodio={this.state.episodioSelecionado}/>
              </React.Fragment>
            )}/>

            <Route exact path="/noticias" render={props => (
              <React.Fragment>
                <Noticias buscarNoticia={this.buscarNoticia} mostrarTodos={this.mostrarTodasNot}/>
                <NoticiasList noticias={this.state.noticias}/>
              </React.Fragment>
            )}/>

            <Route exact path="/funcionarios/info" render={props => (
              <React.Fragment>
                <FuncionarioInfo funcionario={this.state.funcionarioSelecionado}/>
              </React.Fragment>
            )}/>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
