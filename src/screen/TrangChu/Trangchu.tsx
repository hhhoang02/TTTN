import { FlatList, FlatListProps, Image, ListRenderItem, ListRenderItemInfo, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLOR, { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { RootStackTrangChuEnum } from '../../Stack/RootStackTrangChu'

interface SERVICE_ONLINE {
    id: number,
    name: string,
    vector: any,
    description: string

}

const itemServiceOnline = ({ item }: { item: SERVICE_ONLINE }) => (
    <TouchableOpacity style={{ width: WIDTH / 2.2, height: WIDTH / 2, backgroundColor: COLOR.orange, marginBottom: 10, alignItems: 'center', flexDirection: 'column', borderRadius: 10, rowGap: 5, padding: 5 }}>
        <Image source={item.vector} style={{ maxWidth: '90%', maxHeight: 100 }} />
        <Text style={{ color: COLOR.white, fontSize: 17, fontWeight: '600' }}>{item.name}</Text>
        <Text style={{ color: COLOR.white }}>{item.description}</Text>
    </TouchableOpacity>
)
const TrangChu = ({ navigation }: NativeStackHeaderProps) => {
    return (
        <View style={{ backgroundColor: BG_COLOR, width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <Image style={{ width: 50, height: 50, backgroundColor: COLOR.white, borderRadius: 50 }} source={require('../../assets/logo.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.white, marginTop: 10 }}>Lê Trung Hậu Nhỏ</Text>
                </View>
                <Pressable onPress={() => navigation.navigate(RootStackTrangChuEnum.ThongBao)} style={{ position: 'absolute', right: 0 }}>
                    <Icon name='bell-outline' size={30} color={COLOR.white} />
                </Pressable>
            </View>
            <View style={{ backgroundColor: COLOR.white, height: HEIGHT / 1.3, width: WIDTH, position: 'absolute', bottom: 0, borderTopLeftRadius: 35, borderTopRightRadius: 35, alignItems: 'center', paddingVertical: 20, rowGap: 10 }} >
                <Text style={{ color: '#B85B56', fontSize: 20, fontWeight: '700' }}>Dịch vụ trực tuyến</Text>
                <FlatList
                    data={data}
                    numColumns={2}
                    columnWrapperStyle={{ columnGap: 10 }}
                    renderItem={itemServiceOnline}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default TrangChu

const styles = StyleSheet.create({})
const data: SERVICE_ONLINE[] = [
    {
        id: 1,
        name: 'Báo cáo sự cố',
        vector: require('../../assets/BCSC.png'),
        description: 'Gửi báo cáo sự cố tới bộ phận chịu trách nhiệm'
    },
    {
        id: 2,
        name: 'Hỗ trợ CNTT',
        vector: require('../../assets/HTCNTT.png'),
        description: 'Yêu cầu hỗ trợ liên quan tới mạng, máy tính,...'
    },
    {
        id: 3,
        name: 'Mượn phòng',
        vector: require('../../assets/MP.png'),
        description: 'Quản lý mượn phòng học, hội trường'
    }
]