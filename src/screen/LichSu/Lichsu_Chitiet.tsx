import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import Icon from 'react-native-vector-icons/Ionicons'

const Lichsu_Chitiet = () => {
    return (
        <View style={{ width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP }}>
            <View style={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Icon name='chevron-back' size={26} style={{ position: 'absolute', left: 0 }} />
                <Text style={{
                    color: '#593E67',
                    fontSize: 24,
                    fontFamily: 'Helvetica Neue',
                    fontWeight: '700',
                }}>YÊU CẦU</Text>
            </View>
        </View>
    )
}

export default Lichsu_Chitiet

const styles = StyleSheet.create({})