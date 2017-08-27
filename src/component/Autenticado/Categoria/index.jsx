import Categoria from '../../../controller/CategoriaController';
import Usuario from '../../../controller/Usuario';

import Lista from './Lista';
import Entrada from './Entrada';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: Categoria.lista
        };
        console.log('this.state', this.state);
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
                <button
                    onClick={ this.encerrarSessao.bind(this) }
                >
                    Sair
                </button>
                <Lista
                    lista={ this.state.lista }
                />
                <Entrada
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
            </div>
        );
    }
}

export default Index;
