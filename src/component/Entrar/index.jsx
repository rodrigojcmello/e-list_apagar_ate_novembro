import Usuario from '../../controller/Usuario';
const history = require('history').createHashHistory();

import Autenticador from './Autenticador';

class Entrar extends Component {
	constructor(props) {
		super(props);
	}
	autenticarUsuario() {
		Usuario.autenticar((retorno) => {
			if (retorno.sucesso) {
				this.props.atualizarToken(Usuario.token);
			}
		});
	}
	render() {
		return (
			<div>
				<Autenticador tipo='facebook'>
					Entrar com Facebook
				</Autenticador>
				<Autenticador tipo='google'>
					Entrar com Google
				</Autenticador>
				<Autenticador tipo='microsoft'>
					Entrar com Microsoft
				</Autenticador>
				<button onClick={ this.autenticarUsuario.bind(this) } >
					Entrar
				</button>
			</div>
		);
	}
}

export default Entrar;
