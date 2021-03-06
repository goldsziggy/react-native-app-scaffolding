import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import store from '../redux/store'

import Login from '../../src/containers/Login';
import Dashboard from '../../src/containers/Dashboard';

export function registerScreens() {
    Navigation.registerComponent('Login', () => Dashboard, store, Provider);
    Navigation.registerComponent('Dashboard', () => Dashboard, store, Provider);
}
