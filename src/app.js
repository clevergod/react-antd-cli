/**
 * Created by qingclass on 17/5/26.
 */
import React,{ Component } from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import routes from './router'

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <div id="contain">
                    {
                        routes.map((route,index) => (
                            <Route key={index}
                                   path={route.path}
                                   component={route.component}
                            />
                        ))
                    }
                </div>
            </BrowserRouter>
        )
    }
}
export default App