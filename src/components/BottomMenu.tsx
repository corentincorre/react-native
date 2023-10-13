import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    Pressable,
    StyleSheet,
} from 'react-native';

import IconHome from "../assets/img/icons/icon-home.svg";
import IconSearch from "../assets/img/icons/icon-search.svg";

const BottomNavComponent = () => {

    const { navigate }: any = useNavigation();
    return (
        <View style={styles.Menu}>
            <Pressable style={styles.MenuItem}
                onPress={() => navigate('Home')} >
                <IconHome width={32} height={32} />
                <Text style={styles.MenuText}>Accueil</Text>
            </Pressable>
            <Pressable style={styles.MenuItem}
                onPress={() => navigate('Search')} >
                <IconSearch width={32} height={32} />
                <Text style={styles.MenuText}>Recherche</Text>
            </Pressable>
        </View>
    );
}

export default BottomNavComponent;

const styles = StyleSheet.create({
    Menu: {
        display: "flex",
        flexDirection: "row",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#4B77BD',
        height: 64,
    },
    MenuItem: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    MenuIcon: {
        height: 32,
        width: 32,
        tintColor: 'white',
    },
    MenuText: {
        color: "#FCFCFC",
    }
})