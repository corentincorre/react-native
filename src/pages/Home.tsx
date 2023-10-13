import {
    Text,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const mapBackground = { uri: 'https://www.pngmart.com/files/17/France-Map-Region-PNG-File.png' };

const HomeScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#74C0E4', '#6E92CC']} style={styles.Container}>
            <Text style={styles.WelcomeTextStyle}>Bienvenue sur météo ville</Text>
            <ImageBackground source={mapBackground} style={styles.Map} resizeMode="contain">
            </ImageBackground>
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
    WelcomeTextStyle: {
        fontWeight: "700",
        fontSize: 24,
        marginBottom: 48,
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
    Map: {
        backgroundColor: "rgba(75,119,189,.75)",
        borderRadius: 10,
        padding: 50,
        height: 400,
        width: 400,
    },
    itemMap: {
        position: "absolute",
        backgroundColor: "black",
        color: "#FCFCFC"
    }
});
