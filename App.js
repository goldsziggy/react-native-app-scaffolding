import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import createStore from './src/redux/create';
import styled from 'styled-components';
import Login from './src/containers/Login';

const store = createStore();

export const Notch = styled.View`
    flex: 0.04;
    background-color: #fff;
`;

export const Header = styled.Text`
    flex: 0.14;
    margin-top: 80px;
    font-size: 34px;
    color: #fff;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Body = styled.View`
    flex: 1;
    background-color: #1a364e;
`;

export default class App extends Component {
    render() {
        const { screen } = this.props;
        return (
            <Provider store={store}>
                <Body>
                    <Notch />
                    <Header>React Native App Scaffolding</Header>
                    {() => {
                        switch (screen) {
                            case 'loggedIn':
                                return <Body>LoggedIn</Body>;
                            default:
                                return <Login />;
                        }
                    }}
                </Body>
            </Provider>
        );
    }
}

function mapStateToProps(state) {
    const { screen } = state.auth;
    return {
        screen
    };
}

connect(mapStateToProps)(Body);
