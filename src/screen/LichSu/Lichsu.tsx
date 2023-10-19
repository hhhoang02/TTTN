import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLOR, { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { RootStackLichSuEnum } from '../../Stack/RootStackLichSu'


interface LichSu {
    id: number,
    avatar: any,
    suco: string,
    ten: string,
    thoigian: string,
    sdt: string
}

const RenderItem = (props: any) => {
    const { item } = props.data;
    const { navigation }: NativeStackHeaderProps = props;
    return (
        <Pressable onPress={() => navigation.navigate(RootStackLichSuEnum.LichSu_ChiTiet)} style={{ flexDirection: 'row', paddingHorizontal: PADDING_HORIZONTAL, alignItems: 'center', width: WIDTH, height: HEIGHT / 9, marginBottom: 5, columnGap: 15, borderBottomWidth: 1, borderColor: '#d9d9d9' }}>
            <Image source={item.avatar} style={{ width: 60, height: 60, borderRadius: 50, borderWidth: 0.5, borderColor: COLOR.gray }} />
            <View style={{ flexDirection: 'column', justifyContent: 'center', rowGap: 5 }}>
                <Text style={{ color: '#804F1E', fontSize: 19, fontFamily: 'Helvetica Neue', fontWeight: '700', letterSpacing: 0.60, }}>{item.suco}</Text>
                <Text style={{ color: '#5EC401', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'capitalize' }}>{item.ten}</Text>
                <View style={{ flexDirection: 'row', columnGap: 10 }}>
                    <Text style={styles.textBottom}>{item.thoigian}</Text>
                    <Text style={styles.textBottom}> SĐT: {item.sdt}</Text>
                </View>
            </View>
        </Pressable>
    )
}
const LichSu = ({ navigation }: NativeStackHeaderProps) => {
    return (
        <View style={{ backgroundColor: BG_COLOR, width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <Image style={{ width: 50, height: 50, backgroundColor: COLOR.white, borderRadius: 50 }} source={require('../../assets/logo.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.white, marginTop: 10 }}>Lê Trung Hậu Nhỏ</Text>
                </View>
                <View style={{ position: 'absolute', right: 0 }}>
                    <Icon name='bell-outline' size={30} color={COLOR.white} />
                </View>
            </View>
            <View style={{ backgroundColor: COLOR.white, height: HEIGHT / 1.3, width: WIDTH, position: 'absolute', bottom: 0, borderTopLeftRadius: 35, borderTopRightRadius: 35, alignItems: 'center', paddingVertical: 20, rowGap: 10 }} >
                <Text style={{ color: '#593E67', fontSize: 24, fontFamily: 'Helvetica Neue', fontWeight: '700' }}>LỊCH SỬ</Text>
                <FlatList
                    data={data}
                    renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default LichSu

const styles = StyleSheet.create({
    textBottom: {
        color: '#804F1E',
        fontSize: 14,
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        textTransform: 'capitalize',
    }
})
const data: LichSu[] = [
    {
        id: 1,
        avatar: require('../../assets/logo.png'),
        suco: 'Sự cố về cơ sở vật chất',
        ten: 'Lê Trung Hậu',
        thoigian: '10/12/2023 9:40 AM',
        sdt: '0345625243'
    },
    {
        id: 2,
        avatar: require('../../assets/logo.png'),
        suco: 'Sự cố về cơ sở vật chất',
        ten: 'Lê Trung Hậu',
        thoigian: '10/12/2023 9:40 AM',
        sdt: '0345625243'
    },
    {
        id: 3,
        avatar: require('../../assets/logo.png'),
        suco: 'Sự cố về cơ sở vật chất',
        ten: 'Lê Trung Hậu',
        thoigian: '10/12/2023 9:40 AM',
        sdt: '0345625243'
    },
    {
        id: 4,
        avatar: require('../../assets/logo.png'),
        suco: 'Sự cố về cơ sở vật chất',
        ten: 'Lê Trung Hậu',
        thoigian: '10/12/2023 9:40 AM',
        sdt: '0345625243'
    },
    {
        id: 5,
        avatar: require('../../assets/logo.png'),
        suco: 'Sự cố về cơ sở vật chất',
        ten: 'Lê Trung Hậu',
        thoigian: '10/12/2023 9:40 AM',
        sdt: '0345625243'
    },
]