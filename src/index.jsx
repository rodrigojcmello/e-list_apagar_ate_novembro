import React, { Component } from 'react';
import { render } from 'react-dom';
import store from 'store';

import Tarefa from './controller/Tarefa';

import TarefaLista from './component/TarefaLista';
import TarefaEntrada from './component/TarefaEntrada';

if (process.env.NODE_ENV == 'production') {
    console.log = () => {};
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: Tarefa.lista
        };
    }
    atualizarLista(lista) {
        this.setState({
            lista: lista
        });
    }
    render() {
        return (
            <div>
                <TarefaLista
                    lista={ this.state.lista }
                />
                <TarefaEntrada
                    adicionarTarefa={ Tarefa.adicionar }
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));
