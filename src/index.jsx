import React, { Component } from 'react';
import { render } from 'react-dom';
import {
	HashRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RotaRedirecionar from './component/RotaRedirecionar';
import Entrar from './component/Entrar';

const TransitionRoute = ({ location, props }) =>
	<TransitionGroup>
		<CSSTransition
			classNames="fade"
			key={location.pathname.split('/')[1]}
			mountOnEnter={true}
			timeout={400}
			unmountOnExit={true}
		>
			<div className="WRAPPER">
				<Switch location={location}>
					<Route
						exact
						path="/"
						render={() => <Redirect to="/pt-BR/Entrar" />}
					/>
					<Route path="/pt-BR/Entrar" component={Entrar} />
					<Route component={RotaRedirecionar} />
				</Switch>
			</div>
		</CSSTransition>
	</TransitionGroup>;

const AuthRoute = ({ component, ...props }) =>
	<div>
		{!true
			? <Route {...props} component={component} />
			: <Route {...props} component={RotaRedirecionar} />}
	</div>;

const App = () =>
	<Router>
		<div>
			<Route component={TransitionRoute} />
		</div>
	</Router>;

render(<App />, document.getElementById('app'));
