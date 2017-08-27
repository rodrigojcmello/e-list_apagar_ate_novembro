import Categoria from '../../../controller/CategoriaController';
const Cat = new Categoria();

class Entrada extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form
                className='categoria-entrada'
                onSubmit={
                    event => {
                        Cat.adicionar(
                            event,
                            this.entrada,
                            this.props.atualizarLista
                        );
                    }
                }
            >
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
