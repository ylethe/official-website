/**
 * Created by grace on 17-4-22.
 */
import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from '../components/App.js';
import Home from '../components/home';
import List from '../components/list';
import Read from '../components/read';

function RouterApp() {
    return(
        <Router history={hashHistory}>
            <Route path = '/' component={App}>
                <IndexRoute component={Home}/>
                <Router path="home" component={Home}/>
                <Router path="list" component={List}/>
                <Router path="read" component={Read}/>
            </Route>
        </Router>
    )

}

export default RouterApp;
