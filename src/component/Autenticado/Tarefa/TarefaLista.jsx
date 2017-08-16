import React, { Component } from 'react';

import Tarefa from '../controller/Tarefa';

class TarefaLista extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className='tarefa-lista'
            >
                { this.props.lista.map((tarefa, i) => {
                    return (
                        <div
                            key={ i }
                            style={ tarefa.concluida ? { opacity: 0.3 } : {} }
                        >
                            <input
                                type='checkbox'
                                checked={ tarefa.concluida ? 'checked' : '' }
                                onChange={ Tarefa.concluir.bind(Tarefa, i, this.props.atualizarLista) }
                            />
                            { tarefa.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default TarefaLista;
