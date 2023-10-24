import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const CTYeuCau = () => {
  const [click, setClick] = useState<boolean>(false);
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  console.log(click);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
        Tên người yêu cầu:{' '}
      </Text>
      <View style={styles.detail}>
        <View style={styles.img}>
          <Image
            source={require('../../assets/Profile.png')}
            style={{width: 50, height: 50}}
          />
        </View>
        <View style={styles.text}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
            Lê Văn Hiếu
          </Text>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
            01234567
          </Text>
        </View>
        <TouchableOpacity style={styles.img}>
          <Image
            source={require('../../assets/LienHe.png')}
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30}}>
        <View style={{flexDirection: 'row', width: '70%', marginTop: 10}}>
          <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
            Thời Gian:{' '}
          </Text>
          <Text style={{fontWeight: '500', color: 'black', fontSize: 18}}>
            9h20
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '70%', marginTop: 20}}>
          <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
            Phòng:{' '}
          </Text>
          <Text style={{fontWeight: '500', color: 'black', fontSize: 18}}>
            T1010
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '70%', marginTop: 20}}>
          <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
            Mô tả sự cố:{' '}
          </Text>
          <Text style={{fontWeight: '500', color: 'black', fontSize: 18}}>
            Bóng đèn cháy, lỗi Ti vi, lỗi điều hòa hòa hòa, Bóng đèn cháy, lỗi
            Ti vi, lỗi điều hòa hòa hòa
          </Text>
        </View>
      </View>
      { (!click) ? <></>:
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{width: '65%'}}>
            <SelectDropdown
              data={countries}
              defaultValueByIndex={1}
              // defaultValue={{
              //   title: 'England',
              //   image: require('./Images/England.jpg'),
              //}}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.dropdown3BtnStyle}
              rowStyle={styles.dropdown3RowStyle}
            />
          </View>
          <View style={{width: '33%'}}>
            <SelectDropdown
              data={countries}
              defaultValueByIndex={1}
              // defaultValue={{
              //   title: 'England',
              //   image: require('./Images/England.jpg'),
              //}}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonStyle={styles.dropdown3BtnStyle}
              rowStyle={styles.dropdown3RowStyle}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 200,
            borderWidth: 0.5,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TextInput
            placeholder="Ghi chú:"
            style={{fontSize: 16, color: 'black', marginLeft: 10}}></TextInput>
        </View>
      </View>
    }
        {(!click)
        ? <View>
            <TouchableOpacity style={styles.btn} onPress={() => setClick(true)}>
                <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>
                Tiếp Nhận
                </Text>
            </TouchableOpacity>
        </View>
        : <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.btnHoanThanh}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>Hoàn thành</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnChuaXuLy}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 18}}>Chưa xử lý được</Text>
        </TouchableOpacity>
    </View>
    }
    
      
    </View>
  );
};

export default CTYeuCau;

const styles = StyleSheet.create({
    btnChuaXuLy:{
        marginTop: 50,
        width: '48%',
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        },
      btnHoanThanh:{
        marginTop: 50,
        width: '48%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        },
  dropdown3BtnStyle: {
    width: '100%',
    height: 45,
    backgroundColor: '#F1F4F5',
    borderRadius: 10,
    borderWidth: 0.5,
    paddingHorizontal: 0,
  },

  dropdown3RowStyle: {
    borderBottomColor: '#444',
    height: 50,
  },
  btn: {
    marginTop: 50,
    width: '100%',
    height: 50,
    backgroundColor: '#DE741C',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: '60%',
  },
  img: {
    width: '20%',
  },
  detail: {
    marginTop: 20,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  container: {
    width: '100%',
    padding: 15,
  },
});
