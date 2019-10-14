import React, { Component } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text, View } from 'react-native';

import AirplaneItem from '../components/AirplaneItem';

class Airplanes extends Component {
    state = {
        airplanes: []
    }

    getAirplanes = () => {
        const { accessToken } = this.props.navigation.state.params;
        const uri = 'https://goleafapi.azurewebsites.net/api/services/app/Airplanes/GetAll?SkipCount=0&MaxResultCount=10';
        const requestInfo = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        };

        fetch(uri, requestInfo)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
        })
        .then(response => {
            const result = JSON.parse(response).result;
            this.setState({ airplanes: result.items });
        });
    }

    componentDidMount() {
        this.getAirplanes();
    }

    renderAirplanes = ({ item }) => {
        return (
            <AirplaneItem airplane={item} /> 
        );
    }

    render () {
        const { airplanes } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.title}>Aeronaves</Text>
                    <FlatList 
                    data={airplanes}
                    renderItem={this.renderAirplanes}
                    keyExtractor={item => item.number}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 32
    },
    body: {
        padding: 16
    }
});

export default Airplanes;