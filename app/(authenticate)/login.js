import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = () => {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const router = useRouter();
    useEffect(() => {
        const checkLogin = async () => {
            try{
                const token = await AsyncStorage.getItem("authToken");
                if(token){
                    router.replace("/(home)")
                }
            } catch(error){
                console.log(error)
            }
        }

        checkLogin();
    },[])
    async function signUpWithEmail(){
        const {data,error} = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
        if(data){
            const token = data?.session?.access_token;
            AsyncStorage.setItem("authToken",token)
            router.replace("/(home)")
        }
    }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white", alignItems: "center"}}>
      <View style={{marginTop:100}}>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: "900"}}> Log in Food App</Text>
      </View>
      <View>
        <View>
            <KeyboardAvoidingView>
              <View>
              </View>
              <View style={{marginTop: 35}}>
                <View style={{flexDirection:"row", alignItems: "center", gap: 15, backgroundColor: "#e0e0e0", paddingVertical:5, borderRadius: 5, marginTop: 30}}>
                  <MaterialIcons name="email" size={24} color="gray" style={{marginLeft: 8}} />
                  <TextInput value={email} onChange={(text) => setEmail(text)} style={{color: "gray", marginVertical: 10, width: 300}} placeholder='Email'/>
                </View>
              </View>
              <View style={{marginTop:10}}>
                <View style={{flexDirection:"row", alignItems: "center", gap: 15, backgroundColor: "#e0e0e0", paddingVertical:5, borderRadius: 5, marginTop: 30}}>
                  <MaterialIcons name="vpn-key" size={24} color="gray" style={{marginLeft: 8}} />
                  <TextInput value={password} onChange={(text) => setPassword(text)} style={{color: "gray", marginVertical: 10, width: 300}} placeholder='Password'/>
                </View>
              </View>

              <Pressable onPress={signUpWithEmail} style={{width: "100%",  backgroundColor: "black", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15, marginVertical: 30}}>
                <Text style={{textAlign: "center", color: "white", fontSize:16, fontWeight: "bold"}}>Login</Text>
              </Pressable>

              <Pressable onPress={() => router.push('/register')} style={{width: "100%",  backgroundColor: "#f1f1f1", borderRadius: 6, marginLeft: "auto", marginRight: "auto", padding: 15 , borderWidth: 2, borderColor: "black"}}>
                <Text style={{textAlign: "center", color: "black", fontSize:16, fontWeight: "bold"}}>Register</Text>
              </Pressable>
            </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})