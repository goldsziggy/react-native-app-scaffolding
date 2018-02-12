import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import { loginUser } from '../redux/modules/auth';
import { Input, Button } from '../shared/components';

import styled from 'styled-components';

const Screen = styled.View`
    flex: 0.5;
    justify-content: center;
    align-items: center;
`;

class Login extends Component {
    state = {
        company: 'swarming',
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
                    autoCapitalize="none"
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
                <Button height="45px" width="75%" onPress={() => this.props.loginUser(this.state)} value="Login" />
            </Screen>
        );
    }
}

export default connect(null, { loginUser })(Login);
