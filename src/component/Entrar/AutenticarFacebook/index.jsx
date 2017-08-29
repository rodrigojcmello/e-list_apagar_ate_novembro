import './estilo.sss';

class AutenticarFacebook extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <button
                className='autenticar-facebook'
            >
                <img src={ require('../../../assets/img/logo-facebook.png') } />
                Entrar com Facebook
            </button>
        );
    }
}

export default AutenticarFacebook;
