import { View, Text ,StyleSheet, Dimensions, SafeAreaView} from 'react-native'
import React from 'react'
import Swiper from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const {width,height}=Dimensions.get('window')
const Onboarding = () => {
  const navigation=useNavigation();
    const GoToHome=()=>{
      navigation.navigate('Userpage')
    }
  return (
<SafeAreaView className="flex flex-row justify-center items-center">
<View style={styles.wview}>
     <Swiper
      onDone={GoToHome}
      onSkip={GoToHome}
        bottomBarColor='E1FAFF'
        bottomBarHighlight={styles.bottom}
  pages={[
    {
        backgroundColor: '#fff',
        image:  (<View style={styles.lottie}>
          <LottieView source={require('../asset/front.json')} autoPlay loop />
        </View>),
        title: <Text className="mb-3 text-3xl font-semibold">Home</Text>,
        subtitle:<Text className="text-xl text-center p-5 ">The way to get law & Fine details and <Text className="text-cyan-600">consultation</Text> with Lawyer...</Text>,
      },
  
    {
        backgroundColor: '#fff',
        image:  (<View style={styles.lottie} >
        <LottieView source={require('../asset/Message.json')} autoPlay loop  />
        </View>),
        title: <Text className="mb-3 text-3xl font-semibold">Message</Text>,
        subtitle: <Text className="text-xl text-center p-5 ">You can Clearly get your personlized consultation with <Text className="text-cyan-600">Lawyers </Text>Here...</Text>,
      },
      {
        backgroundColor: '#fff',
        image:  (<View style={styles.lottie}>
        <LottieView source={require('../asset/Home.json')} autoPlay loop />
        </View>),
        title: <Text className="mb-3 text-3xl font-semibold">ChatBot</Text>,
        subtitle:<Text className="text-xl text-center p-5 ">Clear all your doubts related to <Text className="text-cyan-600">laws and Fines </Text>that we face in our day to day life by just typing...</Text>,
      },
      {
        backgroundColor: '#fff',
        image:  (<View style={styles.lottie}>
        <LottieView source={require('../asset/profile.json')} autoPlay loop />
        </View>),
        title: <Text className="mb-3 text-3xl font-semibold">Profile</Text>,
        subtitle:<Text className="text-xl text-center p-5 ">See what your profile could look like with the <Text className="text-cyan-600">details</Text> you give.</Text>,
      },


  ]}
/>
    </View>
</SafeAreaView>
  )
}

const styles=StyleSheet.create({
    lottie:{
        width:width*0.9,
        height:width
    },

    wview:{
        width:width,
        height:height
    }
    
   
})
export default Onboarding