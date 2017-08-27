if (!store.get('categoria')) {
    // store.set('catategoria', { lista: [] });
    store.set('catategoria', { lista: [
        { titulo: 'Teste 1' },
        { titulo: 'Teste 2' },
        { titulo: 'Teste 3' },
        { titulo: 'Teste 4' },
        { titulo: 'Teste 5' }
    ] });
}

class Categoria {
    constructor() {
        this.lista = store.get('catategoria').lista;
    }
    adicionar(categoria, atualizarLista) {
        this.lista.push(categoria);
        store.set('categoria', { lista: this.lista });
        atualizarLista(this.lista);
    }
}

export default new Categoria();
