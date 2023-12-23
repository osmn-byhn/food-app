import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import MenuItem from './MenuItem';

const FoodItem = ({item}) => {
    const data = [item]
  return (
    <View  style={{marginTop: 25}}>
      {data?.map((item, index) => (
        <>
            <Pressable key={index} style={{flexDirection: "row", margin: 10, alignItems: "center", justifyContent:"space-between"}}>
                <Text style={{fontSize: 19, fontWeight: "bold"}}>{item?.name} ({item?.items?.length})</Text>
                <AntDesign name="down" size={20} color="black" />
            </Pressable>

            {item?.items?.map((item, index) => (
                <MenuItem key={index} item={item}/>
            ))}
        </>
      ))}
    </View>
  )
}

export default FoodItem

const styles = StyleSheet.create({})