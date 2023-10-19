import { useState } from 'react';
import { useNavigation, useRoute} from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

const View1 = () => {
  const [idImg, setIdImg] = useState(3)
  const nav = useNavigation()
  const rou = useRoute()

  const items = [
    {
        id: 0,
        color: 'trắng',
        url: require('../assets/dt_trang.png'),
    },
    {
        id: 1,
        color: 'red',
        url: require('../assets/dt_do.png'),
    },
    {
        id: 2,
        color: 'black',
        url: require('../assets/dt_den.png'),
    },
    {
        id: 3,
        color: 'blue',
        url: require('../assets/dt_xanh.png'),
    },
  ]

  return (
    <View style={styles.container}>
      <Image style={{width:300, height:360}} source={rou.params?.urlImg == null ? items[idImg].url : rou.params?.urlImg} />
      <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image style={styles.icon} source={require('../assets/star.png')}/>
        <Image style={styles.icon} source={require('../assets/star.png')}/>
        <Image style={styles.icon} source={require('../assets/star.png')}/>
        <Image style={styles.icon} source={require('../assets/star.png')}/>
        <Image style={styles.icon} source={require('../assets/star.png')}/>
        <Text style={{marginLeft:20}}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={{fontWeight:'bold'}}>1.790.000 đ</Text>
        <Text style={{marginLeft:100, textDecorationLine:'line-through'}}>1.790.000 đ</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={{color:'red', }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Text style={{ marginLeft: 10, borderWidth: 1, borderRadius: 100, fontSize: 15, width: 20, height: 20, textAlign: 'center' }}>?</Text>
      </View>



     <Pressable onPress={() => nav.navigate("View2", {
        img: rou.params?.urlImg === null ? items[idImg].url : rou.params?.urlImg,

      })}>
        <View style={{ borderRadius: 10, height: 30, borderWidth: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <Text>4 MÀU-CHỌN MÀU</Text>
        </View>
      </Pressable>



      <View style={{ borderRadius: 10, height: 30, marginTop: 20, justifyContent: 'center', alignItems: 'center', position: 'relative', backgroundColor:'red' }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '20' }}>CHỌN MUA</Text>
      </View>
    </View>
  )
}

export default View1

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    position: 'relative'
  },
  icon: {
    width:30,
    height:30
  },
 
});
