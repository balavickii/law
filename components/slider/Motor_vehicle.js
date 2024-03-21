import { View, Text,SafeAreaView,Image ,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'

const Motor_vehicle = () => {
  return (
    <>
    <View className="bg-white h-full w-full">
    <SafeAreaView >
      <View className="flex flex-row items-center justify-center w-full h-10 mt-7 ">
        <Image
        source={require('../carousel_slide/icon.jpg')}
        className=" w-14 h-16 "
        />
        <Text className="text-xl font-bold px-5">LAW FRIEND</Text>
    </View>
    <View className=" mt-8 bg-slate-50 w-screen h-1 mb-5"></View>
    </SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
     <View className="w-11/12 h-14 bg-cyan-500 flex  items-center justify-center rounded-lg mx-4">
     <Text className="text-2xl ">MotorVehicle Act</Text>
     </View>
      <View className="flex flex-row  text-center h-20 w-11/12 ml-4  justify-evenly items-center ">
        <Text className="text-lg bg-slate-200 h-10 w-32 flex text-center rounded-lg pt-1  ">Section</Text>
        <Text className="text-lg bg-slate-200 h-10 w-28 flex text-center rounded-lg pt-1">Penalty</Text>
        <Text className="text-lg bg-slate-200 h-10 w-32 flex text-center rounded-lg pt-1 ">Offence</Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:181</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.5000</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Without license</Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:196 </Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.2000</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Without valid insurance </Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:177</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.500</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Not carrying the required documents </Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:192</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.10000</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Without Valid permit</Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:181</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.500</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Driving by a minor </Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:183</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.1000</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Over speeding </Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:180</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.1000</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">unlicensed fellow drive</Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:177</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.1000</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Rough Driving</Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:189</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.5000</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Racing public roads</Text>
      </View>
      <View className=" flex text-center flex-row h-18 w-11/12 justify-evenly items-center ml-4 mb-2">
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-3"> SEC:177</Text>
        <Text className="text-sm bg-slate-50 h-10 w-28 flex text-center rounded-lg pt-1 ">RS.100</Text>
        <Text className="text-sm bg-slate-50 h-10 w-32 flex text-center rounded-lg pt-1">Driving against One Way</Text>
      </View>
    </ScrollView>
    </View>
    </>
  )
}

export default Motor_vehicle