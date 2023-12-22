import { StyleSheet, Text, View, Alert, ScrollView, Pressable } from 'react-native';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons';

const Index = () => {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Konumunuz alınıyor...');

  useEffect(() => {
    const fetchData = async () => {
        await CheckLocationPermission();
      await CheckIfLocationEnabled();
      await GetCurrentLocation();
    };
    fetchData();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        'Konum Servisleri Etkin Değil',
        'Devam etmek için lütfen konum servislerinizi etkinleştirin',
        [{ text: 'Tamam' }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const CheckLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      // Kullanıcı izin vermezse buraya düşer.
      Alert.alert(
        'Konum İzni Reddedildi',
        'Uygulamanın konum servisini kullanabilmesi için izin vermelisiniz.',
        [{ text: 'Tamam' }],
        { cancelable: false }
      );
    } else {
      // İzin verildiyse konum servisini kullanabilirsiniz.
      setLocationServicesEnabled(true);

      GetCurrentLocation();
    }
  };

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestBackgroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Konum İzin Verilmedi',
        'Uygulamanın konum servisini kullanmasına izin verin',
        [{ text: 'Tamam' }],
        { cancelable: false }
      );
    } else {
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      if (coords) {
        const { latitude, longitude } = coords;

        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        let address = await LocationGeocoding.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        const streetAddress = address[0].name;
        for (let item of response) {
          let fullAddress = `${item.name}, ${item.postalCode}, ${item.city}`;
          setDisplayCurrentAddress(fullAddress);
        }
        console.log(response);
      }
    }
  };

  console.log('Adresim', displayCurrentAddress);

  return (
    <ScrollView style={{flex:1, backgroundColor: "#f8f8f8"}}>
      <View style={{ flexDirection:"row", alignItems:"center", gap: 12, padding: 10 }}>
        <Octicons name="location" size={24} color="black" />
        <View style={{flex: 1}}>
            <Text style={{fontSize:15, fontWeight:"500"}}>Deliver To</Text>
            <Text style={{color: "gray"}}>{displayCurrentAddress}</Text>
        </View>
        <View>
            <Pressable style={{backgroundColor: '#6CB4EE', height:40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
            <Text>S</Text>
            </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({});
  
