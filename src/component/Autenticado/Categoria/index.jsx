import { Link } from 'react-router-dom';

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
    }
    atualizarLista(lista) {
        this.setState({ lista: lista });
    }
    render() {
        return (
            <div>
                <button onClick={ () => Usuario.sair(this.props.atualizarToken, this.props.atualizarTransicao) } >
                    Sair
                </button>
                <Link to='/Entrar'>Sair Via Link</Link>
                <Lista
                    lista={ this.state.lista }
                    atualizarLista={ this.atualizarLista.bind(this) }
                    atualizarTransicao={ this.props.atualizarTransicao }
                />
                <Entrada
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
            </div>
        );
    }
}

export default Index;
