import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard } from 'react-native';
import { loginUser } from '../redux/modules/auth';
import { Body, Screen, Input, Button } from '../shared/components/';

class Login extends Component {
    state = {
        company: 'swarming',
        username: '',
        password: ''
    };
    handleSubmit() {
        this.props.loginUser(this.state);
    }
    componentWillUnmount() {
        this.setState({
            company: 'swarming',
            username: '',
            password: ''
        });
    }
    render() {
        const { username, password } = this.state;
        return (
            <Body>
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
                        onSubmitEditing={this.handleSubmit.bind(this)}
                    />
                    <Button height="45px" width="75%" onPress={this.handleSubmit.bind(this)} value="Login" />
                </Screen>
            </Body>
        );
    }
}

function mapStateToProps(state) {
    const { isAuthenticated } = state.auth;
    return {
        isAuthenticated
    };
}

export default connect(mapStateToProps, { loginUser })(Login);
