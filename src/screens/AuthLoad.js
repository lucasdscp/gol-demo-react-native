import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

class AuthLoad extends Component {

    componentDidMount() {
        const { navigation } = this.props;
        
        AsyncStorage.getItem('accessToken')
        .then(token => {
            if (token) {
                navigation.push('Airplanes', {
                    token
                });
            } else {
                navigation.push('Login', {
                    token
                });
            }
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Carregando...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default AuthLoad;