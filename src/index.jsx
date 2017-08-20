import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import update from 'immutability-helper';

import Usuario from './controller/Usuario';

import RotaRedirecionar from './component/RotaRedirecionar';
import Entrar from './component/Entrar';
import Autenticado from './component/Autenticado';
import Categoria from './component/Autenticado/Categoria';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                token: Usuario.token
            }
        };
    }
    atualizarToken(token) {
        this.setState({
            usuario: update(this.state.usuario, { 'token': { $set: token } })
        });
    }
    render() {
        return (
			<HashRouter>
				<Switch>
					<Route exact path='/' render={ () => (
						this.state.usuario.token ?
						<Redirect to='/Autenticado' /> :
						<Redirect to='/Entrar' />
					) } />
					<Route path='/Entrar' render={ () => (
						this.state.usuario.token ?
						<Redirect to='/Autenticado' /> :
						<Entrar
                            atualizarToken={ this.atualizarToken.bind(this) }
                        />
					) } />
					<Route path='/Autenticado' render={ () => (
						this.state.usuario.token ?
						<Autenticado /> :

// TODO: Remover propriedade key para criar uma nova instância do Redirect para impedir que uma o retorno seja uma página branca
// https://github.com/ReactTraining/react-router/issues/5003
// https://github.com/ReactTraining/react-router/pull/5162

						<Redirect to='/' key='BUCETA' />
					) } />
					<Route component={ RotaRedirecionar } />
				</Switch>
			</HashRouter>
        );
    }
}

render(<App />, document.getElementById('app'));
