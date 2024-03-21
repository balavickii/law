import { View } from 'react-native'
import React from 'react'
import Chat from '../src/index'


const ChatBot = () => {
  return (
    <View style={{flex:1,textAlign:'center',justifyContent:'center',backgroundColor:"white"}}>
<Chat/>
    </View>
  )
}

export default ChatBot