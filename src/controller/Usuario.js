import store from 'store';

class Usuario {
	constructor() {
		this.token = store.get('token');
	}
	autenticar(callback) {
		store.set('token', '12345');
		this.token = '12345';
		callback({ sucesso: true });
	}
	sair(callback) {
		localStorage.clear();
		this.token = '';
		callback({ sucesso: true });
	}
}

export default new Usuario();
