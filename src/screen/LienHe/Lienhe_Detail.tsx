import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import COLOR, { BG_COLOR, HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { NativeStackHeaderProps, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamListLienHe } from '../../Stack/RootStackLienHe'

type Props = NativeStackScreenProps<RootStackParamListLienHe>

const Lienhe_Detail = ({ route, navigation }: Props) => {
    return (
        <View style={{ backgroundColor: BG_COLOR, width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP }}>
            <Pressable onPress={() => navigation.goBack()}>
                <Icon name='chevron-back' size={26} color={COLOR.white} />
            </Pressable>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                    <Image style={{ width: 100, height: 100, backgroundColor: COLOR.white, borderRadius: 50 }} source={require('../../assets/logo.png')} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.white, marginTop: 10 }}>Lê Trung Hậu Nhỏ</Text>
                    <Text style={{ fontSize: 16, color: COLOR.white, marginTop: 10 }}>0345625243</Text>
                </View>
            </View>
            <View style={{ backgroundColor: COLOR.white, height: HEIGHT / 1.5, width: WIDTH, position: 'absolute', bottom: 0, borderTopLeftRadius: 35, borderTopRightRadius: 35, alignItems: 'flex-start', paddingVertical: 30, rowGap: 10, paddingLeft: 25 }} >
                <View style={{ width: '100%', height: 'auto', flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', rowGap: 5 }}>
                        <Text style={{
                            color: COLOR.gray,
                            fontSize: 18,
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                        }}>Số điện thoại</Text>
                        <Text style={{
                            color: COLOR.black,
                            fontSize: 18,
                            fontFamily: 'Poppins',
                            fontWeight: '400',
                        }}>0345625243</Text>
                    </View>
                    <Icon name='call' size={26} color={COLOR.orange} style={{ backgroundColor: '#E9ECEF', position: 'absolute', right: 20, padding: 20, borderRadius: 50, alignSelf: 'center' }} />
                </View>
            </View>

        </View >
    )
}

export default Lienhe_Detail

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