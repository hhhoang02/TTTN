import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';

import COLOR, {
  BG_COLOR,
  HEIGHT,
  PADDING_HORIZONTAL,
  PADDING_TOP,
  WIDTH,
} from '../../utilities';

import { SelectList } from 'react-native-dropdown-select-list';
interface Report {
  id: number;
  name: string;
  vector: any;
  description: string;
}
const Report = () => {
  const [inputText, setInputText] = useState<string>('');
  const [selected, setSelected] = React.useState<string>('');

  const [description, setDescription] = useState<string>('');

  const handleImagePress = () => {
    const options = {
      title: 'Select Image',

    }
  }

  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Androids' },
    { key: '3', value: 'Cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Iphones' },

  ];
  return (
    <View
      style={{
        backgroundColor: COLOR.white,
        width: WIDTH,
        height: HEIGHT,
        paddingHorizontal: PADDING_HORIZONTAL,
        paddingTop: PADDING_TOP,
      }}>
      <Text
        style={{
          color: 'red',
          fontSize: 30,
          textAlign: 'center',
          marginTop: 10,
          fontWeight: 'bold',
        }}>
        BÁO CÁO SỰ CỐ
      </Text>
      <View style={styles.text}>
        <TextInput value={inputText} placeholder="Phòng" />
      </View>

      <View style={styles.dropdown}>
        <SelectList
          setSelected={(val: any) => setSelected(val)}
          data={data}
          save="value"
          placeholder="Sự cố đang gặp phải"
        />

        <View style={styles.description}>
          <ScrollView style={styles.textAreaContainer}>
            <TextInput
              multiline
              numberOfLines={10}
              style={styles.textArea}
              value={description}
              placeholder="Mô tả sự cố"
            />
          </ScrollView>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <View style={styles.image}>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../../assets/camera.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.image}>
            <TouchableOpacity onPress={handleImagePress}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require('../../assets/image.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Button style={styles.button} textColor="white">
          Gửi yêu cầu
        </Button>
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    color: BG_COLOR,
  },
  text: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  dropdown: {
    marginTop: 20,

  },
  textAreaContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    height: 150,
  },
  textArea: {
    marginTop: -80,
  },
  description: {
    marginTop: 20,
  },
  button: {
    backgroundColor: 'orange',
    marginTop: 30,
    borderRadius: 10,
  },
  image: {
    backgroundColor: '#eaeaea',
    width: 170,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
