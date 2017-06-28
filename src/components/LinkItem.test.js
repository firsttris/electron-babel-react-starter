import React from 'react';
import renderer from 'react-test-renderer';
import LinkItem from "./LinkItem";
import {
    Router
} from 'react-router-dom'
import createHistory from 'history/createMemoryHistory'

test('FadeCard changes the class when hovered', () => {
    const component = renderer.create(
        <Router history={createHistory()}>
            <LinkItem focus={true} path="/" name="App"></LinkItem>
        </Router>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});