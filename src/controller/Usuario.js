import Categoria from './CategoriaController';

//TEMP
const history = require('history').createHashHistory();

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
		atualizarTransicao('fade-slide-left');
		atualizarToken(this.token);
	}
	nomeURL() {
		return `/${ this.nome.replace(' ', '-') }`;
	}
	sair(callback) {
		localStorage.clear();
		this.token = '';
		Categoria.lista = [];
		callback({ sucesso: true });
	}
}

export default new Usuario();
