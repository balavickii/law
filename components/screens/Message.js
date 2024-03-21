import { View, Text } from 'react-native'
import React from 'react'

const Message = () => {
  return (
    <View style={{flex:1,textAlign:'center',justifyContent:'center',backgroundColor:"white"}}>
      <Text style={{textAlign:'center',color:'pink',fontSize:30,fontWeight:600}}>This is message screen</Text>
    </View>
  )
}

export default Message