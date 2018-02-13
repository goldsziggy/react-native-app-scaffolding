import React from 'react';
import { Navigation } from 'react-native-navigation';
<<<<<<< HEAD
import { Provider } from 'react-redux'
import store from '../redux/store'
=======
import { Provider } from 'react-redux';
import { store } from '../redux/store';
>>>>>>> 97682ca1bd427c669739341f2dfa04bbb0f6d106

import Login from '../../src/containers/Login';
import Dashboard from '../../src/containers/Dashboard';

export function registerScreens() {
    Navigation.registerComponent('Login', () => Login, store, Provider);
    Navigation.registerComponent('Dashboard', () => Dashboard, store, Provider);
}
