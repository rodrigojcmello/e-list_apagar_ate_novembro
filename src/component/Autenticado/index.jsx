const history = require('history').createHashHistory();

import Usuario from '../../controller/Usuario.js';

class Autenticado extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log('#### will');
        if (!Usuario.token) {
            history.push('/Entrar');
        }
    }
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default Autenticado;
