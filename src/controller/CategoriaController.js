import Categoria from '../model/Categoria';
import CategoriaLista from '../model/CategoriaLista';

class CategoriaController {

    adicionar(event, entrada, atualizarLista) {
        event.preventDefault();
        let categoria = new Categoria(entrada.value);
        entrada.value = '';
        CategoriaLista.adicionar(categoria, atualizarLista);
        console.log(CategoriaLista.categorias);
    }

}

export default CategoriaController;
