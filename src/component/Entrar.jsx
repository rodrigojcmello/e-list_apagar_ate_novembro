import React, { Component } from 'react';

class Entrar extends Component {
	constructor(props) {
		super(props);
	}
	Salvar() {
		alert('teste');
	}
	componentWil() {
		if (foo) {
			bar();
		}
	}
	render() {
		return (
			<div>
				<button onClick={Usuario.autenticar()}>Entrar</button>
			</div>
		);
	}
}

export default Entrar;
