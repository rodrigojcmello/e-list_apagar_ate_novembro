import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import RotaRedirecionar from './component/RotaRedirecionar';
import Entrar from './component/Entrar';
import Categoria from './component/Categoria';

const TransitionRoute = ({ location, props }) => (
	<TransitionGroup>
		<CSSTransition
			classNames='fade'
			key={ location.pathname.split('/')[1] }
			mountOnEnter={ true }
			timeout={ 400 }
			unmountOnExit={ true }
		>
			<div className='WRAPPER'>
				<Switch location={ location }>
					<Route
						exact
						path='/'
						render={ () => <Redirect to='/pt-BR/Entrar' /> }
					/>
					<Route component={ Entrar } path='/pt-BR/Entrar' />
					<Route component={ Categoria } path='/pt-BR/:nome/categoria' />
					<Route component={ RotaRedirecionar } />
				</Switch>
			</div>
		</CSSTransition>
	</TransitionGroup>
);

const AuthRoute = ({ component, ...props }) => (
	<div>
		{
			!true ?
			<Route { ...props } component={ component } /> :
			<Route { ...props } component={ RotaRedirecionar } />
		}
	</div>
);

const App = () => (
	<HashRouter>
		<div>
			<Route component={ TransitionRoute } />
		</div>
	</HashRouter>
);

render(<App />, document.getElementById('app'));
