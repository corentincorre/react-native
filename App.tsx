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

import IconHome from "./src/assets/img/icons/icon-home.svg";
import IconSearch from "./src/assets/img/icons/icon-search.svg";


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const BottomNav = createBottomTabNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
    <NavigationContainer>
      <BottomNav.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          switch (route.name) {
            case 'Home': {
              return <IconHome width={45} height={45} fill={focused ? '#EB9632' : '#FCFCFC'} />;
            }
            case 'Search': {
              return <IconSearch width={45} height={45} fill={focused ? '#EB9632' : '#FCFCFC'} />;
            }
            default: {
              return <IconHome width={45} height={45} fill={focused ? '#EB9632' : '#FCFCFC'} />;
            }
          }
        },
        tabBarActiveTintColor: '#EB9632',
        tabBarInactiveTintColor: '#FCFCFC',
        tabBarStyle: {
          backgroundColor: '#4B77BD',
          height: 67,
          fontSize: 14,
        },
        tabBarHideOnKeyboard: true,
      })}>
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
          unmountOnBlur: true,
          tabBarButton: () => null
        }} />
      </BottomNav.Navigator>
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
