import {
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function SearchResultScreen({ navigation }) {
    return (
        <LinearGradient colors={['#74C0E4', '#6E92CC']} style={styles.Container}>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});