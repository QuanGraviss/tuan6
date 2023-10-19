import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import View1 from './screen/screen1';
import View2 from './screen/screen2';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={View1} name='View1'/>
        <Stack.Screen component={View2} name='View2'/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}