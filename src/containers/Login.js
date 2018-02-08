import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { Input } from '../shared/components/Input';
import { Btn as Button } from '../shared/components/Button';
import styled from 'styled-components';

const Screen = styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
`;

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    };
    render() {
        const { username, password } = this.state;
        return (
            <Screen>
                <Input
                    height="25px"
                    width="75%"
                    returnKeyType="next"
                    keyboardAppearance="dark"
                    placeholder="Username"
                    value={username}
                    autoCorrect={false}
                    onChangeText={username => this.setState({ username })}
                />
                <Input
                    secureTextEntry
                    height="25px"
                    width="75%"
                    returnKeyType="done"
                    keyboardAppearance="dark"
                    placeholder="Password"
                    value={password}
                    onChangeText={password => this.setState({ password })}
                />
                <Button
                    height="45px"
                    width="75%"
                    onSubmitEditing={Keyboard.dismiss}
                    onPress={() => console.log(username, password)}
                    value="Login"
                />
            </Screen>
        );
    }
}
