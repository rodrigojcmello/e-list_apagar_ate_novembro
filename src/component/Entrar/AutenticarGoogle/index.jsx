import './estilo.sss';

class AutenticarGoogle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button
                className='autenticar-google'
            >
                <img src={ require('../../../assets/img/logo-google.png') } />
                Entrar com Google
            </button>
        );
    }
}

export default AutenticarGoogle;
