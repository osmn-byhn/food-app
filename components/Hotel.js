import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { AntDesign, MaterialCommunityIcons  } from '@expo/vector-icons';
import { useRouter } from 'expo-router'
import React from 'react'

const Hotel = ({item}) => {
  const router = useRouter();
  return (
    <Pressable onPress={()=> router.push({
      pathname: "/hotel",
      params: {
        id: item.id,
        name: item.name,
        adress: item.adress,
        smalladress: item.smalladress,
        cuisines: item.cuisines,
        aggregate_rating: item.aggregate_rating,
        no_of_Delivery: item.no_of_Delivery,
        featured_image: item.featured_image

      }
    })} style={{marginHorizontal: 6, marginVertical:12, borderRadius: 20, backgroundColor: "white"}}>
      <Image source={{uri:item?.featured_image}} style={{width: "100%", aspectRatio: 6 / 4, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}/>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <View>
          <Text style={{paddingHorizontal:10, marginTop:10, fontSize:16, fontWeight:"600"}}>{item?.name}</Text>
          <Text style={{paddingHorizontal:10, marginTop:3, fontSize:15, fontWeight:"500", color:"gray"}}>{item?.cuisines}</Text>
          <Text style={{paddingHorizontal:10, marginTop:3, fontSize:14, fontWeight:"500", color:"#505050"}}>{item?.time}</Text>
        </View>

        <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#006A4E", borderRadius:4, paddingHorizontal:10, paddingVertical: 5,marginRight:10 }}>
          <Text style={{color:"white", textAlign: "center", marginRight:5}}>{item?.aggregate_rating}</Text>
          <AntDesign name="star" size={15} color="white" />
        </View>
      </View>

      <View style={{borderWidth:0.5, borderColor: "#c8c8c8", marginHorizontal:10, marginVertical:4, }}>
        <View style={{flexDirection:"row", alignItems:" center", gap:4, marginHorizontal:8, marginVertical:5}}>
          <MaterialCommunityIcons name="brightness-percent" size={24} color="#1F75FE" />
          <Text style={{marginLeft:2, color: "#1F75FE", fontWeight:"500"}}>20% OFF up to Rs 100</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default Hotel

const styles = StyleSheet.create({})