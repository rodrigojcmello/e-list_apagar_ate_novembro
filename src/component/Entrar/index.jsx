import Usuario from '../../controller/Usuario';
const history = require('history').createHashHistory();

import BotaoAutenticador from './BotaoAutenticador';

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
				<BotaoAutenticador
					autenticador='facebook'
					titulo='Entrar com Facebook'
				/>
				<BotaoAutenticador
					autenticador='google'
					titulo='Entrar com Facebook'
				/>
				<BotaoAutenticador
					autenticador='microsoft'
					titulo='Entrar com Facebook'
				/>
				<button onClick={ this.autenticarUsuario.bind(this) } >
					Entrar
				</button>
			</div>
		);
	}
}

export default Entrar;
