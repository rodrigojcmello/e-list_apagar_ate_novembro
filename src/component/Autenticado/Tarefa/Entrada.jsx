import Tarefa from '../../../controller/TarefaController';

class Entrada extends Component {
    constructor(props) {
        super(props);
    }
    enviar(event) {
        event.preventDefault();
        if (this.entrada.value.trim().length > 0) {
            Tarefa.adicionar(
                this.entrada,
                this.props.categoria,
                this.props.atualizarLista
            );
        }
    }
    render() {
        return (
            <form onSubmit={ this.enviar.bind(this) } >
                <input
                    autoComplete='off'
                    placeholder='O que deseja fazer?'
                    ref={ el => this.entrada = el }
                    type='text'
                />
            </form>
        );
    }
}

export default Entrada;
