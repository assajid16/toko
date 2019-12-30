import React from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'


export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      Email:'',
    }
    this.masuk = this.masuk.bind(this)
  }

  pindah = () => {
    this.props.navigation.navigate('Login');
  };

  daftar() {
    fetch('http://aslastore.tifuniwa17.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        email: this.state.password,
      }),
    });
    console.log(this.state,'admin')
     if (this.state.username == userinfo.username && this.state.password == userinfo.password) {
        this.props.navigation.navigate('Beranda')
     } 
     else {
        alert('Data Telah disimpan')
     }
  
   }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.isi}>
        <Image 
              style={styles.judulImage}
              source={require('../images/ikon/reg.png')}
            />
        <Text style={styles.headerText}>Registrasi</Text>
        <TextInput
          style={styles.input}
          placeholder='Pengguna'
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='white'
       
        />
        <TextInput
          style={styles.input}
          placeholder='Sandi'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Email/No.Hp'
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='white'
        />
        </View>

        <View>
        <TouchableOpacity 
              style={styles.btn} 
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontSize: 20,color:'#fff',marginTop:10}}>Buat Akun</Text>
          </TouchableOpacity>

        </View>

        
  
         
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65777A'
  },
  headerText:{
    fontFamily: '',
    color:'white',
    fontSize: 30,
  },
  isi:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65777A'
  },
  judulImage:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:5,
    marginRight:10,
    marginBottom:5,
    },

  input: {
    width: 280,
    color: 'white',
    borderColor: 'white',
  },

  btn: {
    height:50,
    marginRight:10,
    marginLeft:10,
    marginBottom:20,
    backgroundColor: 'red',
    alignItems: 'center',
  },
 
})