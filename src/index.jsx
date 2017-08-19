import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Usuario from './controller/Usuario';

import RotaRedirecionar from './component/RotaRedirecionar';
import Entrar from './component/Entrar';
import Autenticado from './component/Autenticado';
import Categoria from './component/Autenticado/Categoria';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
		console.log('### App props');
		console.log(this.props);
        return (
			<HashRouter>
				<Switch>
					<Route path='/' render={ () => (
						Usuario.token ?
						<Redirect to='/Autenticado' /> :
						<Redirect to='/Entrar' />
					) } />
					<Route path='/Entrar' render={ () => (
						Usuario.token ?
						<Redirect to='/Autenticado' /> :
						<Entrar />
					) } />
					<Route path='/Autenticado' render={ () => (
						Usuario.token ?
						<Autenticado { ...this.props } /> :
						<Redirect to='/' />
					) } />
                    {/* <Route path='/Autenticado' component={ Autenticado } /> */}
					<Route component={ RotaRedirecionar } />
				</Switch>
			</HashRouter>
        );
    }
}

render(<App />, document.getElementById('app'));
