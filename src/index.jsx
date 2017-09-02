import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './component/App';

render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('app'));
