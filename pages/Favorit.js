import React from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Beranda')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/kembali.png')}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>Favorit</Text>                   
          </View>

        </View>
       
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
   }


})