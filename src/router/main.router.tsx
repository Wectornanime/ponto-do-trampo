import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function MainRouter() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='home' component={HomeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}