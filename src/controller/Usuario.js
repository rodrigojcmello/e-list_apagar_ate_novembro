const history = require('history').createHashHistory();

import Categoria from './CategoriaController';

class Usuario {
	constructor() {
		this.token = store.get('usuario') ? store.get('usuario').token : '';
		this.nome = store.get('usuario') ? store.get('usuario').nome : '';
	}
	autenticarPorEmail(atualizarToken, atualizarTransicao) {
		store.set('usuario', {
			token: this.token = '12345',
			nome: this.nome = 'Rodrigo Mello'
		});
		atualizarToken(this.token);
		atualizarTransicao('fade-slide-left');
		history.push(this.nomeURL());
	}
	nomeURL() {
		return `/${ this.nome.replace(' ', '-') }`;
	}
	sair(atualizarToken, atualizarTransicao) {
		localStorage.clear();
		Categoria.lista = [];
		atualizarTransicao('');
		atualizarToken(this.token = '');
	}
}

export default new Usuario();
