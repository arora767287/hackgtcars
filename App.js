import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen";
import SplashScreen from "./components/SplashScreen";
import Vis from "./components/Vis";
import Enviro from "./components/Enviro";
import MyTabs from "./components/MyTabs";
import { Provider } from 'react-native-paper';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            initialRouteName="HomeScreen"
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false}}
            />
          <Stack.Screen
            initialRouteName="Vis"
            name="Vis"
            component={Vis}
            options={{ headerShown: false}}
            />
          <Stack.Screen
            initialRouteName="Enviro"
            name="Enviro"
            component={Enviro}
            options={{ headerShown: false}}
            />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MyTabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
