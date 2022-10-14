import { StyleSheet, Image,Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TopBarView = () => {
  return (
    <View style={styles.topbar}>
            <Image style={styles.imageStyle}  source={require('../test.jpg')} />
            <View style={{flexDirection: "row",justifyContent:'space-around'}}>
                <Feather style={{paddingRight:'3%'}}  name="search" size={30} color="#a0a3ad"/>
                <Ionicons  name="notifications" size={30} color="#a0a3ad"/>
            </View>
      </View>
  )
}

export default TopBarView

const styles = StyleSheet.create({
    imageStyle: {
        width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 1000,
    marginRight:'70%'
      },
      topbar:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        //backgroundColor:'#000',
        flexDirection: "row",
        paddingVertical:'6%',
        paddingHorizontal:'8%'
      },
})