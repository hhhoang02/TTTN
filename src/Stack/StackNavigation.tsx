
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackTrangChu, configStack } from './RootStack';
    
const Stack = createNativeStackNavigator();
const TrangChuNavigation = () => {

    return <Stack.Navigator initialRouteName='TrangChu' screenOptions={(props) => configStack(props)} >
        {RootStackTrangChu().map((item: any) => {
            return <Stack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
        })}
    </Stack.Navigator>
}


export default TrangChuNavigation
