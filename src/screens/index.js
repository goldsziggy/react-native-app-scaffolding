import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import { createStore } from '../redux/create'

import Login from '../../src/containers/Login';

const store = createStore();

export function registerScreens() {
    Navigation.registerComponent('Login', () => Login, store, Provider);
}
