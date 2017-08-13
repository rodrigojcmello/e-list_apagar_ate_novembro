import React, { Component } from 'react';
const history = require('history').createHashHistory();

class RotaRedirecionar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 20
        };
    }
    componentDidMount() {
        let x = 19;
        this.timer = setInterval(() => {
            if (x >= 0) {
                this.setState({ timer: x });
            } else {
                clearTimeout(this.timer);
                history.push('/');
            }
            x--;
        }, 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        return (
            <div>
                <p>Ops! Esta página não pode ser exibida, uma das causas pode ser:</p>
                <ul>
                    <li>A página não existe</li>
                    <li>O conteúdo foi apagado</li>
                    <li>Falta de permissão de acesso</li>
                </ul>
                <p>Você será redirecionado em { this.state.timer } segundos.</p>
                <p>Dica: Envie listas pelo opção "compartilhar" dentro do aplicativo e não pela URL.</p>
                <p>Até mais :)</p>
            </div>
        );
    }
}

export default RotaRedirecionar;
