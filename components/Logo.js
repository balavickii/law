import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'



const Logo = () => {
    const navigation=useNavigation()

    useEffect(()=>{

    setTimeout(()=>{
        navigation.navigate("Ulhome")
    },3000)
})

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
        <View>
        <Image source={require("../asset/logo.jpg")} style={{width:200,height:200}}/>
        </View>
        <View> 
            <Text className="text-center text-cyan-800 font-bold text-xl mt-6">LAW FRIEND</Text>
        </View>
    </SafeAreaView>
  )
}

export default Logo