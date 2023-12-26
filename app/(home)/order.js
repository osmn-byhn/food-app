import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Pressable } from "react-native";
  import React, { useRef, useState, useEffect } from "react";
  import { useLocalSearchParams, useRouter } from "expo-router";
  import moment from "moment";
  import MapView, { Marker, Polyline } from "react-native-maps";
  import { Entypo  } from "@expo/vector-icons";
const order = () => {
    const router = useRouter();
    const params = useLocalSearchParams()
    const [tip, setTip] = useState(0)
    const time = moment().format("LT");
    const mapView = useRef(null);
    const [coordinates] = useState([
        {
            latitude: 12.9716,
            longitude: 77.5946,
        },
        {
            latitude: 13.0451,
            longitude: 77.6269,
        }
    ])

    useEffect(() => {
        mapView.current.fitToCoordinates(coordinates, {
            edgePadding: {
                top: 50,
                bottom: 50,
                left: 50,
                right: 50
            }
        })
    }, [])

  return (
    <SafeAreaView>
      <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 60, backgroundColor: "#fd5c63", padding: 10}}>
        <View>
            <Text style={{color: "white", fontSize: 15, fontWeight: "600"}}>Delivery in 25 mins</Text>
            <Text style={{color: "white", fontSize: 15, fontWeight: "600"}}>order placed at {time}</Text>
        </View>
        <Entypo name="cross" size={24} color="white" onPress={() => router.push('/')}/>
      </View>
      <MapView 
        ref={mapView}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
        }}

        style={{width:"100%", height: 650}}
      >
        <Marker coordinate={coordinates[0]}/>
        <Marker coordinate={coordinates[1]}/>

        <Polyline coordinates={coordinates} strokeColor='blue' lineDashPattern={[4]} strokeWidth={1}/>

      </MapView>

      <View
        style={{
          height: 320,
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View style={{ padding: 10 }}>
          <View>
            <Text
              style={{ fontWeight: "500", fontSize: 17, textAlign: "center" }}
            >
              {params?.name} has accepted your order
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default order

const styles = StyleSheet.create({})