import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

let defaultData = {};

fetch("https://api.openweathermap.org/data/3.0/onecall?lat=44.833328&lon=-0.56667&exclude=minutely&appid=1647a8b5e99a3cb5cef0b135e999fbb9")
    .then((response) => {
        defaultData = response;
    })

function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

export default function HomeScreen({ navigation }) {
    return (
        <LinearGradient colors={['#74C0E4', '#6E92CC']} style={styles.Container}>
            <Text style={styles.DateStyle}>{formatDate(new Date())}</Text>
            <Text style={styles.TemperatureStyle}>10°</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(1deg, #74C0E4 -37.43%, #6E92CC 70.64%)',
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
