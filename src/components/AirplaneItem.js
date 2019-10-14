import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AirplaneItem extends Component {
    render() {
        const { airplane } = this.props;
        return (
            <View style={styles.container}>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>{`Modelo: ${airplane.model}`}</Text>
                <Text style={styles.text}>{`Número: ${airplane.number}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FF7020',
        borderRadius: 5,
        marginBottom: 16
    },
    text: {
        color: '#FFF'
    }
});

export default AirplaneItem;