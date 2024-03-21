import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar />
      {/* <View className="bg-white"> */}
      <View className="flex flex-row items-center justify-center w-full h-10 mt-7 ">
        <Image
          source={require("../carousel_slide/icon-removebg-preview.png")}
          className=" w-14 h-16 "
        />
        <Text className="text-xl font-bold px-5">LAW FRIEND</Text>
      </View>
      <View className=" mt-8 bg-slate-50 w-screen h-1 mb-5"></View>

      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          nextFocusDown={10}
          activeOpacity={1}
          onPress={() => navigation.navigate("Motor_vehicle")}
        >
          <View className=" bg-indigo-400  p-5 rounded-r-3xl w-11/12 h-48   bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0 font-medium flex mx-4 mb-4 shadow-2xl mt-3 shadow-black">
            <View className=" bg-cyan-50 rounded-tr-3xl  flex  shadow-xl shadow-slate-700 content-center h-12 font-medium w-full  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100">
              <Text className="ml-3 my-2 text-2xl bg-opacity-0  font-semibold   flex-auto  justify-start content-center ">
                MotorVehicle Act
              </Text>
            </View>
            <Text className=" text-base mt-3 indent-5	">
              The motor vehicle act makes it mandatory for any driver to have a
              valid driving licence and no vehicle can be driven without being
              registered under the motor vehicle act
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Consumer")}
        >
          <View className=" bg-cyan-400 p-5 rounded-r-3xl w-11/12 h-52 font-medium flex mx-4 mb-4 shadow-black adow-2xl">
            <View className="bg-cyan-50  rounded-tr-3xl flex content-center h-12 font-medium  w-full   bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 shadow-xl shadow-slate-700">
              <Text className="ml-3 my-2 text-2xl flex-auto  justify-start content-center ">
                Consumer Act
              </Text>
            </View>
            <Text className=" text-base mt-3 indent-5">
              {" "}
              The Consumer Protection Act, implemented in 1986. It safeguards
              and encourages consumers to speak against insufficiency and flaws
              in goods and services.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Human_rights")}
        >
          <View className=" bg-orange-400 p-5 rounded-r-3xl w-11/12 h-52 font-medium flex mx-4 mb-4 shadow-black adow-2xl">
            <View className="bg-cyan-50 rounded-tr-3xl  flex  content-center h-12 font-medium shadow-xl shadow-slate-700 ">
              <Text className="ml-3 my-2 text-2xl flex-auto  justify-start content-center ">
                HumanRights Act
              </Text>
            </View>
            <Text className=" text-base mt-3 indent-5">
              {" "}
              The Human Rights Act gives you legal protection of your human
              rights, such as your right to a fair trial. Each right is referred
              to as a separate article, for example, Article 2: Right to life.{" "}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Marriage")}
        >
          <View className=" bg-rose-400 p-5 rounded-r-3xl w-11/12 h-52 font-medium flex mx-4 mb-4 shadow-black adow-2xl">
            <View className="bg-cyan-50 rounded-tr-3xl  flex  content-center h-12 font-medium shadow-xl shadow-slate-700 ">
              <Text className="ml-3 my-2 text-2xl flex-auto  justify-start content-center ">
                Marriage Act
              </Text>
            </View>
            <Text className=" text-base mt-3 indent-5">
              {" "}
              A marriage is directly registered by the Registrar of Marriage
              under section 8 of Hindu Marriage Act-1955 on the same working
              day. Verification of all the documents is carried out on the date
              of application{" "}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Child")}
        >
          <View className=" bg-fuchsia-400 p-5 rounded-r-3xl w-11/12 h-52 font-medium flex mx-4 mb-4 shadow-black adow-2xl">
            <View className=" bg-cyan-50 rounded-tr-3xl  flex  content-center h-12 font-medium shadow-xl shadow-slate-700">
              <Text className="ml-3 my-2 text-2xl flex-auto  justify-start content-center ">
                Child Act
              </Text>
            </View>
            <Text className=" text-base mt-3 indent-5">
              {" "}
              An Act to provide for the care, protection, maintenance, welfare,
              training, education and rehabilitation of neglected or delinquent
              children and for the trial of delinquent children in the Union
              territories.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("Food")}
        >
          <View className=" bg-green-400 p-5 rounded-r-3xl w-11/12 h-52 font-medium flex mx-4 mb-36 shadow-black adow-2xl">
            <View className=" bg-cyan-50 rounded-tr-3xl  flex  content-center h-12 font-medium shadow-xl shadow-slate-700">
              <Text className="ml-3 my-2 text-2xl flex-auto  justify-start content-center ">
                Food Act
              </Text>
            </View>
            <Text className=" text-base mt-3 indent-5">
              {" "}
              The Food Safety and Standards Act (FSS), 2006 is the primary law
              for the regulation of food products. This act also sets up the
              formulation and enforcement of food safety standards in India.
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
}
