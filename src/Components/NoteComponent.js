import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const NoteComponent = (props) => {
    
  return (
    <View style={{width:'100%',flexDirection:'row',alignItems:'center',marginVertical:15}}>
      <Image style={styles.imageStyle}  source={require('../test.jpg')} />
      <View style={{marginStart:'6%',}}>
        <Text style={{fontSize:20,color:'#000',fontWeight:'bold',marginBottom:5}}>
              {props.name}
        </Text>
        <Text style={{color:'#a0a3b',size:18,marginTop:5}}>{props.note}</Text>
      </View>
      </View>
  )
}

export default NoteComponent

const styles = StyleSheet.create({
    imageStyle: {
        width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 1000,
    padding:3
      }
})