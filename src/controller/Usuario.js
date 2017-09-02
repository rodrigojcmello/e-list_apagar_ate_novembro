import Categoria from './CategoriaController';

//TEMP
const history = require('history').createHashHistory();

class Usuario {
	constructor() {
		this.token = store.get('token');
	}
	autenticarPorEmail(atualizarToken) {
		store.set('token', '12345');
		this.token = '12345';
		history.push('/Autenticado/Categoria');
		atualizarToken(this.token);
	}
	sair(callback) {
		localStorage.clear();
		this.token = '';
		Categoria.lista = [];
		callback({ sucesso: true });
	}
}

export default new Usuario();
