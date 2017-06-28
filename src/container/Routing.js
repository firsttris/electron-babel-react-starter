import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


import NotFound from './../components/NotFound'
import App from './App'
import Nav from './../container/Navigation/Nav'

class Routing extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routing;
