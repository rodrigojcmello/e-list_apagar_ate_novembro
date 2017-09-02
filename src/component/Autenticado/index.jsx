import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Categoria from './Categoria';
import Tarefa from './Tarefa';

class Autenticado extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props != nextState) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        console.log('### BUCETA');
        return (
            <div>
                <Route
                    exact
                    path={ this.props.match.url }
                    render={ () => (
                        <Redirect to={ `${ this.props.match.url }/Categoria` } />
                    ) }
                />
                <Route
                    path={ `${ this.props.match.url }/Categoria/:id/:titulo` }
                    component={ Tarefa }
                />
                <Route
                    exact
                    path={ `${ this.props.match.url }/Categoria` }
                    render={ () => (
                        <Categoria atualizarToken={ this.props.atualizarToken } />
                    ) }
                />
            </div>
        );
    }
}

export default withRouter(Autenticado);
