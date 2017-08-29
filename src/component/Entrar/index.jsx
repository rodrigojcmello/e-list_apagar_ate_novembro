import Usuario from '../../controller/Usuario';
const history = require('history').createHashHistory();

import AutenticarFacebook from './AutenticarFacebook';
import AutenticarGoogle from './AutenticarGoogle';
import AutenticarMicrosoft from './AutenticarMicrosoft';

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
				<AutenticarFacebook />
				<AutenticarGoogle />
				<AutenticarMicrosoft />
				<button onClick={ this.autenticarUsuario.bind(this) } >
					Entrar
				</button>
			</div>
		);
	}
}

export default Entrar;
