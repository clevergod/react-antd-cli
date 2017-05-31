/**
 * Created by qingclass on 17/5/26.
 */
import React,{ Component } from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import ComponentPage from './pages/componentPage';


class App extends Component{
    render() {
        return (
            <HashRouter>
                <div id="contain">
                    <Route path="/home" component={Home}></Route>
                    <Route path="/component" component={ComponentPage}></Route>
                </div>
            </HashRouter>
        )
    }
}
export default App