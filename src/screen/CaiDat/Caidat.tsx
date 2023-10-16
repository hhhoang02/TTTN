import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import COLOR, { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import Icon from 'react-native-vector-icons/Ionicons'
import { Switch } from 'react-native-paper'

const CaiDat = () => {
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
    return (
        <View style={{ backgroundColor: BG_COLOR, width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP }}>
            <Icon name='chevron-back' size={26} color={COLOR.white} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <Image style={{ width: 100, height: 100, backgroundColor: COLOR.white, borderRadius: 50 }} source={require('../../assets/logo.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.white, marginTop: 10 }}>Lê Trung Hậu Nhỏ</Text>
                    <Text style={{ fontSize: 16, color: COLOR.white, marginTop: 10 }}>0345625243</Text>
                </View>
            </View>
            <View style={{ backgroundColor: COLOR.white, height: HEIGHT / 1.5, width: WIDTH, position: 'absolute', bottom: 0, borderTopLeftRadius: 35, borderTopRightRadius: 35, alignItems: 'flex-start', paddingVertical: 30, rowGap: 10, paddingLeft: 25 }} >
                <View style={styles.item}>
                    <Icon name='person-outline' size={30} style={styles.icon} />
                    <Text style={styles.textItem}>Chỉnh sửa tài khoản</Text>
                    <Icon name='chevron-forward' size={26} style={{ position: 'absolute', right: 20 }} />
                </View>
                <View style={styles.item}>
                    <Icon name='notifications-outline' size={30} style={styles.icon} />
                    <Text style={styles.textItem}>Thông báo</Text>
                    <Switch style={{ position: 'absolute', right: 20 }} value={isSwitchOn} onValueChange={() => setIsSwitchOn(!isSwitchOn)} trackColor={{ true: COLOR.orange, false: COLOR.gray }} thumbColor={isSwitchOn ? COLOR.orange : COLOR.gray} />
                </View>
                <View style={styles.item}>
                    <Icon name='log-out-outline' size={30} style={styles.icon} />
                    <Text style={styles.textItem}>Đăng xuất</Text>
                </View>
            </View>

        </View >
    )
}

export default CaiDat

const styles = StyleSheet.create({
    textItem: {
        color: '#593E67',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '400'
    },
    icon: {
        backgroundColor: '#EDF0F0',
        padding: 10,
        borderRadius: 10
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 20,
        width: '100%'

    }
})