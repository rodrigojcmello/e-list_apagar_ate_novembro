import React, { Component } from 'react';

class Lista extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('### Categoria Lista props');
        console.log(this.props);
        console.log('_____________________-');
        return (
            <div>
                { this.props.lista.map((categoria, i) => {
                    return (
                        <div key={ i }>
                            { categoria.titulo }
                        </div>
                    );
                }) }
            </div>
        );
    }
}

export default Lista;
