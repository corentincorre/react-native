import {
    Text,
    Pressable,
    TextInput,
    StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





const SearchScreen = ({ navigation }) => {

    const Stack = createNativeStackNavigator();
    const [data, setData] = useState({});
    const getCities = (input: string) => {
        fetch('https://geo.api.gouv.fr/communes?nom=' + input + '&boost=population&limit=5')
            .then((response) => {
                response.json()
                    .then((res) => {
                        setData(res);
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
            {Object.keys(data).length !== 0 ? data.map((city) => (
                <Pressable style={styles.SearchResult} key={city.nom}
                    onPress={() => navigation.navigate('Result', { city: city.nom })}
                >
                    <Text>{city.nom}</Text>
                </Pressable>
            ))
                : ''}
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
    SearchResult: {
        borderRadius: 12,
        marginTop: 4,
        marginBottom: 4,
        width: "90%",
        height: 40,
        backgroundColor: '#4B77BD',
        padding: 10,
        color: '#FCFCFC',
    },
});