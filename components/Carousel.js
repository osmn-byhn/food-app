import { StyleSheet, Text, View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import React from 'react'

const Carousel = () => {
    const images = [
        "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?w=826&t=st=1703271691~exp=1703272291~hmac=1672c9eda0a2d4909396f2b97fab76a531a7a219b931785cee52feabff7fed0d",
        "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=826&t=st=1703271723~exp=1703272323~hmac=3c314e0ef20f2574f301ed30ad39a1a3e22ee850a17b6cd098a42a07a5b59354",
        "https://img.freepik.com/free-photo/top-view-fried-chicken-with-tomatoes-salad-plate_23-2148682822.jpg?t=st=1703271685~exp=1703272285~hmac=fe5f33e44305baf97f90f833e5e5655c38ab0b66327a23992a4d4bb782892652"
    ]
  return (
    <View>
      <SliderBox 
        images={images} 
        autoPlay 
        circleLoop 
        dotColor="#13274F" 
        inactiveDotColor="#90A4AE" 
        ImageComponentStyle ={{
            borderRadius: 6,
            width: "94%",
            marginTop: 10
        }}
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})