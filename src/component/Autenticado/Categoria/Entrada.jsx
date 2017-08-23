import React, { Component } from 'react';

import Categoria from '../../../controller/Categoria';

class Entrada extends Component {
    constructor(props) {
        super(props);
    }
    enviar(event) {
        event.preventDefault();
        if (this.entrada.value) {
            Categoria.adicionar(
                { titulo: this.entrada.value },
                this.props.atualizarLista
            );
            this.entrada.value = '';
        }
    }
    render() {
        return (
            <form
                className='categoria-entrada'
                onSubmit={ this.enviar.bind(this) }
            >
                <input
                    type='text'
                    placeholder='O que você quer?'
                    ref={ el => this.entrada = el }
                />
            </form>
        );
    }
}

export default Entrada;
