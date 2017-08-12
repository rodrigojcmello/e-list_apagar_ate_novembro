import update from 'immutability-helper';
import store from 'store';

class Tarefa {
    constructor() {
        this.lista = store.get('lista') ? store.get('lista') : [];
        this.adicionar = this.adicionar.bind(this);
    }
    adicionar(tarefa, atualizarLista) {
        this.lista.push(tarefa);
        store.set('lista', this.lista);
        atualizarLista(this.lista);
    }
}

export default new Tarefa();
