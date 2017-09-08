const history = require('history').createHashHistory();

// import config from '../config.js';

const Facebook = {

    autenticar: () => {
        facebookConnectPlugin.login(['public_profile', 'email'],
            resposta => {
                console.log(resposta);
                Facebook.obterDados();
            },
            erro => { console.log(erro) }
        );
    },

    obterDados: () => {
        facebookConnectPlugin.api('/me?fields=name,first_name,email', [],
            resposta => {
                console.log('resposta.email', resposta.email);
                console.log('resposta.name', resposta.name);
                console.log('resposta.id', resposta.id);
                Facebook.cadastrar();
            },
            erro => { console.log(erro) }
        );
    },

    cadastrar: () => {
        // console.log('### Usuario');
        // console.log(Usuario);
        // ajax({
        //     data: JSON.stringify({
        //         POST_DATA : {
        //             email: Usuario.email,
        //             fb_id: Usuario.facebook_id,
        //             name: Usuario.nome,
        //             pushId: Usuario.pushId
        //         }
        //     }),
        //     dataType: 'json',
        //     method: 'POST',
        //     url: config.host + '/api/user/auth_by_facebook'
        // }).done((retorno) => {
        //     if (retorno.success) {
        //         Usuario.token = local('usuario_token', retorno.id);
        //         console.log('### Usuario');
        //         console.log(Usuario);
        //         global.atualizarTransitionName('fade-slide-left');
        //         history.push('visão-geral');
        //     }
        // }).fail((retorno) => {
        //     console.log('##fail');
        //     console.log(retorno);
        // });
    }
};

export default Facebook;
