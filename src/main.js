/**
 * Created by qingclass on 17/5/24.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./app', () => {
        render(App)
    });
}
