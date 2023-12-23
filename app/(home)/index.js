import { StyleSheet, Text, View, Alert, ScrollView, Pressable, TextInput, Image } from 'react-native';
import * as Location from 'expo-location';
import * as LocationGeocoding from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Octicons, AntDesign, Ionicons } from '@expo/vector-icons';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';

const Index = () => {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Konumunuz alınıyor...');
  const recommended = [
    {
      id: 0,
      name: "Nandhana Palace",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/3/50713/81d0735ce259a6bf800e16bb54cb9e5e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "35 - 45",
      type: "Andhra",
    },
    {
      id: 0,
      name: "GFC Biriyani",
      image:
        "https://b.zmtcdn.com/data/pictures/0/20844770/f9582144619b80d30566f497a02e2c8d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      time: "10 - 35",
      type: "North Indian",
    },
    {
      id: 0,
      name: "Happiness Dhaba",
      image:
        "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "20 - 25",
      type: "North Indian",
    },

    {
      id: 0,
      name: "Happiness Dhaba",
      image:
        "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "20 - 25",
      type: "North Indian",
    },
    {
      id: 0,
      name: "Happiness Dhaba",
      image:
        "https://b.zmtcdn.com/data/reviews_photos/2f1/c66cf9c2c68f652db16f2c0a6188a2f1_1659295848.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      time: "20 - 25",
      type: "North Indian",
    },
  ];

  const items = [
    {
      id: "0",
      name: "Offers",
      description: "Upto 50% off",
      image: "https://cdn-icons-png.flaticon.com/128/9356/9356378.png",
    },
    {
      id: "1",
      name: "Legends",
      description: "Across Turkey",
      image: "https://cdn-icons-png.flaticon.com/128/8302/8302686.png",
    },
    {
      id: "2",
      name: "Gourmet",
      description: "Selections",
      image: "https://cdn-icons-png.flaticon.com/128/1065/1065715.png",
    },
    {
      id: "3",
      name: "Healthy",
      description: "Curated dishes",
      image: "https://cdn-icons-png.flaticon.com/128/415/415744.png",
    },
  ];

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
    <ScrollView style={{ flex: 1, backgroundColor: "#f8f8f8" }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 10 }}>
        <Octicons name="location" size={24} color="#E52B50" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>{displayCurrentAddress}</Text>
        </View>
        <View>
          <Pressable style={{ backgroundColor: '#6CB4EE', height: 40, width: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text>O</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderWidth: 1, borderColor: "#C0C0C0", paddingHorizontal: 10, paddingVertical: 8, borderRadius: 11, marginTop: 10, marginHorizontal: 10 }}>
        <TextInput placeholder='Search for food, hotels' style={{}} />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <View>
        <Carousel />
      </View>
      <View>
        <Categories />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15 }}>
        {recommended?.map((item, index) => (
          <View key={index} style={{ backgroundColor: "white", flexDirection: "row", margin: 10, borderRadius: 10 }}>
            <View>
              <Image
                source={{ uri: item?.image }}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "cover",
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 7
                }}
              />
            </View>
            <View style={{ padding: 10, flexDirection: "column" }}>
              <Text style={{ fontSize: 15, fontWeight: "500" }}>{item?.name}</Text>
              <Text style={{ flex: 1, marginTop: 3, color: "gray", fontWeight: "500" }}>{item?.type}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
                <Ionicons name="ios-time" size={24} color="green" />
                <Text>{item?.time} mins</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text style={{ textAlign: "center", marginTop: 15, letterSpacing: 4, marginBottom: 5, color: "gray" }}>EXPLORE</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {items?.map((item, index) => (
    <View key={index} style={{ width: 90, borderColor: "#E0E0E0", borderWidth: 1, paddingVertical: 5, paddingHorizontal: 1, borderRadius: 5, marginLeft:10, marginVertical:10, alignItems: "center", justifyContent: "center", backgroundColor:"white" }}>
      <Image source={{ uri: item?.image }} style={{ width: 50, height: 50, }} />
      <Text style={{fontSize: 13, fontWeight:"500", marginTop:6}}>{item?.name}</Text>
      <Text style={{fontSize: 12, color:"gray", marginTop:3}}>{item?.description}</Text>
    </View>
  ))}
</ScrollView>

    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({});

