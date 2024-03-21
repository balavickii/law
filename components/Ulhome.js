import { View, Text ,Image,TouchableOpacity, Pressable} from 'react-native'
import MaterialCommunityIcons1 from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons2 from 'react-native-vector-icons/Entypo'
import { useNavigation} from '@react-navigation/native'



const Ulhome = () => {
  const navigation=useNavigation()
  const user=()=>{
      navigation.navigate('User')
  }

  const lawyer=()=>{
    navigation.navigate('Lawyer')
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
        <View>
        <Image source={require('../asset/uihome.png')} style={{width:200,height:200}}/>
       
        </View>
        <View className="flex flex-row mt-6">
            <Text className="text-3xl font-semibold  ">Choose Your</Text>
            <Text className="text-3xl font-bold text-cyan-600"> Side..</Text>
        </View>
       
        <View>
           <View className="flex justify-center items-center mt-10">
           <TouchableOpacity onPress={user} className="bg-cyan-600 w-9/12 p-5 px-10 py-3 rounded-full flex flex-row items-center justify-center mt"  >
                <MaterialCommunityIcons1 name='user' style={{color:'white'}} className="text-white" size={30}></MaterialCommunityIcons1>  
                <Text className="text-white font-bold text-xl" >User</Text> 
            </TouchableOpacity>
          
           </View>     
           
           <View className="flex justify-center items-center mt-10 ">
           <TouchableOpacity  onPress={lawyer} className="bg-cyan-600 w-9/12 p-5 px-10 py-3 rounded-full flex flex-row items-center justify-center" >
                <MaterialCommunityIcons2 name='awareness-ribbon' style={{color:'white'}} className="text-white" size={30}></MaterialCommunityIcons2>  
                <Text className="text-white font-bold text-xl">Advocate</Text> 
            </TouchableOpacity>
          
           </View>
           
        </View>
    </View>
  )
}
 
export default Ulhome