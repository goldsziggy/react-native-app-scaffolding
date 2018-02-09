import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import createStore from './src/redux/create';
import styled from 'styled-components';
import { registerScreens } from './src/screens/index';
import { Platform } from 'react-native';

const store = createStore();

registerScreens(store, Provider);

export default class App {
    constructor() {
        // since react-redux only works on components, we need to subscribe this class manually
        store.subscribe(this.onStoreUpdate.bind(this));
        store.dispatch(appActions.appInitialized());
    }

    startApp(root) {
        switch (root) {
            case 'login':
                if (Platform.OS === 'ios') {
                    Navigation.startSingleScreenApp({
                        screen: {
                            screen: 'Login',
                            title: 'Login',
                            navigatorStyle: {}
                        },
                        passProps: {}
                    });
                } else {
                    Navigation.startSingleScreenApp({
                        screen: {
                            screen: 'Login',
                            title: 'Login',
                            navigatorStyle: {}
                        },
                        passProps: {}
                    });
                }
                return;
            default:
                console.error('Unknown app root');
        }
    }
}
