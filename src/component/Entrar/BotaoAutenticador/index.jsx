require('./estilo.sss');

const BotaoAutenticador = props => (
    <button
        className={ `botao-autenticador ${ props.autenticador }` }
    >
        <img src={ require(`./logo-${ props.autenticador }.png`) } />
        { props.titulo }
    </button>
);

module.exports = BotaoAutenticador;
