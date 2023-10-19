import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from 'react-native';
  import React from 'react';
  
  interface DangTiepNhan {
    id: number;
    title: string;
    time: string,
    name: string;
    img: any;
    toa: string;
    phong: string;
    gio: string;
    ngay: string;
  }
  const renderItem = ({item}: any) => {
    const {id, title, time, name, img, toa, phong, gio, ngay} = item;
    return (
      <View style={styles.containerPD}>
        <View style={styles.title}>
          <Text style={{fontSize: 17, fontWeight: '700', color:'black'}}>{title}</Text>
          <Text style={{fontSize: 17, fontWeight: '500', color:'red', marginRight: 20}}>{time}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.left}>
            <Image source={img} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.right}>
            <Text style={{fontSize: 16, fontWeight: '500', color:'black'}}>{name}</Text>
            <View style={styles.bottom}>
              <Text>{toa}</Text>
              <Text>{phong}</Text>
              <Text>{gio}</Text>
              <Text>{ngay}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const DangTiepNhan = () => {
    return (
      <View style={styles.container}>
        <FlatList
          style={{marginTop: 10}}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          
        />
      </View>
    );
  };
  
  export default DangTiepNhan;
  
  const styles = StyleSheet.create({
    bottom: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    right: {
      width: '80%',
    },
    left: {
      width: '20%',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      padding: 10,
    },
    title: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    containerPD: {
      width: '100%',
      height: 'auto',
      marginTop: 10,
      padding: 10,
      borderWidth: 0.5,
      borderRadius: 10
    },
    container: {
      padding: 10,
      width: '100%',
      height: '100%',
    },
  });
  
  const data: DangTiepNhan[] = [
    {
      id: 1,
      title: 'Sự cố máy chiếu hỏng',
      time: '11:50',
      name: 'Lê Văn Hiếu',
      img: require('../../assets/Profile.png'),
      toa: 'Tòa T',
      phong: '1103',
      gio: '9h15',
      ngay: '17/02/2023',
    },
    {
      id: 2,
      title: 'Sự cố máy chiếu hỏng',
      time: '11:50',
      name: 'Lê Văn Hiếu',
      img: require('../../assets/Profile.png'),
      toa: 'Tòa T',
      phong: '1103',
      gio: '9h15',
      ngay: '17/02/2023',
    },
    {
      id: 3,
      title: 'Sự cố máy chiếu hỏng',
      time: '11:50',
      name: 'Lê Văn Hiếu',
      img: require('../../assets/Profile.png'),
      toa: 'Tòa T',
      phong: '1103',
      gio: '9h15',
      ngay: '17/02/2023',
    },
    {
      id: 4,
      title: 'Sự cố máy chiếu hỏng',
      time: '11:50',
      name: 'Lê Văn Hiếu',
      img: require('../../assets/Profile.png'),
      toa: 'Tòa T',
      phong: '1103',
      gio: '9h15',
      ngay: '17/02/2023',
    },
    {
      id: 5,
      title: 'Sự cố máy chiếu hỏng',
      time: '11:50',
      name: 'Lê Văn Hiếu',
      img: require('../../assets/Profile.png'),
      toa: 'Tòa T',
      phong: '1103',
      gio: '9h15',
      ngay: '17/02/2023',
    },
    {
      id: 6,
      title: 'Sự cố máy chiếu hỏng',
      time: '11:50',
      name: 'Lê Văn Hiếu',
      img: require('../../assets/Profile.png'),
      toa: 'Tòa T',
      phong: '1103',
      gio: '9h15',
      ngay: '17/02/2023',
    },
  ];
  