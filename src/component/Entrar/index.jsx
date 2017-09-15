import { Link } from 'react-router-dom';
const history = require('history').createHashHistory();

import Usuario from '../../controller/Usuario';

import Autenticador from './Autenticador';

class Entrar extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		if (Usuario.token) history.push(Usuario.nomeURL());
	}
	// componentWillUpdate() {
	// 	if (Usuario.token) {
	// 		history.push(Usuario.nomeURL());
	// 	}
	// }
	componentDidUpdate() {
		// if (Usuario.token) {
		// 	history.push(Usuario.nomeURL());
		// }
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
				<Autenticador
					tipo='facebook'
					onClick={ () => {
						Usuario.autenticarComFacebook(
							this.props.atualizarToken,
							this.props.atualizarTransicao
						);
					} }
				>
					Entrar com Facebook
				</Autenticador>
				<Autenticador
					tipo='email'
				>
					Entrar com E-mail
				</Autenticador>
				<Link to='Rodrigo-Mello'>Teste</Link>
			</div>
		);
	}
}

export default Entrar;
