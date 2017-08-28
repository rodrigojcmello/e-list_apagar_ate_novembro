import Tarefa from '../../../controller/TarefaController';

import Lista from './Lista';
import Entrada from './Entrada';
// import Arquivar from './Arquivar';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: Tarefa.lista[this.props.match.params.id] ? Tarefa.lista[this.props.match.params.id] : []
        };
    }
    atualizarLista(lista) {
        this.setState({ lista: lista });
    }
    render() {
        console.log('this.props', this.props);
        return (
            <div>
                <hr />
                {/* <Arquivar
                    atualizarLista={ this.atualizarLista.bind(this) }
                /> */}
                <Lista
                    categoria={ this.props.match.params.id }
                    lista={ this.state.lista }
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
                <Entrada
                    categoria={ this.props.match.params.id }
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
                <hr />
            </div>
        );
    }
}

export default Index;
