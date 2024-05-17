import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/HomeScreen';
import { HomeStack } from './stack';

const Drawer = createDrawerNavigator();

export const MyDrawer =() => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio" component={HomeStack} />
      <Drawer.Screen name="Dueños" component={HomeStack} />
      <Drawer.Screen name="Mascotas" component={HomeStack} />
      <Drawer.Screen name="Citas" component={HomeStack} />
      <Drawer.Screen name="Desparasitaciones" component={HomeStack} />
    </Drawer.Navigator>
  );
}