import { ScrollView, StyleSheet, Text, Touchable, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import FoodItem from '../../components/FoodItem';

import { Ionicons, Feather, Entypo, AntDesign  } from '@expo/vector-icons';

const hotel = () => {
    const params = useLocalSearchParams();
    const router = useRouter();
    const menu = [
      {
        id: "20",
        name: "Recommended",
        items: [
          {
            id: "101",
            name: "Paneer 65",
            price: 275,
            description:
              "This is served with Raita and gravy and has loaded with chilli paste mixed chicken Kebabs",
            rating: 4.1,
            ratings: 43,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr",
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: "102",
            name: "Chilly Chicken (Boneless)",
            price: 285,
            description:
              "E: 604.42 KCal (163.36 KCal), C: 29.67 Grams (8.02 Grams), P: 50.63 Grams (13.68 Grams), F: 30.94 Grams (8.36 Grams)",
            rating: 4.3,
            ratings: 34,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7",
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: "103",
            name: "Spl Veg Biryani",
            price: 250,
            description:
              "E: 1327.35 KCal (126.41 KCal), C: 213.24 Grams (20.31 Grams), P: 26.99 Grams (2.57 Grams), F: 38.46 Grams (3.66 Grams)",
            rating: 4.5,
            ratings: 56,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx",
            veg: true,
            bestSeller: false,
            quantity: 1,
          },
          {
            id: "104",
            name: "Chilly Paneer",
            price: 220,
            description:
              "E: 871.69 KCal (272.40 KCal), C: 21.54 Grams (6.73 Grams), P: 51.90 Grams (16.22 Grams), F: 64.36 Grams (20.11 Grams",
            rating: 3.8,
            ratings: 22,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq",
            veg: true,
            bestSeller: true,
            quantity: 1,
          },
          {
            id: "105",
            name: "Chicken 65",
            price: 300,
            description:
              "E: 544.39 KCal (155.54 KCal), C: 25.11 Grams (7.17 Grams), P: 45.15 Grams (12.90 Grams), F: 27.91 Grams (7.97 Grams)",
            rating: 4.5,
            ratings: 45,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi",
            veg: false,
            bestSeller: true,
            quantity: 1,
          },
        ],
      },
      {
        id: "11",
        name: "Rice",
        items: [
          {
            id: "201",
            name: "Chicken Fried Rice",
            price: 260,
            description:
              "E: 1142.26 KCal (163.18 KCal), C: 125.05 Grams (17.86 Grams), P: 40.11 Grams (5.73 Grams), F: 51.37 Grams (7.34 Grams)",
            rating: 4.3,
            ratings: 34,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v",
            veg: false,
            bestSeller: true,
          },
          {
            id: "202",
            name: "Egg Fried Rice",
            price: 220,
            description:
              "E: 1729.51 KCal (164.72 KCal), C: 204.54 Grams (19.48 Grams), P: 44.03 Grams (4.19 Grams), F: 79.02 Grams (7.53 Grams)",
            rating: 4.3,
            ratings: 52,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l",
            veg: false,
            bestSeller: false,
          },
          {
            id: "203",
            name: "Veg Fried Rice",
            price: 190,
            description:
              "E: 1477.00 KCal (140.67 KCal), C: 204.14 Grams (19.44 Grams), P: 22.90 Grams (2.18 Grams), F: 59.95 Grams (5.71 Grams)",
            rating: 4.6,
            ratings: 56,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3",
            veg: true,
            bestSeller: true,
          },
          {
            id: "204",
            name: "Jeera Rice",
            price: 195,
            description:
              "E: 1832.30 KCal (174.50 KCal), C: 246.73 Grams (23.50 Grams), P: 27.51 Grams (2.62 Grams), F: 78.15 Grams (7.44 Grams)",
            rating: 4.5,
            ratings: 48,
            image:
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv",
            veg: true,
            bestSeller: false,
          },
        ],
      },
    ];
  

  return (
    <ScrollView style={{backgroundColor: "white"}}>
      <View style={{flexDirection:"row", backgroundColor: "white", justifyContent: "space-between", alignItems:"center", paddingTop:20}}>
        <Pressable style={{padding:5}} onPress={()=> router.push({
      pathname: "/"})}>
            <Ionicons name="arrow-back" size={25} color="black" />
        </Pressable>
        <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:14, gap:10}}>
            <Pressable >
                <Feather name="camera" size={24} color="black" />
            </Pressable>
            <Pressable >
                <Ionicons name="bookmark-outline" size={24} color="black" />
            </Pressable>
            <Pressable >
                <Entypo name="share" size={24} color="black" />
            </Pressable>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginVertical:12}}>
        <Image source={{uri:params?.featured_image}} style={{width: "95%", aspectRatio: 6 / 4, borderRadius: 10, marginBottom:12, marginRight: 5 }}/>

        <Text style={{fontSize:20, fontWeight:"bold"}}>{params?.name}</Text>
        <Text style={{marginTop:5, fontWeight:"500", color: "gray", fontSize:15}}>Fast Food - Traditional Food</Text>
        <View style={{flexDirection:"row", alignItems:"center",gap: 4, marginTop:10}}>
            <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#006A4E", borderRadius:4, paddingHorizontal:4, paddingVertical: 5,marginRight:5 }}>
                <Text style={{color:"white", textAlign: "center", marginRight:5 ,fontSize: 17, fontWeight: "bold"}}>{params?.aggregate_rating}</Text>
                <AntDesign name="star" size={17} color="white" />
            </View>
            <Text style={{fontSize: 14, fontWeight: "500", marginLeft: 5}}>3.2K Ratings</Text>
        </View>
        <View>
          <Text style={{justifyContent:"center", alignItems:"center", backgroundColor: "#d0f0c0", borderRadius:20, paddingHorizontal:20, paddingVertical:5, marginTop:12}}>{params?.adress}</Text>
        </View>
      </View>
      {menu?.map((item, index) => (
        <FoodItem key={index} item={item}/>
      ))}

    </ScrollView>
  )
}

export default hotel

const styles = StyleSheet.create({})