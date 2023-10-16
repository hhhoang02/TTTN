import { Alert, Image, Modal, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import COLOR, { BG_COLOR, BUTTON_COLOR, HEIGHT, WIDTH } from '../../utilities';

interface Item {
    id: number;
    name: string;
}
const DangNhap = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [focus, setFocus] = useState<number>(0);
    const [choseSchool, setChoseSchool] = useState<string>('Lựa chọn cơ sở');

    const Item = ({ item }: { item: Item }) => {
        return (
            <Pressable onPress={() => { setFocus(item.id), setChoseSchool(item.name) }} style={{ maxWidth: '100%', borderBottomWidth: 1, alignItems: 'center' }}>
                <Text style={[{ fontSize: 17, fontWeight: '500', color: focus === item.id ? '#ff8800' : '#626262' },]}>{item.name}</Text>
            </Pressable>
        )
    }
    return (
        <View style={{ backgroundColor: COLOR.white, width: WIDTH, height: HEIGHT, justifyContent: 'center' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                hardwareAccelerated
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ rowGap: 10 }}>
                            {data.map((item: any) => {
                                return <Item item={item} key={item.id} />
                            }
                            )}
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Xác nhận</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <StatusBar barStyle="light-content" backgroundColor={BG_COLOR} />
            <View style={{ position: 'absolute', top: 0, height: HEIGHT / 3, width: WIDTH, backgroundColor: BG_COLOR, borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: COLOR.white, borderRadius: 20, borderWidth: 0.5, borderColor: '#d7d7d7', width: WIDTH / 1.3, height: HEIGHT / 2, alignSelf: 'center' }}>
                <Image style={{ width: 180, height: 90, marginTop: 30 }} source={require('../../assets/logo.png')} />
                <View style={{ width: '100%', alignItems: 'center', paddingTop: 60, rowGap: 40 }}>
                    <TouchableOpacity style={[{ width: '80%', height: 'auto', paddingVertical: 5, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#d6d6d6', backgroundColor: '#ececec' }, styles.elevation]}
                        onPress={() => setModalVisible(true)}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.gray }}>{choseSchool}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[{ width: '80%', height: 45, borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#d6d6d6', backgroundColor: BUTTON_COLOR }, styles.elevation]}>

                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLOR.white }}>Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DangNhap

const styles = StyleSheet.create({
    elevation: {
        elevation: 5,
        shadowColor: '#202020',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 250,
        height: 350,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: '50%',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        position: 'absolute',
        bottom: 20,

    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#ff8800',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
const data = [
    {
        id: 1,
        name: 'FPT Polytechnic HO',
    },
    {
        id: 2,
        name: 'FPT Polytechnic Hà Nội',
    },
    {
        id: 3,
        name: 'FPT Polytechnic Hồ Chí Minh',
    },
    {
        id: 4,
        name: 'FPT Polytechnic Đà nẵng',
    },
    {
        id: 5,
        name: 'FPT Polytechnic Cần thơ',
    },
    {
        id: 6,
        name: 'FPT Polytechnic Tây Nguyên',
    },
    {
        id: 7,
        name: 'FPT Polytechnic Hải Phòng',
    }
]