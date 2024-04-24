import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomHeader from './components/CustomHeader';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Lista de Pedidos" 
            component={Home}
            options={({ navigation }) => ({
              header: () => <CustomHeader navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
