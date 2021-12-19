import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dash from './src/Dash';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn';
import Home from './src/Home';

const Stack = createNativeStackNavigator();

function App({ navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dash" component={Dash} options={{headerShown: false}} />
        <Stack.Screen name="Create your account" component={SignUp} />
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;