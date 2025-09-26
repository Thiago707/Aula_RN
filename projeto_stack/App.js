import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './tela1';
import DetailsScreen from './tela2';
import ProfileScreen from './tela3';

const Stack = createNativeStackNavigator();

export default function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={HomeScreen}/>
        <Stack.Screen name = "Detalhes" component={DetailsScreen}/>
        <Stack.Screen name = "Perfil" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
