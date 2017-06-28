import React from 'react';
import NotFound from './NotFound';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom'
import createHistory from 'history/createMemoryHistory'

test('Display Component', () => {
    const component = renderer.create(
        <Router history={createHistory()}>
            <NotFound/>
        </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});