import Categoria from '../../../controller/CategoriaController';

class Entrada extends Component {
    constructor(props) {
        super(props);
    }
    enviar(event) {
        event.preventDefault();
        if (this.entrada.value.trim().length > 0) {
            Categoria.adicionar(
                this.entrada,
                this.props.atualizarLista
            );
        }
    }
    render() {
        return (
            <form onSubmit={ this.enviar.bind(this) } >
                <input
                    autoComplete='off'
                    placeholder='Nome da categoria'
                    ref={ el => this.entrada = el }
                    type='text'
                />
            </form>
        );
    }
}

export default Entrada;
