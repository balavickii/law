// import { View, Text,StyleSheet,Dimensions,Image, TouchableOpacity } from 'react-native'
// import React from 'react'

// export const SLIDER_WIDTH=Dimensions.get('window').width+125;
// export const ITEM_WIDTH=Math.round(SLIDER_WIDTH*0.7)

// const CaroselCardItem = ({item,index}) => {
//   return (
//     <View style={styles.container} key={index}>
//       <Text style={styles.header}>{item.title}</Text>
//       <Text style={styles.body}>{item.body}
// </Text>
//     </View> 
//   )
// }
// const styles=StyleSheet.create({

//     container:{
//         backgroundColor:'lightpink',
//         borderRadius:8,
//         width:ITEM_WIDTH,
//         height:150,
//         marginTop:20,
//         shadowColor: 'brown',
//         shadowOffset: {width: -2, height: 4},
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         elevation:7,
//     },
//     header:{
//         color:'#222',
//         fontSize: 28,
//         fontWeight:"bold",
//         paddingLeft:20,
//         paddingTop: 20,
//     },
//     body:{
//         color:'#222',
//         fontSize:18,
//         paddingLeft:20,
//         paddingRight:20,
//     }
// })
// export default CaroselCardItem