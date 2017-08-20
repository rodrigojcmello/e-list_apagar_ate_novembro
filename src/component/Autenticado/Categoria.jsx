import React, { Component } from 'react';
import Usuario from '../../controller/Usuario';

class Categoria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: [
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' }
            ]
        };
    }
    encerrarSessao() {
        Usuario.sair((retorno) => {
			if (retorno.sucesso) {
				this.props.atualizarToken(Usuario.token);
			}
		});
    }
    render() {
        return (
            <div>
                <button onClick={ this.encerrarSessao.bind(this) }>
                    Sair
                </button>
                { this.state.categoria.map((item, i) => {
                    return (
                        <div key={ i }>
                            { item.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Categoria;
