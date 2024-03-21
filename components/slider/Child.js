import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {} from "react-native-gesture-handler";

const Child = () => {
  const act_data = [
    {
      id: 1,
      title: "Constitution of India (1950)",
      description:
        "Although not exclusively a child-related law, the Constitution contains provisions safeguarding the rights of children, protection against exploitation, and special provisions for children belonging to weaker sections of society.",
    },
    {
      id: 2,
      title: "Juvenile Justice (Care and Protection of Children) Act, 2015",
      description:
        " This law focuses on the care, protection, and rehabilitation of children in conflict with the law and children in need of care and protection. It replaced the Juvenile Justice (Care and Protection of Children) Act, 2000.",
    },
    {
      id: 3,
      title: "Protection of Children from Sexual Offences (POCSO) Act, 2012",
      description:
        "This act aims to protect children from sexual abuse and exploitation by defining various forms of sexual offenses against children and prescribing stringent punishment for offenders.",
    },
    {
      id: 4,
      title: "Child Labour (Prohibition and Regulation) Act, 1986",
      description:
        " This act prohibits the employment of children in certain hazardous occupations and regulates the working conditions of children in non-hazardous occupations.",
    },
    {
      id: 5,
      title:
        "Right of Children to Free and Compulsory Education (RTE) Act, 2009",
      description:
        " The RTE Act mandates free and compulsory education for all children aged 6 to 14 years. It ensures the establishment of neighborhood schools and lays down norms and standards for ensuring quality education.",
    },
    {
      id: 6,
      title:
        "Child Marriage Restraint Act (Prohibition of Child Marriage Act), 2006",
      description:
        "This act prohibits the solemnization of child marriages and provides for the prevention and protection of children from such marriages.",
    },
    {
      id: 7,
      title:
        "National Commission for Protection of Child Rights (NCPCR) Act, 2005",
      description:
        " This act provides for the establishment of the National Commission for Protection of Child Rights (NCPCR) to protect and promote the rights of children in India.",
    },
    {
      id: 8,
      title: "Children (Pledging of Labour) Act, 1933",
      description:
        "This act prohibits the pledging of the labour of children and lays down penalties for its violation.",
    },
    {
      id: 9,
      title: "Bonded Labour System (Abolition) Act, 1976",
      description:
        " While not exclusively focused on children, this act prohibits the practice of bonded labour, which often affects children and their families.",
    },
    {
      id: 10,
      title:
        "Child and Adolescent Labour (Prohibition and Regulation) Act, 1986",
      description:
        "This act prohibits the employment of children in certain occupations and processes and regulates the conditions of work in others.",
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
          <Text className="text-2xl ">Child Act</Text>
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

export default Child;
