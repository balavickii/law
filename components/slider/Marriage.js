import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";

const Marriage = () => {
  const act_data = [
    {
      id: 1,
      title: "Section 2",
      description: "Application of Act.",
    },
    {
      id: 2,
      title: "Section 3",
      description: " Definitions and interpretations.",
    },
    {
      id: 3,
      title: "Section 4",
      description: "Hindu Minority and Guardianship Act",
    },
    {
      id: 4,
      title: "Section 5",
      description: "Act not to apply to certain properties.",
    },
    {
      id: 5,
      title: "Section 6",
      description: " Devolution of interest in coparcenary property.",
    },
    {
      id: 6,
      title: "Section 7",
      description: "Ceremonies for a Hindu Marriage.",
    },
    {
      id: 7,
      title: "Section 8",
      description: "General rules of succession in the case of males.",
    },
    {
      id: 8,
      title: "Section 9",
      description: "Order of succession among heirs in the Schedule.",
    },
    {
      id: 9,
      title: "Section 10",
      description:
        "Distribution of property among heirs in Class I of the Schedule.",
    },
    {
      id: 10,
      title: "Section 11",
      description:
        "Distribution of property among heirs in Class II of the Schedule.",
    },
  ];

  return (
    <>
      <SafeAreaView>
        <View className="bg-white h-full w-full">
          <View className="flex flex-row items-center justify-center w-full h-10 mt-7 ">
            <Image
              source={require("../carousel_slide/icon.jpg")}
              className=" w-14 h-16 "
            />
            <Text className="text-xl font-bold px-5">LAW FRIEND</Text>
          </View>
          <View className=" mt-8 bg-slate-50 w-screen h-1 mb-5"></View>
          <View className="w-11/12 h-14 bg-cyan-500 flex  items-center justify-center rounded-lg mx-4">
            <Text className="text-2xl ">Marriage Act</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="mb-5">
              {act_data.map((item) => {
                return (
                  <View key={item.id}>
                    <View className=" w-screen h-24  flex justify-center items-center">
                      <View className=" w-11/12 h-8 bg-slate-200  flex justify-center items-center rounded-md">
                        <Text className="text-xl">{item.title}</Text>
                      </View>
                      <View className=" w-11/12 h-12 bg-slate-50 flex justify-center items-center rounded-md mt-2">
                        <Text className="text-base">{item.description}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Marriage;
