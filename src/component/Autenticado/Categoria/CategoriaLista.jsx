import React, { Component } from 'react';

import Categoria from '../../controller/Categoria';
import Usuario from '../../controller/Usuario';

class CategoriaLista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: Categoria.lista
        };
    }
    encerrarSessao() {
        Usuario.sair((retorno) => {
			if (retorno.sucesso) {
				this.props.atualizarToken(Usuario.token);
			}
		});
    }
    atualizarLista(lista) {
        this.setState({ lista: lista });
    }
    render() {
        return (
            <div>
                <button onClick={ this.encerrarSessao.bind(this) }>
                    Sair
                </button>
                { this.state.lista.map((categoria, i) => {
                    return (
                        <div key={ i }>
                            { categoria.titulo }
                        </div>
                    );
                }) }
                <button
                    onClick={ this.adicionarCategoria.bind(this, atualizarLista) }
                >
                    + Categoria
                </button>
            </div>
        );
    }
}

export default CategoriaLista;
