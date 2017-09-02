require('./estilo.sss');

const Autenticador = props => (
    <button className={ `autenticador ${ props.tipo }` } onClick={ props.onClick }>
        <div><img src={ require(`./logo-${ props.tipo }-48x48.png`) } /></div>
        <div>{ props.children }</div>
    </button>
);

module.exports = Autenticador;
