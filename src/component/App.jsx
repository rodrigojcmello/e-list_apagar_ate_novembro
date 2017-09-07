import { withRouter, Switch, Link, Route, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import update from 'immutability-helper';

import Usuario from '../controller/Usuario.js';

import RotaRedirecionar from '../component/RotaRedirecionar';
import Entrar from '../component/Entrar';
import Categoria from '../component/Autenticado/Categoria';
import Tarefa from './Autenticado/Tarefa';

if (process.env.NODE_ENV == 'production') {
    console.log = () => {};
}

import './estilo.sss';
import './_generico/index.js';

const PrivateRoute = ({ component: Component, token, ...rest }) => (
    <Route { ...rest } render={ props => (
        token ?
        <Component { ...rest } /> :
        <Redirect to={{
            pathname: '/Entrar',
            state: { from: rest.location }
        }} />
    )}/>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                token: Usuario.token
            },
            transicao: ''
        };
    }
    atualizarToken(token) {
        console.log('atualizarToken()');
        this.setState({ usuario: update(this.state.usuario, { token: { $set: token } }) });
    }
    atualizarTransicao(transicao) {
        console.log('atualizarTransicao()');
        this.setState({ transicao: transicao });
    }
    render() {
        return (
            <div>
                <Route exact path='/' render={ () => (
                    <Redirect to='Entrar' />
                ) } />
                <TransitionGroup component="main" className="page-main">
                    <CSSTransition
                        classNames={ this.state.transicao }
                        key={ this.props.location.pathname.split('/')[1] || '/' }
                        timeout={ this.state.transicao ? 400 : 0 }
                    >
                        <section className="page">
                            <Switch location={ this.props.location }>
                                <Route path='/Entrar' render={ () => (
                                    <Entrar
                                        atualizarToken={ this.atualizarToken.bind(this) }
                                        atualizarTransicao={ this.atualizarTransicao.bind(this) }
                                    />
                                ) } />
                                <PrivateRoute
                                    path='/Tarefa/:id/:titulo'
                                    token={ this.state.usuario.token }
                                    component={ Tarefa }
                                />
                                <PrivateRoute
                                    path='/:usuario'
                                    component={ Categoria }
                                    token={ this.state.usuario.token }
                                    atualizarToken={ this.atualizarToken.bind(this) }
                                    atualizarTransicao={ this.atualizarTransicao.bind(this) }
                                />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
                <Route component={ RotaRedirecionar } />
            </div>
        );
    }
}

export default withRouter(App);
