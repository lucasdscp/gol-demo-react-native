import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends Component {
    render() {
        const { onPress, label } = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.container}>
                    <Text style={styles.label}>{label}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF7020',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export default Button;