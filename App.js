import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import { NavigationContainer } from '@react-navigation/native';
import Screen3 from './component/Screen3';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Today's Games" component={Home} />
        <Stack.Screen
          name="Profile"
          component={Screen3}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Image
                source={require('./component/logo.png')}
                style={{ width: 40, height: 40, marginLeft: 5 }}
                resizeMode="contain"
              />
            ),
            headerRight: () => (
              <Image
                source={require('./component/msg.png')}
                style={{ width: 40, height: 40, marginRight: 5 }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
