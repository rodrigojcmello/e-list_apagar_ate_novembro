class CategoriaLista {

    constructor() {
        this.categorias = store.get('categorias') ? store.get('categorias') : [];
    }

    adicionar(categoria, atualizarLista) {
        this.categorias.push(categoria);
        store.set('categorias', this.categorias);
        atualizarLista(this.categorias);
    }

}

export default new CategoriaLista();
