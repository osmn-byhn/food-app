import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const MenuItem = ({item}) => {
  return (
    <View style={{marginTop:17,flexDirection: "row"}}>
        <Pressable style={{ margin: 10, flexDirection: "row", justifyContent: "space-between", marginVertical: 15}}>
            <View>
                <Text style={{fontWeight: "500", fontSize: 15}}>{item?.name}</Text>
                <Text style={{fontWeight: "500", fontSize: 15}}>{item?.price} ₺</Text>
                <Text style={{marginTop: 5, borderRadius: 4}}>
                    {[0, 0, 0, 0, 0].map((en, i) => (
                        <FontAwesome key={i} style={{paddingHorizontal: 3 }} name={i < Math.floor(item.rating) ? "star" : "star-o"} size={15} color="#ffd700" />
                    ))}
                </Text>
                <Text style={{width:230, color:"gray", fontSize:16}}>{item?.description.length > 40 ? item?.description.substr(0,37) + "..." : item?.description}</Text>
            </View>
        </Pressable>
        <Pressable style={{marginRight:10}}>
            <Image style={{width:120, height: 120, borderRadius:8, marginTop: 10}} source={{uri:item?.image}} />
            <Pressable style={{position: "absolute", top: 100, left: 20, borderColor: "#e32636", borderWidth: 1, flexDirection:"row", paddingHorizontal:25, paddingVertical:5, alignItems:"center", backgroundColor: "white", borderRadius: 5} }>
                <Text style={{fontSize:18, fontWeight:"600",color:"#fd5c63"}}>ADD</Text>
            </Pressable>
        </Pressable>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({})