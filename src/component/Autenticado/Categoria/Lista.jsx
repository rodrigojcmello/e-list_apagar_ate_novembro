const history = require('history').createHashHistory();

import Categoria from '../../../controller/CategoriaController';

class Lista extends Component {
    constructor(props) {
        super(props);
    }
    exibirCategoria() {
        history.push('/Autenticado/Categoria/Trabalho');
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
                        <div
                            key={ index }
                            // onClick={ this.exibirCategoria.bind() }
                        >
                            { categoria.titulo }
                            <button
                                type='button'
                                onClick={ this.apagar.bind(this, index, categoria.titulo) }
                            >
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
