import Categoria from './CategoriaController';

class Usuario {
	constructor() {
		this.token = store.get('token');
	}
	autenticarPorEmail(atualizarToken) {
		store.set('token', '12345');
		this.token = '12345';
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
