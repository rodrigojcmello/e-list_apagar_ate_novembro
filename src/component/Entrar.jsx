import React, { Component } from 'react';
import Usuario from '../controller/Usuario';
const history = require('history').createHashHistory();

class Entrar extends Component {
	constructor(props) {
		super(props);
	}
	autenticarUsuario() {
		Usuario.autenticar((retorno) => {
			if (retorno.sucesso) {
				history.push('/pt-BR/Rodrigo-Mello');
			}
		});
	}
	render() {
		return (
			<div>
				<button
					onClick={ this.autenticarUsuario.bind(this) } >
					Entrar
				</button>
			</div>
		);
	}
}

export default Entrar;
