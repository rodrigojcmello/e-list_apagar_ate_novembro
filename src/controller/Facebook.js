const history = require('history').createHashHistory();

// import config from '../config.js';

const Facebook = {

    autenticar: callback => {
        facebookConnectPlugin.login(['public_profile', 'email'],
            resposta => {
                console.log('facebook autenticação', resposta);
                Facebook.obterDados(callback);
            },
            erro => { console.log(erro) }
        );
    },

    obterDados: callback => {
        facebookConnectPlugin.api('/me?fields=name,first_name,last_name,email', [],
            resposta => {
                console.log('facebook dados', resposta);
                let usuario = {
                    id: resposta.id,
                    email: resposta.email,
                    primeiro_nome: resposta.first_name,
                    sobrenome: resposta.last_name,
                    nome_completo: resposta.name
                };
                callback(resposta);
            },
            erro => { console.log(erro) }
        );
    }

};

export default Facebook;
