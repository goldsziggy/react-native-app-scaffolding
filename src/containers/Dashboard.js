import React, { Component } from 'react';
import { Body, Screen } from '../shared/components/';
import styled from 'styled-components';

const List = styled.View``;

const Item = styled.Text`
    color: #fff;
`;

export default class Dashboard extends Component {
    render() {
        return (
            <Body>
                <Screen>
                    <List>
                        <Item>To Edit this page go to /src/containers/Dashboard.js</Item>
                    </List>
                </Screen>
            </Body>
        );
    }
}
