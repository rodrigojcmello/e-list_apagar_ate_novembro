import React, { Component } from 'react';
import { render } from 'react-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import store from 'store';

import Tarefa from '../../../controller/Tarefa';

import TarefaLista from './TarefaLista';
import TarefaEntrada from './TarefaEntrada';
import TarefaArquivar from './TarefaArquivar';

if (process.env.NODE_ENV == 'production') {
    console.log = () => {};
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: Tarefa.lista,
            name: 'Eric',
            unreadCount: 2
        };
    }
    atualizarLista(lista) {
        this.setState({
            lista: lista
        });
    }
    render() {
        const { name, unreadCount } = this.state;
        return (
            <div>
                <FormattedMessage
                    id='welcome'
                    defaultMessage={ `Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }` }
                    values={{name: <b>{name}</b>, unreadCount}}
                />
                <TarefaArquivar
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
                <TarefaLista
                    lista={ this.state.lista }
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
                <TarefaEntrada
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
            </div>
        );
    }
}

render(
    <IntlProvider locale='en'>
        <App />
    </IntlProvider>,
    document.getElementById('app')
);
