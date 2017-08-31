require('./estilo.sss');

const Autenticador = props => (
    <button className={ `autenticador ${ props.tipo }` }>
        <div><img src={ require(`./logo-${ props.tipo }-72x72.png`) } /></div>
        <div>{ props.children }</div>
    </button>
);

module.exports = Autenticador;
