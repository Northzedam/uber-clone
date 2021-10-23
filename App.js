import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'intl'
import "intl/locale-data/jsonp/en";

if (Platform.OS === "android") {
   // See https://github.com/expo/expo/issues/6536 for this issue. 
   if (typeof (Intl)._disableRegExpRestore === "function") {
      (Intl)._disableRegExpRestore();
    }
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
           behavior={Platform.OS === "ios" ? "padding" : "height"}
           style={ {flex: 1}}
           keyboardVerticalOffset={Platform.OS == "ios" ? -64 : 0}
           >

            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
                />
              <Stack.Screen
              name='MapScreen'
              component={MapScreen}
              options={{
                headerShown: false,
              }}
              />  
            </Stack.Navigator>
          </KeyboardAvoidingView>
          {/*<HomeScreen/>*/}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

