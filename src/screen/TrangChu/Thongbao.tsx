import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLOR, { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import Icon from 'react-native-vector-icons/Ionicons'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'



interface ThongBao {
    id: number,
    tenThongBao: string,
    nguoiDang: string,
    thoiGian: string,
}

const renderItem = ({ item }: { item: ThongBao }) => {
    return (
        <View style={{ width: '100%', height: 'auto', padding: 15, backgroundColor: '#eaeaea', marginBottom: 5, borderRadius: 10, rowGap: 5 }}>
            <Text style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Poppins',
                fontWeight: '500',
            }}>{item.tenThongBao}</Text>
            <Text style={styles.textInfo}>Người đăng: {item.nguoiDang}</Text>
            <Text style={styles.textInfo}>Thời gian: {item.thoiGian}</Text>
        </View>
    )
}

const Thongbao = (props: any) => {
    const { navigation }: NativeStackHeaderProps = props;
    return (
        <View style={{ width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP, rowGap: 20 }}>
            <Pressable onPress={() => navigation.goBack()}>
                <Icon name='chevron-back' size={26} />
            </Pressable>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 85 }}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Thongbao

const styles = StyleSheet.create({
    textInfo: {
        color: COLOR.gray,
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
    }
})
const data: ThongBao[] = [
    {
        id: 1,
        tenThongBao: 'Thông báo bổ sung bằng tốt nghiệp Spring 2023',
        nguoiDang: 'nhuntq20',
        thoiGian: '12/12/2023 14:30'
    },
    {
        id: 2,
        tenThongBao: 'Thông báo bổ sung bằng tốt nghiệp Spring 2023',
        nguoiDang: 'nhuntq20',
        thoiGian: '12/12/2023 14:30'
    },
    {
        id: 3,
        tenThongBao: 'Thông báo bổ sung bằng tốt nghiệp Spring 2023',
        nguoiDang: 'nhuntq20',
        thoiGian: '12/12/2023 14:30'
    },
    {
        id: 4,
        tenThongBao: 'Thông báo bổ sung bằng tốt nghiệp Spring 2023',
        nguoiDang: 'nhuntq20',
        thoiGian: '12/12/2023 14:30'
    },
    {
        id: 5,
        tenThongBao: 'Thông báo bổ sung bằng tốt nghiệp Spring 2023',
        nguoiDang: 'nhuntq20',
        thoiGian: '12/12/2023 14:30'
    },
    {
        id: 6,
        tenThongBao: 'Thông báo bổ sung bằng tốt nghiệp Spring 2023',
        nguoiDang: 'nhuntq20',
        thoiGian: '12/12/2023 14:30'
    },

]