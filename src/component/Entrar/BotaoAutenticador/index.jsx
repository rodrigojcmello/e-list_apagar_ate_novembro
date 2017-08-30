require('./estilo.sss');

const Autenticador = props => (
    <button
        className={ `autenticador ${ props.className }` }
    >
        <img src={ require(`./logo-${ props.className }.png`) } />
        { props.titulo }
    </button>
);

module.exports = Autenticador;
