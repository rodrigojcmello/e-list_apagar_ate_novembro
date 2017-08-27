import Categoria from '../model/Categoria';

const Controller = {

    lista: store.get('categoria_lista') ? store.get('categoria_lista') : [],

    adicionar: (entrada, atualizarLista) => {
        let categoria = new Categoria(entrada.value);
        entrada.value = '';
        Controller.lista.push(categoria);
        store.set('categoria_lista', Controller.lista);
        atualizarLista(Controller.lista);
    },

    apagar: (index, atualizarLista) => {
        Controller.lista.splice(index, 1);
        store.set('categoria_lista', Controller.lista);
        atualizarLista(Controller.lista);
    }

};

export default Controller;
