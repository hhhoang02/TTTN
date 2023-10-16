import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
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