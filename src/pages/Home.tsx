import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';



const HomeScreen = ({ navigation }) => {

    const [defaultPos, setDefaultPos] = useState({});
    const [defaultData, setDefaultData] = useState({});


    function getPosFromApi(city: string) {
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + city + ',FRA&limit=1&appid=1647a8b5e99a3cb5cef0b135e999fbb9')
            .then((data) => {
                data.json()
                    .then((res) => {
                        setDefaultPos({
                            lat: res.lat,
                            lon: res.lon,
                        })
                        console.log(defaultPos);
                    })
            })
    }
    function getDataFromApi(city: string) {
        getPosFromApi(city);
        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=' + defaultPos.lat + '&lon=' + defaultPos.lon + '&exclude=minutely&appid=1647a8b5e99a3cb5cef0b135e999fbb9')
            .then((data) => {
                data.json()
                    .then((res) => {
                        setDefaultPos({
                            lat: res.lat,
                            lon: res.lon,
                        })
                    })
            })
    }
    //const data = getDataFromApi('Bordeaux');

    function formatDate(date: Date) {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
    }
    return (
        <LinearGradient colors={['#74C0E4', '#6E92CC']} style={styles.Container}>
            <Text style={styles.DateStyle}>{formatDate(new Date())}</Text>
            <Text style={styles.TemperatureStyle}>10°</Text>
        </LinearGradient>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    DateStyle: {
        fontSize: 20,
        color: '#FCFCFC',
    },
    TemperatureStyle: {
        fontSize: 72,
        color: '#FCFCFC',
    }
});
