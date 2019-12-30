import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login_form from './pages/Login';
import Register_nav from './pages/Register';
import Favorit_nav from './pages/Favorit';
import Pesan_nav from './pages/Pesan';
import Notif_nav from './pages/Notif';
import Beranda_nav from './pages/Beranda';
import Kategori_nav from './pages/Kategori';
import Saldo_nav from './pages/Saldo';
import Belanja_nav from './pages/Belanja';
import Akun_nav from './pages/Akun';
import Transaksi_nav from './pages/Transaksi';
import Riwayat_nav from './pages/Riwayat';
import Setting_nav from './pages/Setting';

const page = createStackNavigator({
  Login: Login_form,
  Register: Register_nav,
  Favorit: Favorit_nav,
  Pesan: Pesan_nav,
  Notif: Notif_nav,
  Beranda: Beranda_nav,
  Kategori: Kategori_nav,
  Saldo: Saldo_nav,
  Belanja: Belanja_nav,
  Akun: Akun_nav,
  Transaksi: Transaksi_nav,
  Riwayat: Riwayat_nav,
  Setting: Setting_nav,
},
{
  headerMode : 'none' 
});

export default createAppContainer(page);
