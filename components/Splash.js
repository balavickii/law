import { View, Text, Image, ActivityIndicator } from 'react-native';
import React, { useLayoutEffect } from 'react';
// import { auth, db } from "../firebase";
import { useNavigation } from '@react-navigation/native';
// import { doc, getDoc } from 'firebase/firestore'; // Import doc and getDoc
// import { useDispatch } from 'react-redux';
// import {SET_USER} from "../Context/actions/Useraction"

const Splash = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch()

  useLayoutEffect(() => {
    checkLoggedUser();
  }, []);

  const checkLoggedUser = async () => {
    auth.onAuthStateChanged(async (userCred) => { // Use async here
      if (userCred?.uid) {
        const docRef = doc(db, "Users", userCred?.uid); // Define docRef
        try {
          const docSnap = await getDoc(docRef); // Use await to get document data
          if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            dispatch(SET_USER(docSnap.data()))
          } else {
            console.log("No such document!");
          }

          setTimeout(() => {
            navigation.replace("Onboarding");
          }, 2000);
        } catch (error) {
          console.error("Error getting document:", error);
        }
      } else {
        navigation.navigate("Ulogin");
      }
    });
  }

  return (
    <View className="flex-1 justify-evenly items-center bg-white">
      <View>
        <Image source={require("../asset/logo.jpg")} style={{ width: 100, height: 100 }} />
      </View>

      <View>
        <ActivityIndicator size={35} />
        <View className="mt-5">
          <Text className="text-gray-500">Loading..</Text>
        </View>
      </View>
    </View>
  )
}

export default Splash;
