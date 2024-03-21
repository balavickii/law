import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialCommunityIcons1 from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
  const navigation =useNavigation()
  const signout=()=>{
    navigation.replace("Ulogin")
  }
  // const user=useSelector(state =>state.user)
  // console.log("Redux User :", user.user.providerData.email)
  // const name=user.user.name
  // const email=user.user.providerData.email
  return (
   <View className="flex-1 justify-evenly items-center bg-cyan-500" >
    <View className=" border-2 border-white px-10 py-2 rounded shadow-white shadow-2xl flex flex-row " >
      <MaterialCommunityIcons1 name='user' size={30} color={'white'}></MaterialCommunityIcons1>
      <Text className="text-white text-2xl font-bold pl-2">Profile</Text>
    </View>
   <View className="w-40 h-40 border-4 rounded-full border-white shadow-2xl shadow-black">
   <Image source={{
          uri:"https://cdn.sanity.io/images/e3a07iip/production/58efab3fcd310ee26c62f8df400b0048881bba3b-1083x1083.png"
        }} className="w-full h-full"
        resizeMode='contain'/>
         <View className="mt-5 ">
    <Text className="text-center text-white font-bold text-3xl"></Text>
   </View>
   </View>

  

   <View className="flex flex-row p-5 mt-5 w-11/12 justify-center items-center bg-cyan-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 border border-gray-100 shadow-lg shadow-white">
   <MaterialCommunityIcons name='gmail' size={23} color={'white'}></MaterialCommunityIcons>
    <Text className="pl-2 text-lg text-white" >abc@gmail.com</Text>
   </View>
   <TouchableOpacity activeOpacity={0.9} onPress={signout}>
   <View className="flex flex-row px-5 py-3 mt-5 w-5/12 justify-center items-center bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 border border-gray-100 shadow-lg shadow-white">
   <MaterialCommunityIcons1 name='log-out' size={23} color={'black'}></MaterialCommunityIcons1>
    <Text className="pl-2 text-lg text-black" >Logout</Text>
   </View>
   </TouchableOpacity>
   </View>


  )
}

export default Profile