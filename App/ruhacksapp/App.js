import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen'
import MainApp from './components/Dashboard'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen name="Login" component={LoginScreen} />*/}
        <Stack.Screen name="Home" component={MainApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
