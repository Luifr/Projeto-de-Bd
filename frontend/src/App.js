import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import "./App.css";
import Funcionarios from "./components/pages/Funcionarios";
import FuncionariosList from "./components/FuncionariosList";
import FuncionarioInfo from "./components/info/FuncionarioInfo";
import Noticias from "./components/pages/Noticias";
import NoticiasList from "./components/NoticiasList";
import NoticiaInfo from "./components/info/NoticiaInfo";
import Inserir from "./components/pages/Inserir";
import InserirFuncionario from "./components/pages/InserirFuncionario";
import InserirNoticia from "./components/pages/InserirNoticia";
import Episodios from "./components/pages/Episodios";
import uuid from "uuid";
import axios from "axios";
import FichaEpisodio from "./components/FichaEpisodio";

class App extends React.Component {
  serverAddress = "http://localhost:8000/";

  state = {
    funcionarioSelecionado: "",
    noticiaSelecionada: "",
    funcionarios: [
    ],
    noticias: [

    ],
    episodio: [

    ],
    episodioSelecionado: undefined
  };

  buscarFuncionario = (busca, atributo) => {
    let params;
    if (atributo === "name") {
      params = {
        name: busca
      };
    }
    if (atributo === "cpf") {
      params = {
        cpf: busca
      };
    }
    if (atributo === "position") {
      params = {
        position: busca
      };
    }
    axios
      .get(this.serverAddress + "employees/", {
        params
      })
      .then(response => {
        this.setState({
          funcionarios: response.data
        });
      });
  };

  mostrarTodosFunc = () => {
    axios.get(this.serverAddress + "employees/").then(response => {
      this.setState({
        funcionarios: response.data
      });
    });
  };

  buscarNoticia = (busca, atributo) => {
    console.log("buscar Noticia");
    let params;
    if (atributo === "name") {
      params = {
        name: busca
      };
    }
    if (atributo === "data") {
      params = {
        data: busca
      };
    }
    if (atributo === "category") {
      params = {
        category: busca
      };
    }
    axios
      .get(this.serverAddress + "news/", {
        params
      })
      .then(response => {
        this.setState({
          noticias: response.data
        });
      });
  };

  //ANA ---- IMPLEMENTAR --------------------------------
  buscarEpisodio = busca => {
    axios.get(this.serverAddress + 'episodes',{params:{date:busca}}).then((result) => {
      console.log(result.data);
      if (result.lenght > 0){
        this.state.episodio.data = result.data[0].data;
        this.state.episodio.duracao = result.data[0].duracao;
        this.state.episodio.ibope = "";
        this.state.episodio.noticiasExibidas = result.data;
        this.setState({
          episodioSelecionado: this.state.episodio
        });
      }

    });



  };

  mostrarTodosEps = () => {
    console.log("mostrando noticias");
  };

  selecionarEps = data => {
    console.log(data);
  };

  //FIM ANA -------------------------------------------

  mostrarTodasNot = () => {
    axios.get(this.serverAddress + "news/").then(response => {
      this.setState({
        noticias: response.data
      });
    });
  };

  selecionarFunc = (cpf) => {
    axios.get(this.serverAddress + "news/", {params: {cpf}}).then(response => {
      this.setState({
            todos: this.state.funcionarios.map(funcionario => {
              if (funcionario.cpf === cpf) {
                funcionario.noticias = response.data;
                console.log(funcionario);
                this.state.funcionarioSelecionado = funcionario;
              }
              return funcionario;
            })
      });
    })

  };

  selecionarNot = (titulo, data) => {
      this.setState({
        todos: this.state.noticias.map(noticia => {
          if (noticia.titulo === titulo && noticia.data === data) {
            //noticia.funcionarios = response.data;
            console.log(noticia);
            this.state.noticiaSelecionada = noticia;
          }
          return noticia;
        })
      });
  };

  inserirFuncionario = funcionario => {
    console.log(funcionario);
    axios
      .post(this.serverAddress + "employees/", {
        cpf: funcionario.cpf,
        name: funcionario.nome,
        telephone: funcionario.telefone,
        position: funcionario.cargo,
        salary: funcionario.salario
      })
      .then(response => {
        console.log(response);
      });
  };

  inserirNoticia = noticia => {
    axios
      .post(this.serverAddress + "news/", {
        titulo: noticia.titulo,
        data: noticia.data,
        categoria: noticia.categoria,
        descricao: noticia.descricao,
        nomeAcont: noticia.nomeAcont,
        dataAcont: noticia.dataAcont,
        redator: noticia.redator,
        produtor: noticia.produtor
      })
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/funcionarios"
              render={props => (
                <React.Fragment>
                  <Funcionarios
                    buscarFuncionario={this.buscarFuncionario}
                    mostrarTodos={this.mostrarTodosFunc}
                  />{" "}
                  <FuncionariosList
                    funcionarios={this.state.funcionarios}
                    onClick={this.selecionarFunc}
                  />{" "}
                </React.Fragment>
              )}
            />

            <Route
              exact
              path="/episodios"
              render={props => (
                <React.Fragment>
                  <Episodios
                    buscarEpisodio={this.buscarEpisodio}
                    mostrarTodos={this.mostrarTodosEps}
                  />{" "}
                  <FichaEpisodio episodio={this.state.episodioSelecionado} onClick={this.selecionarNot}/>{" "}
                </React.Fragment>
              )}
            />

            <Route
              exact
              path="/noticias"
              render={props => (
                <React.Fragment>
                  <Noticias
                    buscarNoticia={this.buscarNoticia}
                    mostrarTodos={this.mostrarTodasNot}
                  />{" "}
                  <NoticiasList
                    noticias={this.state.noticias}
                    onClick={this.selecionarNot}
                  />{" "}
                </React.Fragment>
              )}
            />

            <Route
              exact
              path="/funcionarios/info"
              render={props => (
                <React.Fragment>
                  <FuncionarioInfo
                    funcionario={this.state.funcionarioSelecionado}
                  />{" "}
                </React.Fragment>
              )}
            />

            <Route exact path="/noticias/info" render={props => (
                <React.Fragment>
                  <NoticiaInfo noticia={this.state.noticiaSelecionada} />{" "}
                </React.Fragment>
              )}
            />

            <Route path="/inserir" render={props => <Inserir />} />

            <Route
              path="/inserir/funcionario"
              render={props => (
                <InserirFuncionario onSubmit={this.inserirFuncionario} />
              )}
            />

            <Route
              path="/inserir/noticia"
              render={props => (
                <InserirNoticia onSubmit={this.inserirNoticia} />
              )}
            />
          </div>{" "}
        </div>{" "}
      </Router>
    );
  }
}

export default App;
