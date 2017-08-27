import Tarefa from '../../../controller/Tarefa';

const TarefaArquivar = props => (
    <button
        type='button'
        onClick={ Tarefa.arquivar.bind(Tarefa, props.atualizarLista) }
    >
        Ocultar tarefas concluídas
    </button>
);

export default TarefaArquivar;
