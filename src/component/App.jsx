import { withRouter, Switch, Link, Route, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import update from 'immutability-helper';

import Usuario from '../controller/Usuario.js';

import RotaRedirecionar from '../component/RotaRedirecionar';
import Entrar from '../component/Entrar';
import Categoria from '../component/Autenticado/Categoria';
import Tarefa from './Autenticado/Tarefa';

import Teste01 from './Teste/Teste01';
import Teste02 from './Teste/Teste02';
import Teste03 from './Teste/Teste03';
import Teste03sub from './Teste/Teste03-sub';
import Teste04 from './Teste/Teste04';

if (process.env.NODE_ENV == 'production') {
    console.log = () => {};
}

import './estilo.sss';
import './_generico/index.js';

const PrivateRoute = ({ component: Component, token, ...rest }) => (
    <Route {...rest} render={ props => (
        token ?
        <Component { ...rest } /> :
        <Redirect to={{
            pathname: '/Entrar',
            state: { from: props.location }
        }} />
    )}/>
);

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
            <div>
                {/* <Link to='/teste-01'>teste 01</Link>
                <Link to='/teste-02'>teste 02</Link>
                <Link to='/teste-03'>teste 03</Link>
                <Link to='/teste-03/sub-1'>teste 03 - sub</Link>
                <Link to='/teste-04'>teste 04</Link>
                <Link to='/teste-04/01'>teste 04 - sub</Link> */}
                <TransitionGroup component="main" className="page-main">
                    <CSSTransition
                        appear
                        classNames='fade-slide-left'
                        key={ this.props.location.pathname.split('/')[1] || '/' }
                        timeout={ 400 }
                    >
                        <section className="page">
                            <Switch location={ this.props.location }>
                                <Route path='/teste-01' component={ Teste01 } />
                                <Route path='/teste-02' component={ Teste02 } />
                                <Route exact path='/teste-03' component={ Teste03 } />
                                <Route path='/teste-03/sub-1' component={ Teste03sub } />
                                <Route path='/teste-04' component={ Teste04 } />

                                <Route exact path='/' render={ () => (
                                    <Redirect to='/Entrar' />
                                ) } />
                                <Route path='/Entrar' render={ () => (
                                    this.state.usuario.token ?
                                    <Redirect to='/Categoria' /> :
                                    <Entrar atualizarToken={ this.atualizarToken.bind(this) } />
                                ) } />
                                <PrivateRoute
                                    path='/Categoria/:id/:titulo'
                                    token={ this.state.usuario.token }
                                    component={ Tarefa }
                                />
                                <PrivateRoute
                                    path='/Categoria'
                                    component={ Categoria }
                                    token={ this.state.usuario.token }
                                    atualizarToken={ this.atualizarToken.bind(this) }
                                />
                                <Route component={ RotaRedirecionar } />



                                {/* <Route exact path='/' render={ () => (
                                    <Redirect to='/Entrar' />
                                ) } />
                                <Route path='/Entrar' render={ () => (
                                    <Entrar
                                        atualizarToken={ this.atualizarToken.bind(this) }
                                    />
                                ) } />
                                <Route path='/Autenticado' render={ () => (
                                    <Autenticado
                                        atualizarToken={ this.atualizarToken.bind(this) }
                                    />
                                ) } />
                                <Route component={ RotaRedirecionar } /> */}


                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        );
    }
}

export default withRouter(App);
