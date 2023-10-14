import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TrangChu from '../screen/Home/TrangChu';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TrangChuNavigation from '../Stack/StackNavigation';
import { RootBottomTab, configTab } from './RootTab';
const Tab = createMaterialBottomTabNavigator();

export function BottomTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="TrangChu"
                shifting
                barStyle={{maxHeight:70}}
                screenOptions={(route :any) => configTab(route)}
            >
                {RootBottomTab().map((item: any) => {
                    return <Tab.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
                })}
            </Tab.Navigator>
        </NavigationContainer>
    );
}