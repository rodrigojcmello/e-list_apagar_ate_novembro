const history = require('history').createHashHistory();
import Categoria from './CategoriaController';
import Facebook from './Facebook';
import config from '../../config';

class Usuario {
	constructor() {
		this.token = store.get('usuario') ? store.get('usuario').token : '';
		this.nome = store.get('usuario') ? store.get('usuario').nome : '';
	}
	autenticarPorEmail(atualizarToken, atualizarTransicao) {
		// store.set('usuario', {
		// 	token: this.token = '12345',
		// 	nome: this.nome = 'Rodrigo Mello'
		// });
		// atualizarToken(this.token);
		// atualizarTransicao('fade-slide-left');
		// history.push(this.nomeURL());
		// const ajax = new XMLHttpRequest();
		// ajax.open('post', config.host + '/autenticar/email');
		// ajax.setRequestHeader('content-type', 'application/json');
		// ajax.onreadystatechange = () => {
		// 	if (ajax.readyState != 4 || ajax.status != 200) return;
		// 	console.log('ajax.response', ajax.response);
		// 	let retorno = JSON.parse(ajax.response);
		// 	console.log('nome', retorno.nome);
		// 	console.log('estado', retorno.estado_civil);
		// 	console.log('ano', retorno.ano);
		// 	console.log('bool', retorno.bool);
		// };
		// ajax.send(
		// 	JSON.stringify({
		// 		Email: 'Copo88@mail.com',
		// 		Nome: 'Rafael'
		// 	})
		// );
		Facebook.autenticar();
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
