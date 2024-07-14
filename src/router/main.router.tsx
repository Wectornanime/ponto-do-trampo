import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import colors from '@/styles/colors';

const Drawer = createDrawerNavigator();

export default function MainRouter() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='home'
                    component={HomeScreen}
                    options={{ title: 'Marcar ponto' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}