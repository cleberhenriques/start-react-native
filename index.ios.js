// Import a library to help create a Component

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Create a Component

const App = () => (
  <View>
    <Header headerText={'Ola Mundo'} />
    <AlbumList />
  </View>
);

// Render it to the device.
AppRegistry.registerComponent('albums', () => App);
