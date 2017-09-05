import Usuario from '../../controller/Usuario';
const history = require('history').createHashHistory();

import Autenticador from './Autenticador';

class Entrar extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		if (Usuario.token) {
			history.push(Usuario.nomeURL());
		}
	}
	componentWillUpdate() {
		if (Usuario.token) {
			history.push(Usuario.nomeURL());
		}
	}
	render() {
		return (
			<div className='page-full'>
				<img src={ require('./logo.png') } />
				<Autenticador tipo='google'>
					Entrar com Google
				</Autenticador>
				<Autenticador tipo='microsoft'>
					Entrar com Microsoft
				</Autenticador>
				<Autenticador tipo='facebook'>
					Entrar com Facebook
				</Autenticador>
				<Autenticador
					tipo='email'
					onClick={ () => {
						Usuario.autenticarPorEmail(
							this.props.atualizarToken,
							this.props.atualizarTransicao
						);
					} }
				>
					Entrar com E-mail
				</Autenticador>
			</div>
		);
	}
}

export default Entrar;
