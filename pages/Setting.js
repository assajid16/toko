import React from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {NavigationActions} from 'react-navigation'
import ImageSlider from 'react-native-image-slider';


export default class Menu extends React.Component {

 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/kembali.png')}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>Pengaturan</Text>                   
          </View>

        </View>

        <ScrollView style={styles.scroll}>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Akun
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Pembayaran
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Notifikasi
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Lokasi
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Syarat dan Ketentuan
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Kebijakan Privasi
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Review Aplikasi
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
          Pusat Bantuan
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity>
          <Text style={styles.isiContent}>
           Pengaturan Tambahan
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.list}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.isiContent}>
           Keluar
            </Text>
          </TouchableOpacity>
          </View>

          </ScrollView>

       
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 0,
    backgroundColor:'white',
   },
     header: {
     flexDirection:'row',
     justifyContent:'space-between',
     paddingLeft:10,
     paddingRight:10,
     backgroundColor: '#3498DB',
     height: 50,
   },
   headerText:{
     fontFamily: '',
     color:'black',
     fontSize: 15,
     paddingTop: 15,
     paddingLeft:0,
   },
   headerImage:{
     width:15,
     height:15,
     alignSelf:'center',
     marginTop:17,
     marginRight:120
   },
   scroll:{
    flex: 1,
    marginBottom: 0,
    backgroundColor:'#AED6F1',
  },
  list:{
    flexDirection:'row',
    marginTop:10,
    alignItems:'center',
    backgroundColor: 'white',
    width: 360,
    height: 70,
  },
  isiContent:{
    color:'black',
    margin:5
  },


})