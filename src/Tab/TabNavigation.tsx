import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TrangChu from '../screen/Home/TrangChu';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TrangChuNavigation from '../Stack/StackNavigation';
import { RootBottomTab, configTab } from './RootTab';
import COLOR, { BG_COLOR } from '../utilities';
const Tab = createMaterialBottomTabNavigator();

export function BottomTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"TrangChu"}
                activeColor={COLOR.orange}
                shifting
                barStyle={{ maxHeight: 70, backgroundColor: COLOR.white, borderTopWidth: 0.2 }}
                screenOptions={(route: any) => configTab(route)}
            >
                {RootBottomTab().map((item: any) => {
                    return <Tab.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
                })}
            </Tab.Navigator>
        </NavigationContainer>
    );
}