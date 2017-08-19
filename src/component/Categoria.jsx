import React, { Component } from 'react';

class Categoria extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoria: [
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' },
                { titulo: 'Teste 1' }
            ]
        };
    }
    render() {
        return (
            <div>
                { this.state.categoria.map((item, i) => {
                    return (
                        <div>
                            { item.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Categoria;
