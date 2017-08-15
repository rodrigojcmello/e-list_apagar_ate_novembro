import store from 'store';

class Tarefa {
	constructor() {
		this.lista = store.get('lista') ? store.get('lista') : [];
		this.lista_oculta = store.get('lista_oculta')
			? store.get('lista_oculta')
			: [];
		this.adicionar = this.adicionar.bind(this);
	}
	adicionar(tarefa, atualizarLista) {
		this.lista.push(tarefa);
		store.set('lista', this.lista);
		atualizarLista(this.lista);
	}
	concluir(index, atualizarLista) {
		this.lista[index].concluida = !this.lista[index].concluida;
		store.set('lista', this.lista);
		atualizarLista(this.lista);
	}
	arquivar(atualizarLista) {
		this.nova_lista_oculta = this.lista.filter(tarefa => {
			return tarefa.concluida == true;
		});
		this.lista = this.lista.filter(tarefa => {
			return tarefa.concluida != true;
		});
		this.lista_oculta = this.lista_oculta.concat(this.nova_lista_oculta);
		store.set('lista', this.lista);
		store.set('lista_oculta', this.lista_oculta);
		atualizarLista(this.lista);
	}
}

export default new Tarefa();
