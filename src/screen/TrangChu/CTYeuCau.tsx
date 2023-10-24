import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CTYeuCau = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 16, color: 'black', fontWeight:'400'}}>Tên người yêu cầu: </Text>
            <View style={styles.detail}>
                <View style={styles.img}>
                    <Image source={require('../../assets/Profile.png')} style={{width: 50, height: 50}} />
                </View>
                <View style={styles.text}> 
                    <Text style={{fontSize: 18, color: 'black', fontWeight:'500'}}>Lê Văn Hiếu</Text>
                    <Text style={{fontSize: 16, color: 'black', fontWeight:'400'}}>01234567</Text>
                </View>
                <TouchableOpacity style={styles.img}>
                    <Image source={require('../../assets/LienHe.png')} style={{width: 50, height: 50}} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 30}}>
                <View style={{flexDirection: 'row', width: '70%', marginTop:10}}>
                    <Text style={{fontWeight:'400', color: 'black', fontSize: 18}}>Thời Gian: </Text>
                    <Text style={{fontWeight:'500', color: 'black', fontSize: 18}}>9h20</Text>
                </View>
                <View style={{flexDirection: 'row', width: '70%', marginTop:20}}>
                    <Text style={{fontWeight:'400', color: 'black', fontSize: 18}}>Phòng: </Text>
                    <Text style={{fontWeight:'500', color: 'black', fontSize: 18}}>T1010</Text>
                </View>
                <View style={{flexDirection: 'row', width: '70%', marginTop:20}}>
                    <Text style={{fontWeight:'400', color: 'black', fontSize: 18}}>Mô tả sự cố: </Text>
                    <Text style={{fontWeight:'500', color: 'black', fontSize: 18}}>Bóng đèn cháy, lỗi Ti vi, lỗi điều hòa hòa hòa, Bóng đèn cháy, lỗi Ti vi, lỗi điều hòa hòa hòa</Text>
                </View>
            </View>
        <TouchableOpacity style={styles.btn}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>Tiếp Nhận</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CTYeuCau

const styles = StyleSheet.create({
    btn:{
        marginTop: 50,
        width: '100%',
        height: 50,
        backgroundColor: '#DE741C',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        width: '60%'
    },
    img:{
        width: '20%',
    },
    detail: {
        marginTop: 20,
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    container:{
        width: '100%',
        padding: 15,
    }
})