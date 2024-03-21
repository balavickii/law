import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Ulogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // console.log(email,password)
      const data = await axios.post("http://192.168.59.254:5001/user/login", {
        email: email,
        password: password,
      });

      console.log(data.data);
      if (data.data.message === "sucess") {
        navigation.navigate("Onboarding");
      } else {
        navigation.navigate("Ulogin");
      }
    } catch (error) {
      // Handle sign-up error
      Alert.alert("login  Failed", "Failed to login . Please try again.");
      console.error("login  Error:", error);
    }

    // try {
    //   const res=await createUserWithEmailAndPassword(auth,email,password)
    //   const data={
    // try {
    // const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // const user = userCredential.user;
    // const docref=  doc(db,"Users",user.uid)
    // const docSnap = await getDoc(docref)
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   console.log("No such document!");
    // }

    //     navigation.navigate("Splash")
    //   } catch (error) {
    //     Alert.alert('Error', error.message);
  };

  return (
    <SafeAreaView className="flex-1 bg-white justify-evenly items-center">
      <View className="flex flex-col justify-center items-center">
        <Image
          source={require("../asset/logo.jpg")}
          style={{ width: 75, height: 75 }}
        />
        <Text className="text-xl font-semibold mt-5">Welcome!</Text>
      </View>

      <View className="w-9/12">
        <TextInput
          placeholder="Enter Email"
          onChangeText={(text) => setEmail(text)}
          className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg "
        />

        <TextInput
          placeholder="Enter Password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          className="bg-slate-50 text-gray-500 px-5 py-3 text-lg rounded-lg mt-6 "
        />

        <TouchableOpacity
          className=" bg-cyan-500 mt-5 py-4 rounded-lg"
          onPress={handleLogin}
        >
          <Text className="text-center text-white font-semibold">Login</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18 }}>Create a New Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <Text className="text-cyan-600 font-bold text-lg">Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Ulogin;
