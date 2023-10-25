import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import HienCo from './HienCo';
import DangTiepNhan from './DangTiepNhan';

const renderScene = SceneMap({
    HienCo: HienCo,
    DangTiepNhan: DangTiepNhan,
});



const DSSuCo = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'HienCo', title: 'Sự cố hiện có' },
        { key: 'DangTiepNhan', title: 'Đang tiếp nhận' },
    ]);

    return (
        <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
            <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'white' }}
            style={{ backgroundColor: '#FFA500', margin: 10 , borderRadius: 10}}
            />
        )}
    />
  )
}

export default DSSuCo

const styles = StyleSheet.create({
    container:{
        color: 'orange',
    }
})