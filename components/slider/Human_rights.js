import { View, Text ,SafeAreaView,ScrollView,Image} from 'react-native'
import React from 'react'

const Human_rights = () => {
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
     <Text className="text-2xl ">HumanRIghts Act</Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4 mt-4 mb-4">	
     In this, it protects the right of the consumer and makes user aware of their rights.</Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4  mb-4">	
     Right to life Everyone has the right to life, liberty and security of person.</Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4 mb-4">	
     . No slavery No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.</Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4 mb-4">	
     No torture and inhuman treatment No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment. </Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4 mb-4">	
     Same right to use law Everyone has the right to recognition everywhere as a person before the law. </Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4 mb-4">	
     Equal before the law All are equal before the law and are entitled without any discrimination to equal protection of the law. </Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4 mb-4">	
     No unfair detainment No one shall be subjected to arbitrary arrest, detention or exile. </Text>
     </View>
     <View>
     <Text className="text-base bg-slate-50  h-20 w-11/12 flex text-center justify-center rounded-lg pt-3 mx-4 mb-4">	
     Right to nationality Everyone has the right to a nationality. No one shall be arbitrarily deprived of his nationality nor denied the right to change his nationality. </Text>
     </View>
    </ScrollView>
    </View>
    </>
  )
}

export default Human_rights