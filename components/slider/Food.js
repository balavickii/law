import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {} from "react-native-gesture-handler";

const Food = () => {
  const act_data = [
    {
      id: 1,
      title: "Food Safety and Standards Act, 2006 (FSSA)",
      description:
        "This is one of the most comprehensive laws governing food safety and regulation in India. It aims to consolidate various food laws and establish the Food Safety and Standards Authority of India (FSSAI) to regulate and oversee food safety standards throughout the country. ",
    },
    {
      id: 2,
      title: "Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011",
      description:
        "These regulations provide guidelines for the licensing and registration of food businesses in India. They specify the requirements and procedures for obtaining licenses and registrations from the FSSAI.",
    },
    {
      id: 3,
      title: "Prevention of Food Adulteration Act, 1954 (PFA)",
      description:
        " Although largely repealed with the introduction of FSSA, certain provisions of the Prevention of Food Adulteration Act, 1954, are still relevant. This act aimed to prevent the adulteration of food and ensure its purity and quality.",
    },
    {
      id: 4,
      title: "Packaged Commodities Rules, 2011",
      description:
        "  These rules regulate the packaging and labeling of packaged commodities, including food products, sold in India. They specify the mandatory information to be displayed on the labels of packaged food items.",
    },
    {
      id: 5,
      title:
        "Food Safety and Standards (Food Product Standards and Food Additives) Regulations, 2011",
      description:
        "These regulations prescribe the standards and specifications for various food products and food additives, including permissible limits of contaminants and residues.",
    },
    {
      id: 6,
      title:
        "Food Safety and Standards (Prohibition and Restrictions on Sales) Regulations, 2011",
      description:
        " These regulations prohibit or restrict the sale of certain food products that do not comply with the standards set by the FSSAI.",
    },
    {
      id: 7,
      title:
        "Food Safety and Standards (Packaging and Labelling) Regulations, 2011",
      description:
        "These regulations specify the requirements for packaging and labeling of food products to ensure consumer safety and prevent misleading information.",
    },
    {
      id: 8,
      title: "Weights and Measures (Packaged Commodities) Rules, 1977",
      description:
        "These rules govern the packaging of commodities, including food products, and prescribe standards for weights, measures, and labeling of packaged goods.",
    },
  ];

  return (
    <SafeAreaView>
      <View className=" bg-white h-full w-full">
        <View className="flex flex-row items-center justify-center w-full h-10 mt-7 ">
          <Image
            source={require("../carousel_slide/icon.jpg")}
            className=" w-14 h-16 "
          />
          <Text className="text-xl font-bold px-5">LAW FRIEND</Text>
        </View>
        <View className=" mt-8 bg-slate-50 w-screen h-1 mb-5"></View>
        <View className="w-11/12 h-14 bg-cyan-500 flex  items-center justify-center rounded-lg mx-4">
          <Text className="text-2xl ">Food Act</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-5">
            {act_data.map((item) => {
              return (
                <View key={item.id}>
                  <View className=" w-screen   flex justify-center items-center">
                    <View className=" w-11/12 h-8 bg-slate-200  flex justify-center items-center rounded-md">
                      <Text
                        className="text-xl"
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View className=" w-11/12 h-auto bg-slate-50 flex justify-center items-center rounded-md mt-2 mb-2">
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
  );
};

export default Food;
