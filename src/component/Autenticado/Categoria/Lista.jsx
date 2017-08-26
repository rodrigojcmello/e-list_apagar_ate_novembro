import React, { Component } from 'react';
const history = require('history').createHashHistory();

class Lista extends Component {
    constructor(props) {
        super(props);
    }
    exibirCategoria() {
        history.push('/Autenticado/Categoria/Trabalho');
    }
    render() {
        console.log('### Categoria Lista props');
        console.log(this.props);
        console.log('_____________________-');
        return (
            <div>
                { this.props.lista.map((categoria, i) => {
                    return (
                        <div
                            key={ i }
                            onClick={ this.exibirCategoria.bind() }
                        >
                            { categoria.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Lista;
