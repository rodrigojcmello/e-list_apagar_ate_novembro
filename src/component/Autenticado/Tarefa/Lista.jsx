import Tarefa from '../../../controller/TarefaController';

class Lista extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('this.props LISTA', this.props);
        return (
            <div
                className='tarefa-lista'
            >
                { this.props.lista.map((tarefa, index) => {
                    return (
                        <div
                            key={ index }
                            style={ tarefa.concluida ? { opacity: 0.3 } : {} }
                        >
                            <input
                                type='checkbox'
                                checked={ tarefa.concluida ? 'checked' : '' }
                                onChange={
                                    Tarefa.concluir.bind(
                                        Tarefa,
                                        index,
                                        this.props.categoria,
                                        this.props.atualizarLista
                                    )
                                }
                            />
                            { tarefa.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Lista;
