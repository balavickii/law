import { View, Text ,SafeAreaView,Image,ScrollView} from 'react-native'
import React from 'react'

const Consumer = () => {
  return (
    <>
    <View className="bg-white h-full ">
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
     <Text className="text-2xl ">Consumer Act</Text>
     </View>
     <View>
      <Text className="text-lg bg-slate-200 h-10 w-11/12 flex text-center rounded-lg pt-1 mx-4 my-3"> Consumer Protection Act, 1986 (COPRA)</Text>
      <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4">	In this, it protects the right of the consumer and makes user aware of their rights.</Text>
     </View>
     <View>
      <Text className="text-lg bg-slate-200 h-10 w-11/12 flex text-center rounded-lg pt-1 mx-4 my-3"> Indian Contract Act, 1972</Text>
      <Text className="text-base bg-slate-50  h-28 w-11/12 flex text-center justify-center rounded-lg p-5 mx-4">		They lay down the conditions in which the parties promise each other of the services to be provided and agree on certain terms.</Text>
     </View>
     <View>
      <Text className="text-lg bg-slate-200 h-10 w-11/12 flex text-center rounded-lg pt-1 mx-4 my-3"> The Sales of Good Act, 1930</Text>
      <Text className="text-base bg-slate-50  h-28 w-11/12 flex text-center justify-center rounded-lg p-5 mx-4">	To ensure the consumer rights in case the goods offered to the consumer is not up to the standard which was promised and the false claim was made.</Text>
     </View>
     <View>
      <Text className="text-lg bg-slate-200 h-10 w-11/12 flex text-center rounded-lg pt-1 mx-4 my-3"> The Essential Commodities Act, 1955</Text>
      <Text className="text-base bg-slate-50  h-28 w-11/12 flex text-center justify-center rounded-lg p-5 mx-4">		To keep track of the commodities which are essential and monitor their production and supply. Also keep a track of any hoarders, black marketers.</Text>
     </View>
     <View>
      <Text className="text-lg bg-slate-200 h-14 w-11/12 flex text-center rounded-lg pt-1 mx-4 my-3"> The Agricultural Produce (Grading and Marking ) Act, 1937</Text>
      <Text className="text-base bg-slate-50  h-32 w-11/12 flex text-center justify-center rounded-lg p-5 mx-4">		To implement the grading standard and hence monitoring the same whether standard checks are been done to issue the grading. In this, AGMARK is the standard introduced for agricultural goods.</Text>
     </View>
     <View>
      <Text className="text-lg bg-slate-200 h-10 w-11/12 flex text-center rounded-lg pt-1 mx-4 my-3"> The Prevention of Food Adulteration Act, 1954</Text>
      <Text className="text-base bg-slate-50  h-28 w-11/12 flex text-center justify-center rounded-lg p-5 mx-4">		This act makes sure the purity of the food items and the health of the consumers which could be affected by the adulterated items.</Text>
     </View>
     <View>
      <Text className="text-lg bg-slate-200 h-10 w-11/12 flex text-center rounded-lg pt-1 mx-4 my-3"> The Standards of Weights and Measures Act, 1976</Text>
      <Text className="text-base bg-slate-50  h-28 w-11/12 flex text-center justify-center rounded-lg p-5 mx-4 mb-8">		The Standards of Weights and Measures Act protects the right against the goods which is underweight or under measured.</Text>
     </View>
    </ScrollView>
    </View>
    </>
  )
}

export default Consumer