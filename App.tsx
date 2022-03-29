/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeComponent from './src/app/components/home-component/HomeComponent';
import TasksComponent from './src/app/components/tasks-component/TasksComponent';
import ListComponent from './src/app/components/list-component/ListComponent';
import { Provider } from 'react-redux';
import store from './src/app/store/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{title: "Hola"}}/>

          <Stack.Screen
          name="Tasks"
          component={TasksComponent}
          options={{title: "Tareas"}}/>

          <Stack.Screen
          name="Lists"
          component={ListComponent}
          options={{title: "Usuarios"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
