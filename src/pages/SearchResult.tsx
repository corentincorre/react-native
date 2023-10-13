import {
    Text,
    StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SearchResultScreen = ({ route, navigation }) => {
    const { city } = route.params;
    console.log(city)
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);

    function getDataFromApi(city: string) {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=1647a8b5e99a3cb5cef0b135e999fbb9&lang=fr&units=metric')
            .then((data) => {
                data.json()
                    .then((res) => {
                        setData({
                            temp: res.list[0].main.temp,
                            wind: res.list[0].wind.speed,
                            humidity: res.list[0].main.humidity
                        });
                        setLoading(false);
                    })
            })
    }

    useEffect(() => {
        getDataFromApi(city);
    }, []);

    function formatDate(date: Date) {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('fr-FR', options).format(date);
    }

    return (
        isLoading ? <Text style={styles.DateStyle}>Chargement...</Text> : <LinearGradient colors={['#74C0E4', '#6E92CC']} style={styles.Container}>
            <Text style={styles.CityStyle}>{city}</Text>
            <Text style={styles.DateStyle}>{formatDate(new Date())}</Text>
            <Text style={styles.TemperatureStyle}>{data.temp}°</Text>
            <Text style={styles.DateStyle}>humidité : {data.humidity} g/m³</Text>
            <Text style={styles.DateStyle}>vent : {data.wind} km/h</Text>
        </LinearGradient>
    );
}

export default SearchResultScreen;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    CityStyle: {
        fontWeight: "700",
        fontSize: 24,
        color: '#FCFCFC',
    },

    DateStyle: {
        fontSize: 20,
        color: '#FCFCFC',
    },
    TemperatureStyle: {
        fontWeight: "600",
        fontSize: 72,
        color: '#FCFCFC',
    },
    Return: {

        position: "absolute",
        top: 10,
        left: 20,
    },
    ReturnText: {
        fontSize: 20,
        fontWeight: "700",
        color: "#FCFCFC"
    }

});