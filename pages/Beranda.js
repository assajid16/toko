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
  scrollAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Slideshow from 'react-native-image-slider-show';

function List({title, harga, img}) {
  return (
    <View style={styles.item}>
      <Image style={styles.thumb} source={img} />
      <Text style={styles.jdul}>{title}</Text>
      <Text style={styles.harga}>{harga}</Text>
      <TouchableOpacity>
        <Image
          style={styles.iconcart}
          source={require('../images/ikon/shop.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default class Beranda extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketlist: [
        {
          img: require('../images/produk/1.jpg'),
          nama: 'Eiger Pollock',
          harga: 'Rp. 900.000',
        },
        {
          img: require('../images/produk/2.jpg'),
          nama: 'Sepatu Eiger',
          harga: 'Rp. 1.200.000',
        },
        {
          img: require('../images/produk/3.jpg'),
          nama: 'Sepatu Eiger',
          harga: 'Rp. 1.300.000',
        },
        {
          img: require('../images/produk/4.jpg'),
          nama: 'Sepatu Eiger',
          harga: 'Rp. 1.150.000',
        },
        {
          img: require('../images/produk/5.jpg'),
          nama: 'Tas Eiger',
          harga: 'Rp. 1.300.000',
        },
        {
          img: require('../images/produk/6.jpg'),
          nama: 'Tas Eiger',
          harga: '$Rp. 1.300.000',
        },
        {
          img: require('../images/produk/7.jpg'),
          nama: 'Tas Eiger',
          harga: 'Rp. 1.300.000',
        },
        {
          img: require('../images/produk/8.jpg'),
          nama: 'Tas Eiger',
          harga: 'Rp. 1.300.000',
        },
        {
          img: require('../images/produk/9.jpg'),
          nama: 'Tas Eiger',
          harga: 'Rp. 1.300.000',
        },
        {
          img: require('../images/produk/10.jpg'),
          nama: 'Tenda Eiger',
          harga: 'Rp. 2.000.000',
        },
        {
          img: require('../images/produk/11.jpg'),
          nama: 'Tenda Eiger',
          harga: 'Rp. 2.000.000',
        },
        {
          img: require('../images/produk/12.jpg'),
          nama: 'Tenda Eiger',
          harga: 'Rp. 2.000.000',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />

        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Aslastore</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Favorit')}>
              <Image
                style={styles.headerImage}
                source={require('../images/ikon/love.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Pesan')}>
              <Image
                style={styles.headerImage}
                source={require('../images/ikon/pesan.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Notif')}>
              <Image
                style={styles.headerImage}
                source={require('../images/ikon/notif.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cari}>
          <Image
            style={styles.srcImage}
            source={require('../images/ikon/cari.png')}
          />
          <TextInput
            placeholder="Cari Produk"
            placeholderTextColor="#B2BABB"
            autoCapitalize="none"
            style={styles.inputCari}
          />
          <Image
            style={styles.headerImage}
            source={require('../images/ikon/kamera.png')}
          />
          <Image
            style={styles.headerImage}
            source={require('../images/ikon/mic.png')}
          />
        </View>

        <ScrollView style={styles.scroll}>
          <Slideshow
            dataSource={[
              {
                url:
                  'http://www.parselday.com/blog/wp-content/uploads/2016/09/Screenshot_34.png',
              },
              {
                url:
                  'https://mediakonsumen.com/files/2018/11/ilustrasi-promo-cashback-belanjaonline.jpg',
              },
              {
                url:
                  'https://artikel.pricearea.com/wp-content/uploads/2017/11/b_artikel_bhinneka_hujan_diskon_6nov17.jpg',
              },
            ]}
          />

          <FlatList
            numColumns={2}
            data={this.state.marketlist}
            renderItem={obj => (
              <List
                img={obj.item.img}
                title={obj.item.nama}
                harga={obj.item.harga}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Beranda')}>
            <View>
              <Image
                style={styles.footerImage}
                source={require('../images/ikon/home.png')}
              />
              <Text style={styles.footerText}> Beranda </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Kategori')}>
            <View>
              <Image
                style={styles.footerImage}
                source={require('../images/ikon/kategori.png')}
              />
              <Text style={styles.footerText}>Kategori</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Saldo')}>
            <View>
              <Image
                style={styles.footerImage}
                source={require('../images/ikon/dompet.png')}
              />
              <Text style={styles.footerText}>Saldo</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Belanja')}>
            <View>
              <Image
                style={styles.footerImage}
                source={require('../images/ikon/shop.png')}
              />
              <Text style={styles.footerText}>Belanja</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Akun')}>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 0,
    backgroundColor: '#3498DB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#3498DB',
    height: 35,
  },
  headerText: {
    fontFamily: '',
    color: 'black',
    fontSize: 25,
    paddingTop: 7,
    paddingLeft: 0,
  },
  headerImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    margin: 10,
    marginTop: 15,
  },
  cari: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#6E7B79',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  srcImage: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputCari: {
    flex: 1,
    // width: 200,
    // height: 40,
    // backgroundColor: 'white',
    // margin: 5,
    // padding: 8,
    // color: 'black',
    // borderRadius: 14,
    // fontSize: 15,
    // fontWeight: '100',
  },

  scroll: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: '#AEB6BF',
  },
  product: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    height: 150,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#3498DB',
    height: 50,
  },
  footerImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  footerText: {
    color: 'black',
    fontSize: 12,
  },

  iconcart: {
    height: 25,
    width: 25,
  },
  item: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  //  jdul: {
  //     fontSize: 12,
  //     fontWeight: 'bold',
  //     textDecorationLine: 'bold',
  //     textAlign: 'center',
  //   },
  harga: {
    fontSize: 12,
  },

  thumb: {
    width: 100,
    height: 100,
  },
});
