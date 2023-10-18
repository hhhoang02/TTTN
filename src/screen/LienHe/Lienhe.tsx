import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLOR, { HEIGHT, PADDING_HORIZONTAL, PADDING_TOP, WIDTH } from '../../utilities'
import Icon from 'react-native-vector-icons/Ionicons'
import { RootStackLienHeEnum } from '../../Stack/RootStackLienHe'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

interface Item {
  id: number,
  avatar: any,
  ten: string,
  chucvu: string
}

const RenderItem = (props: any) => {
  const { data } = props;
  const { navigation }: NativeStackHeaderProps = props
  const item: Item = data.item;
  return (
    <Pressable onPress={() => navigation.navigate(RootStackLienHeEnum.Lienhe_Detail)} style={{ width: '100%', height: 'auto', flexDirection: 'row', borderRadius: 10, backgroundColor: '#e0e0e0', marginBottom: 5, padding: 10 }}>
      <Image source={item.avatar} style={{ width: 60, height: 60, borderRadius: 50, borderWidth: 1, borderColor: 'white' }} />
      <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 20, rowGap: 5 }}>
        <Text style={{
          color: 'black',
          fontSize: 17,
          fontFamily: 'Poppins',
          fontWeight: '500',
        }}>{item.ten}</Text>
        <Text style={{
          color: COLOR.gray,
          fontSize: 12,
          fontFamily: 'Poppins',
          fontWeight: '400',
        }}>{item.chucvu}</Text>
      </View>
      <Icon name='chevron-forward' size={26} style={{ alignSelf: 'center', position: 'absolute', right: '5%' }} />
    </Pressable >
  )
}


const LienHe = ({ navigation }: any) => {

  return (
    <View style={{ width: WIDTH, height: HEIGHT, paddingHorizontal: PADDING_HORIZONTAL, paddingTop: PADDING_TOP }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: WIDTH / 5 }}>
        <Icon name='chevron-back' size={26} color={COLOR.gray} style={{ position: 'absolute', left: 0 }} />
        <Text style={{ color: '#593E67', fontSize: 24, fontFamily: 'Poppins', fontWeight: '700' }}>Liên Hệ</Text>
      </View>
      <View style={{ rowGap: 20 }}>
        <View>
          <Text style={{ color: COLOR.gray, fontSize: 16, fontFamily: 'Poppins', fontWeight: '600' }}>Phòng kĩ thuật</Text>
          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <View>
          <Text style={{ color: COLOR.gray, fontSize: 16, fontFamily: 'Poppins', fontWeight: '600' }}>Phòng hành chính</Text>
          <FlatList
            scrollEnabled={false}
            data={data}
            renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </View >
  )
}

export default LienHe

const styles = StyleSheet.create({})
const data: Item[] = [
  {
    id: 1,
    avatar: require('../../assets/logo.png'),
    ten: 'Lê Trung Hậu',
    chucvu: 'Trưởng phòng IT'
  },
  {
    id: 2,
    avatar: require('../../assets/logo.png'),
    ten: 'Lê Trung Hậu',
    chucvu: 'Trưởng phòng IT'
  },
  {
    id: 3,
    avatar: require('../../assets/logo.png'),
    ten: 'Lê Trung Hậu',
    chucvu: 'Trưởng phòng IT'
  },
]