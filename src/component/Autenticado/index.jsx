import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Categoria from './Categoria';
import Tarefa from './Tarefa';

class Autenticado extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('### Autenticado props');
        console.log(this.props);
        return (
            <Switch>
                <Route
                    exact
                    path={ this.props.match.url }
                    render={ () => (
                        <Redirect to={ this.props.match.url + '/Categoria' } />
                    ) }
                />
                <Route
                    path={ this.props.match.url + '/Categoria/Trabalho' }
                    component={ Tarefa }
                />
                <Route
                    path={ this.props.match.url + '/Categoria' }
                    render={ () => (
                        <Categoria atualizarToken={ this.props.atualizarToken } />
                    ) }
                />

            </Switch>
        );
    }
}

export default withRouter(Autenticado);
