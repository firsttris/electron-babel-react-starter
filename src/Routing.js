import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import App from './container/App'

class Routing extends Component {


    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route component={App}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routing;
