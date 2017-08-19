import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import Categoria from './Categoria';

class Autenticado extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('### props');
        console.log(this.props);
        return (
            <div>
                <Route path={ this.props.match.url } render={ () => (
                    <Redirect to={ this.props.match.url + '/Categoria' } />
                ) } />
                <Route path={ this.props.match.url + '/Categoria' } component={ Categoria } />
            </div>
        );
    }
}

export default withRouter(Autenticado);
