import Tarefa from '../model/Tarefa';

const Controller = {

	lista: store.get('tarefa_lista') ? store.get('tarefa_lista') : [],

	adicionar: (entrada, categoria, atualizarLista) => {
		let tarefa = new Tarefa(entrada.value, categoria);
        entrada.value = '';
		if (!Controller.lista[categoria]) Controller.lista[categoria] = [];
        Controller.lista[categoria].push(tarefa);
        store.set('tarefa_lista', Controller.lista);
        atualizarLista(Controller.lista[categoria]);
	},

	concluir: (index, categoria, atualizarLista) => {
		Controller.lista[categoria][index].concluida = !Controller.lista[categoria][index].concluida;
		store.set('tarefa_lista', Controller.lista);
		atualizarLista(Controller.lista[categoria]);
	},
	//
	// arquivar: (atualizarLista) => {
	// 	this.nova_lista_oculta = this.lista.filter(tarefa => {
	// 		return tarefa.concluida == true;
	// 	});
	// 	this.lista = this.lista.filter(tarefa => {
	// 		return tarefa.concluida != true;
	// 	});
	// 	this.lista_oculta = this.lista_oculta.concat(this.nova_lista_oculta);
	// 	store.set('tarefa_lista', this.lista);
	// 	store.set('lista_oculta', this.lista_oculta);
	// 	atualizarLista(this.lista);
	// }

};

export default Controller;
