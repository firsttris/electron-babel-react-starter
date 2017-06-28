import React, {Component} from 'react';
import {connect} from 'react-redux';
import LinkItem from './../../components/LinkItem'

const fixedNavBarStyle = {
    width: '100%',
    borderBottom: '1px solid #61DAFB'
};

const ulStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#222'
};

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            linkitem: 0
        }
    }

    onClick(index, e) {
        this.setState({linkitem: index});
    }

    render() {
        return (
            <div style={fixedNavBarStyle}>
                <ul style={ulStyle}>
                    <div onClick={this.onClick.bind(this, 1)}>
                        <LinkItem focus={this.state.linkitem === 1} path="/" name="App"/>
                    </div>
                    <div onClick={this.onClick.bind(this, 2)}>
                        <LinkItem focus={this.state.linkitem === 2} path="/What" name="What"/>
                    </div>
                    <li style={{
                        display: 'block',
                        color: 'white',
                        textAlign: 'center',
                        padding: '14px 16px',
                        textDecoration: 'none',
                        float: 'right'
                    }}>{this.props.user.name}{' '}{this.props.user.chipId}</li>
                </ul>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        'user': state.currentUser
    }
}

export default connect(mapStateToProps)(Nav);