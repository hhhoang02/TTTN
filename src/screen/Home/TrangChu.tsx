import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BG_COLOR, HEIGHT, WIDTH } from '../../utilities'

const TrangChu = () => {
    return (
        <View style={{ backgroundColor: BG_COLOR, width: WIDTH, height: HEIGHT }}>
            <View style={{ backgroundColor: '#ffffff', height: HEIGHT / 1.3, width: WIDTH, position: 'absolute', bottom: 0, borderTopLeftRadius: 35, borderTopRightRadius: 35 }}/>
            
        </View>
    )
}

export default TrangChu

const styles = StyleSheet.create({})