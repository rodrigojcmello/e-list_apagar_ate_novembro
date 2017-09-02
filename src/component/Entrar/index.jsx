import Usuario from '../../controller/Usuario';
const history = require('history').createHashHistory();

import Autenticador from './Autenticador';

class Entrar extends Component {
	constructor(props) {
		super(props);
	}
	// autenticarUsuario() {
	// 	Usuario.autenticar((retorno) => {
	// 		if (retorno.sucesso) {
	// 			this.props.atualizarToken(Usuario.token);
	// 		}
	// 	});
	// }
	render() {
		return (
			<div>
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
					onClick={ () => { Usuario.autenticarPorEmail(this.props.atualizarToken) } }
				>
					Entrar com E-mail
				</Autenticador>
			</div>
		);
	}
}

export default Entrar;
