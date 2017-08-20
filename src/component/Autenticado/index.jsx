import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import CategoriaLista from './CategoriaLista';

class Autenticado extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('### Autenticado props');
        console.log(this.props);
        return (
            <div>
                <Route path={ this.props.match.url } render={ () => (
                    <Redirect to={ this.props.match.url + '/Categoria' } />
                ) } />
                <Route
                    path={ this.props.match.url + '/Categoria' }
                    render={ () => (
                        <CategoriaLista
                            atualizarToken={ this.props.atualizarToken }
                        />
                    ) }
                />
            </div>
        );
    }
}

export default withRouter(Autenticado);
