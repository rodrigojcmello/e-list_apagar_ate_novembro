const history = require('history').createHashHistory();

import Categoria from '../../../controller/CategoriaController';

class Lista extends Component {
    constructor(props) {
        super(props);
    }
    abrir(index, titulo) {
        titulo = titulo.replace(' ', '-');
        history.push(`/Autenticado/Categoria/${ index }/${ titulo }`);
    }
    apagar(index, titulo) {
        if (confirm(`Deseja apagar a categoria "${ titulo }"?`)) {
            Categoria.apagar(index, this.props.atualizarLista);
        }
    }
    render() {
        return (
            <div>
                { this.props.lista.map((categoria, index) => {
                    return (
                        <div key={ index }>
                            <span onClick={ this.abrir.bind(this, index, categoria.titulo) } >
                                { categoria.titulo }
                            </span>
                            <button type='button' onClick={ this.apagar.bind(this, index, categoria.titulo) } >
                                apagar
                            </button>
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Lista;
