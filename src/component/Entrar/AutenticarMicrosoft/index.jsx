import './estilo.sss';

class AutenticarMicrosoft extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button
                className='autenticar-microsoft'
            >
                <img src={ require('../../../assets/img/logo-microsoft.png') } />
                Entrar com Microsoft
            </button>
        );
    }
}

export default AutenticarMicrosoft;
