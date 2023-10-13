/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/pages/Home';
import SearchScreen from './src/pages/Search';
import SearchResultScreen from './src/pages/SearchResult';
import BottomMenu from './src/components/BottomMenu';

import IconHome from "./src/assets/img/icons/icon-home.svg";
import IconSearch from "./src/assets/img/icons/icon-search.svg";


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const BottomNav = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
    <NavigationContainer>
      <BottomNav.Navigator>
        <BottomNav.Screen name="Home" component={HomeScreen} options={{
          title: 'Accueil',
          headerStyle: {
            backgroundColor: '#4B77BD',
          },
          headerTintColor: '#FCFCFC',
        }} />
        <BottomNav.Screen name="Search" component={SearchScreen} options={{
          title: 'Rechercher',
          headerStyle: {
            backgroundColor: '#4B77BD',
          },
          headerTintColor: '#FCFCFC'
        }} />
        <BottomNav.Screen name="Result" component={SearchResultScreen} options={{
          title: 'Résultat de recherche',
          headerStyle: {
            backgroundColor: '#4B77BD',
          },
          headerTintColor: '#FCFCFC',
        }} />
      </BottomNav.Navigator>
      <BottomMenu></BottomMenu>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    background: "linear-gradient(1deg, #74C0E4 -37.43 %, #6E92CC 70.64 %)",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
