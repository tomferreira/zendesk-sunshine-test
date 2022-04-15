/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';

import { Smooch } from 'react-native-smooch';

const showChat = () => {
  var userId = "555555";
  var jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFwcF82MjU0OWNiYjIzODQxOTAwZjMzYjc2NzUifQ.eyJzY29wZSI6ImFwcFVzZXIiLCJ1c2VySWQiOiI1NTU1NTUiLCJpYXQiOjE2NTAwNDY4MzJ9.oDdJSMP8bIaUjpH5lRADSYe3Fk1L5p6k0_zn1ozsJWc";
  
  Smooch.login(userId, jwt)
    .then(() => {
      Smooch.setFirstName("Maria");
      Smooch.setLastName("Farias");
      Smooch.setEmail("maria.farias@gmail.com");

      Smooch.setUserProperties({ "userId2": userId, "premiumUser": true });

      Smooch.show();
    }, console.error);
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            onPress={() => showChat()}
            title="Abrir chat"
            color="#841584"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
