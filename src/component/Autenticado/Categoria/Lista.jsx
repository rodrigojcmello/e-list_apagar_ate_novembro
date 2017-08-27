const history = require('history').createHashHistory();

class Lista extends Component {
    constructor(props) {
        super(props);
    }
    exibirCategoria() {
        history.push('/Autenticado/Categoria/Trabalho');
    }
    render() {
        return (
            <div>
                { this.props.lista.map((categoria, i) => {
                    return (
                        <div
                            key={ i }
                            // onClick={ this.exibirCategoria.bind() }
                        >
                            { categoria.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Lista;
