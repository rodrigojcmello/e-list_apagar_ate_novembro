import Categoria from '../model/Categoria';

const Controller = {

    lista: store.get('categoria_lista') ? store.get('categoria_lista') : [],

    adicionar: (event, entrada, atualizarLista) => {
        event.preventDefault();
        let categoria = new Categoria(entrada.value);
        entrada.value = '';
        Controller.lista.push(categoria);
        store.set('categoria_lista', Controller.lista);
        atualizarLista(Controller.lista);
    }

};

export default Controller;
