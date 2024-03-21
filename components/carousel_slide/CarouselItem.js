import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Pressable } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


export const SLIDER_WIDTH = Dimensions.get('window').width + 120
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = () => {
    const navigation=useNavigation();
    const Stack=createNativeStackNavigator();
  return (
    <>
    <TouchableOpacity onPress={()=>navigation.navigate('Motor_vehicle')}>
    <View className=" bg-cyan-500 p-5 rounded-xl w-full h-52 font-medium" >
      <View className=" bg-slate-200 rounded-xl  flex  content-center h-12 font-medium ">
        <Text className="ml-3 my-2 text-2xl flex-auto  justify-start content-center ">Hello</Text></View>
      <Text className=" text-base mt-3 indent-5">Hello</Text>
    </View>
    </TouchableOpacity>
   
    </>
  )
}



export default CarouselCardItem