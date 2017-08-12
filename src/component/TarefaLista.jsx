import React, { Component } from 'react';

class TarefaLista extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className='tarefa-lista'
            >
                { this.props.lista.map((tarefa, i) => {
                    return (
                        <div key={ i }>
                            { tarefa.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default TarefaLista;
