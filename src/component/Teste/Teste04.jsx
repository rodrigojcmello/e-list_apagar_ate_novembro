import { withRouter, Switch, Link, Route, Redirect } from 'react-router-dom';

import Teste0401 from './Teste0401';
import Teste0402 from './Teste0402';

const Teste01 = () => (
    <div>
        Teste 04
        <Link to='/teste-04/01'>teste 04 01</Link>
        <Link to='/teste-04/02'>teste 04 02</Link>
        <Route path='/teste-04/01' component={ Teste0401 } />
        <Route path='/teste-04/02' component={ Teste0402 } />
    </div>
);

export default Teste01;
