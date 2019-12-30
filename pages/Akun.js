import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView, 
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {NavigationActions} from 'react-navigation';


export default class Saya extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Akun Saya</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/setting.png')}
            />
            
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notif')}>
            <Image 
             style={styles.headerImage}
             source={require('../images/ikon/notif.png')}
            />
            </TouchableOpacity>

          
        </View>

        </View>

        <ScrollView style={styles.scroll}>

            <View style={styles.isi}>
            <Image 
                  style={styles.judulImage}
                  source={require('../images/ikon/user.png')}
                />
                <Text style={{color:'black', fontSize:20, marginRight:5, marginTop:25}}>Azkal Qolby</Text>
            </View>
        
             <View style={styles.content}>
             <TouchableOpacity>
             <Text style={styles.isiContent}>
                Points, Kupon Saya, Toko Member
              </Text>
             </TouchableOpacity>
           </View>
           <View style={styles.list}>
           <TouchableOpacity onPress={() => this.props.navigation.navigate('Transaksi')}>
           <Text style={styles.isiContent}>
              Transaksi
              </Text>
           </TouchableOpacity>
           </View>
           <View style={styles.list}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Riwayat')}>
          <Text style={styles.isiContent}>
           Riwayat Order
            </Text>
          </TouchableOpacity>
          </View>
           <View style={styles.list}>
           <TouchableOpacity>
           <Text style={styles.isiContent}>
              Informasi Barang
              </Text>
           </TouchableOpacity>
           </View>
           <View style={styles.list}>
           <TouchableOpacity>
           <Text style={styles.isiContent}>
              Ulasan
              </Text>
           </TouchableOpacity>
           </View>
           <View style={styles.list}>
           <TouchableOpacity>
           <Text style={styles.isiContent}>
              Komplain Sebagai Pembeli
              </Text>
           </TouchableOpacity>
           </View>
           <View style={styles.list}>
           <TouchableOpacity>
           <Text style={styles.isiContent}>
              Terakhir dilihat
              </Text>
           </TouchableOpacity>
           </View>
           <View style={styles.list}>
           <TouchableOpacity>
           <Text style={styles.isiContent}>
              Toko Favorit
              </Text>
           </TouchableOpacity>
           </View>
    
      </ScrollView>



        <View style={styles.footer}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Beranda')}>
            <View>
              <Image 
             style={styles.footerImage}
             source={require('../images/ikon/home.png')}
            />
            <Text style={styles.footerText}> Beranda </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Kategori')}>
            <View>
            <Image 
           style={styles.footerImage}
           source={require('../images/ikon/kategori.png')}
          />
          <Text style={styles.footerText}>Kategori</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Saldo')}>
            <View>
            <Image 
           style={styles.footerImage}
           source={require('../images/ikon/dompet.png')}
          />
          <Text style={styles.footerText}>Saldo</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Belanja')}>
            <View>
              <Image 
             style={styles.footerImage}
             source={require('../images/ikon/shop.png')}
            />
            <Text style={styles.footerText}>Belanja</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Pembeli')}>
            <View>
              <Image 
               style={styles.footerImage}
               source={require('../images/ikon/akun.png')}
              />
              <Text style={styles.footerText}>Akun</Text>
            </View>
          </TouchableOpacity>
            
           
        </View>


      </View>
  

    )
  };
};

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
    fontSize: 20,
    paddingTop: 10,
    paddingLeft:0
  },
  headerImage:{
    width:20,
    height:20,
    alignSelf:'center',
    margin:10,
    marginTop:15,
  },
  pilih: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: 'red',
    height: 50,
  },
   pilihan:{
     marginRight:50,
     marginLeft:50,
     marginTop:17
   },

   scroll:{
    flex: 1,
    marginBottom: 0,
    backgroundColor:'#AED6F1',
  },
  
  isi:{
   flexDirection:'row',
   marginTop: 0,
   backgroundColor: 'white',
   borderBottomWidth: 0,
   borderBottomColor: 'black',
   height: 70,
  },

  judulImage:{
    width:50,
    height:50,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:20
  },

  content:{
    flexDirection:'row',
    marginTop:10,
    marginLeft: 15,
    borderRadius: 10,
    alignItems:'center',
    backgroundColor: 'white',
    width: 330,
    height: 100,
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
 
  footer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#3498DB',
    height: 50,
  },
    footerImage:{
    width:20,
    height:20,
    alignSelf:'center'
  },
  footerText:{
    color:'black',
    fontSize: 12
  }

});
      