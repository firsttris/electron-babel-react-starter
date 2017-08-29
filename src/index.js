import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import Routing from './Routing';
import configureStore from './store/configureStore'
import { saveState, loadState } from './store/localStorage'
import throttle from 'lodash/throttle'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = configureStore(loadState());

store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));


// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

// Now we can render our application into it
render(<Provider store={store}>
        <Routing/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();