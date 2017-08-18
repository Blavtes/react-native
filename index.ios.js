/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Main = require('./component/main/QLMain')
export default class MyApp extends Component {
  render() {
    return (
      <Main/>
    );
  }
}


AppRegistry.registerComponent('MyApp', () => MyApp);
