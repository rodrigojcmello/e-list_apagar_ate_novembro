class Tarefa {
    constructor(titulo, categoria) {
        this.titulo = titulo;
        this.concluida = false;
        this.data_criacao = new Date();
        this.categoria = categoria;
    }
}

export default Tarefa;
