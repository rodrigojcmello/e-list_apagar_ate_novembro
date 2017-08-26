import React, { Component } from 'react';

import Tarefa from '../../../controller/Tarefa';

class Entrada extends Component {
    constructor(props) {
        super(props);
    }
    enviarTarefa(event) {
        event.preventDefault();

        if (this.entrada.value) {
            Tarefa.adicionar(
                { titulo: this.entrada.value },
                this.props.atualizarLista
            );
            this.entrada.value = '';
            // this.entrada.blur();
        }
    }
    render() {
        return (
            <div
                className='tarefa-entrada'
            >
                <form
                    onSubmit={ this.enviarTarefa.bind(this) }
                >
                    <input
                        type='text'
                        placeholder='O que você quer?'
                        ref={ el => this.entrada = el }
                    />
                </form>
            </div>
        );
    }
}

export default Entrada;
