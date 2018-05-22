import React, { Component } from 'react';
import { Body, Screen } from '../shared/components/';
import styled from 'styled-components';

const WebWrapper = styled.WebView.attrs({
    source: {
        uri: 'https://bulkr.swarming.io'
    }
})`
    flex: 1;
`;

export default class Dashboard extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };
    render() {
        return <WebWrapper />;
    }
}
