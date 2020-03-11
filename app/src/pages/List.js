import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';

import { API_URL } from 'react-native-dotenv';

import { Alert, SafeAreaView, ScrollView, View, TouchableOpacity, Text, Platform, StyleSheet, Image, AsyncStorage, StatusBar } from 'react-native';

import SpotList from '../components/SpotList';

import logo from '../assets/logo.png';

export default function List( {navigation} ) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio(API_URL, {
        query: { user_id }
      })

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
      })
    })
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim());

      setTechs(techsArray);
    })
  }, []);

  function logout() {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('techs');
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <Image style={styles.logo} source={logo}/>
      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>

      <View>
        <TouchableOpacity onPress={() => logout()} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
  ,
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});