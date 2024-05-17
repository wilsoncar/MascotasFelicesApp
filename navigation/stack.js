import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/screens/HomeScreen';
import DuenosDetailsScreen from '../src/screens/DuenosDetailsScreen';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dueños" component={DuenosDetailsScreen} />
    </Stack.Navigator>
  );
}