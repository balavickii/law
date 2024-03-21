
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Logo from '../components/Logo';
import Ulhome from '../components/Ulhome';
import User from '../components/User';
import Lawyer from "../components/Lawyer";
import Ulogin from '../components/Ulogin';
import Onboarding from '../components/Onboarding';

import Userpage from '../components/Userpage';
import Child from '../components/slider/Child'
import Food from '../components/slider/Food'
import Consumer from '../components/slider/Consumer'
import Human_rights from '../components/slider/Human_rights'
import Marriage from '../components/slider/Marriage'
import Motor_vehicle from '../components/slider/Motor_vehicle'
import Splash from '../components/Splash';
// import { Provider } from 'react-redux';
// import Store from '../Context/Store';



const Stack=createNativeStackNavigator();

const Appnavigation = () => {
  return (
   <NavigationContainer>
    {/* <Provider store={Store}> */}
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Logo'>

        <Stack.Screen name='Logo' component={Logo} />
        <Stack.Screen name='Ulhome' component={Ulhome}/>
        <Stack.Screen name='User' component={User}/>
        <Stack.Screen name='Lawyer' component={Lawyer}/>
        <Stack.Screen name="Ulogin" component={Ulogin}/>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Onboarding' component={Onboarding}/>
        <Stack.Screen name='Userpage' component={Userpage}/>
        <Stack.Screen name='Motor_vehicle' component={Motor_vehicle} />
        <Stack.Screen name='Child' component={Child} />
        <Stack.Screen name='Food' component={Food} />
        <Stack.Screen name='Human_rights' component={Human_rights} />
        <Stack.Screen name='Consumer' component={Consumer} />
        <Stack.Screen name='Marriage' component={Marriage} />
</Stack.Navigator>

    {/* </Provider> */}
  
   </NavigationContainer>
  )
}

export default Appnavigation