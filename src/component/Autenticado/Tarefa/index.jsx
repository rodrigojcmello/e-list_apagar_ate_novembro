import Tarefa from '../../../controller/Tarefa';

import Lista from './Lista';
import Entrada from './Entrada';
import Arquivar from './Arquivar';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: Tarefa.lista
        };
    }
    atualizarLista(lista) {
        this.setState({
            lista: lista
        });
    }
    render() {
        return (
            <div>
                <hr />
                <Arquivar
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
                <Lista
                    lista={ this.state.lista }
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
                <Entrada
                    atualizarLista={ this.atualizarLista.bind(this) }
                />
                <hr />
            </div>
        );
    }
}

export default Index;
