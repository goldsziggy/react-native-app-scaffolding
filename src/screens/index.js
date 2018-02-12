import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import Login from '../../src/containers/Login';

export function registerScreens() {
    Navigation.registerComponent('Login', () => Login, store, Provider);
}
