import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLOR, { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import Icon from 'react-native-vector-icons/Ionicons'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListLichSu } from '../../Stack/RootStackLichSu';
import StepIndicator from 'react-native-step-indicator';

type Props = NativeStackScreenProps<RootStackParamListLichSu>;
interface LichSu {
    item: {
        id: number,
        avatar: any,
        suco: string,
        ten: string,
        thoigian: string,
        sdt: string
    }
}
const Lichsu_Chitiet = ({ route, navigation }: Props) => {
    const { item } = route?.params as LichSu;
    console.log(item);

    return (
        <View style={{ width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP }}>
            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 0 }}>
                    <Icon name='chevron-back' size={26} />
                </Pressable>
                <Text style={{ color: '#593E67', fontSize: 24, fontFamily: 'Helvetica Neue', fontWeight: '700', }}>YÊU CẦU</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: HEIGHT / 9, marginTop: 20, columnGap: 15 }}>
                <Image source={item.avatar} style={{ width: 60, height: 60, borderRadius: 50, borderWidth: 0.5, borderColor: COLOR.gray }} />
                <View style={{ flexDirection: 'column', justifyContent: 'center', rowGap: 5 }}>
                    <Text style={{ color: '#804F1E', fontSize: 19, fontFamily: 'Helvetica Neue', fontWeight: '700', letterSpacing: 0.60, }}>{item.suco}</Text>
                    <Text style={{ color: '#5EC401', fontSize: 14, fontFamily: 'Helvetica Neue', fontWeight: '400', textTransform: 'capitalize' }}>{item.ten}</Text>
                    <View style={{ flexDirection: 'row', columnGap: 10 }}>
                        <Text style={styles.textBottom}>{item.thoigian}</Text>
                        <Text style={styles.textBottom}> SĐT: {item.sdt}</Text>
                    </View>
                </View>
            </View>

            <View style={{ width: '100%', height: 200, backgroundColor: 'red' }}>
                <StepIndicator
                    direction={'vertical'}
                    stepCount={3}
                    currentPosition={1}
                    labels={['a', 'b', 'c']}
                    renderStepIndicator={()=><Text></Text>}
                />
            </View>
        </View>
    )
}

export default Lichsu_Chitiet

const styles = StyleSheet.create({
    textBottom: {
        color: '#804F1E',
        fontSize: 14,
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        textTransform: 'capitalize',
    }
})