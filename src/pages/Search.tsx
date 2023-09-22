import {
    Text,
    View,
    Button,
    TextInput,
    StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchResultScreen from './SearchResult';



const SearchScreen = ({ navigation }) => {

    const [data, setData] = useState({});
    const getCities = (input: string) => {
        fetch('https://geo.api.gouv.fr/communes?nom=' + input + '&boost=population&limit=5')
            .then((response) => {
                response.json()
                    .then((res) => {
                        setData(res);
                        console.log(data);
                    })
            })
    }

    return (
        <LinearGradient colors={['#74C0E4', '#6E92CC']} style={styles.Container}>

            <TextInput
                style={styles.input}
                placeholder="Rechercher"
                onChangeText={getCities}
            />
            {data.map((city) => (
                <Text>{city.nom}</Text>
            ))}
        </LinearGradient>
    );
}
export default SearchScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderRadius: 12,
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
        color: '#FCFCFC',
        backgroundColor: 'rgba(252, 252, 252, 0.25)',
    },
});