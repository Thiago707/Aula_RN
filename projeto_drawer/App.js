import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './tela1';
import PerfilScreen from './tela2';

const Drawer = createDrawerNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Perfil" component={PerfilScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}