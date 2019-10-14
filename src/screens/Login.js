import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Button from '../components/Button';

class Login extends Component {
    state = { 
        user: '',
        password: '',
        isLoading: false
    };

    login = () => {
        const { user, password } = this.state;
        const { navigation } = this.props;
        const uri = 'https://goleafapi.azurewebsites.net/api/TokenAuth/Authenticate';

        this.setState({ isLoading: true });

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                userNameOrEmailAddress: user,
                password,
                rememberClient: false,
                returnUrl: null,
                singleSignIn: false,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        };

        fetch(uri, requestInfo)
        .then(response => {
            this.setState({ isLoading: false });

            if (response.ok) {
                return response.text();
            }
        })
        .then(response => {
            const result = JSON.parse(response).result;
            const { accessToken } = result;

            AsyncStorage.setItem('accessToken', accessToken);
            navigation.push('Airplanes', {
                accessToken
            });
        });
    }

    render() {
        const { user, password, isLoading } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.title}>Precisamos de seus dados para continuar o login</Text>
                    <TextInput 
                    value={user} 
                    autoCapitalize="none" 
                    placeholder="Entre com Email ou Login" 
                    style={styles.input}
                    onChangeText={user => this.setState({ user })}
                    />
                    <TextInput 
                    secureTextEntry 
                    value={password} 
                    autoCapitalize="none" 
                    placeholder="Entre com a senha" 
                    style={styles.input}
                    onChangeText={password => this.setState({ password })}
                    />
                    <Button label={isLoading ? 'Carregando...' : 'Entrar'} onPress={this.login} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    body: {
        paddingLeft: 16,
        paddingRight: 16,
    },
    input: {
        borderBottomColor: '#666',
        borderBottomWidth: 1,
        fontSize: 16,
        paddingBottom: 16,
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 32
    }
});

export default Login;