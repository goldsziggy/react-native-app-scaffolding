import React, { Component } from 'react';
import styled from 'styled-components';

export const Notch = styled.View`
    height: 22px;
    background-color: #e56027;
`;

export const Header = styled.Text`
    font-size: 34px;
    color: #fff;
    text-align: center;
    padding: 8px;
`;

export const Body = styled.View`
    flex: 1;
    background-color: #1a364e;
`;

export default class App extends Component {
    render() {
        return (
            <Body>
                <Notch />
                <Header>React Native App Scaffolding</Header>
            </Body>
        );
    }
}
