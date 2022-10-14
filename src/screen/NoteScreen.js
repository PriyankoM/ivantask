import { StyleSheet, Text, View,Button,Image,Dimensions, TouchableOpacity,TextInput,Pressable, ScrollView, FlatList  } from 'react-native'
import React,{ useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from 'react-native-vector-icons/AntDesign'
import SearchBar from "react-native-dynamic-search-bar";
import NoteComponent from '../Components/NoteComponent';



const NoteScreen = ({c,onPress}) => {
  const refRBSheet = useRef();
  const [value,changeValue]=useState('')
  const [myNoteList,changeList]=useState([
    {name:'Priyanko Mistri',note:'this is Priyanko Note'},
    {name:'Rohan Mistri',note:'this is Rohan Note'},
    {name:'Rahul',note:'this is Rahul Note'}
  ])

  const addNotes=()=>{

  }

  // setTimeout(()=>refRBSheet.current.open(),100)
  // useEffect(()=>{
  //  refRBSheet.current.open()
  // },[])

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <TouchableOpacity 
  style={{
    top:-30,
    justifyContent:'center',
    alignItems:'center',
    ...styles.shadow
  }}
  onPress={()=>{refRBSheet.current.open()}}
  >
    <Image style={{
      width:70,
      height:70,
      borderRadius:35,
      // backgroundColor:'#e32f45'
    }}
    source={require('./../plus.png')}
    />

  </TouchableOpacity>
       {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} /> */}

       <RBSheet style={styles.rbstyle}
        closeOnDragDown={true}
        closeOnPressMask={false}
        ref={refRBSheet}
        animationType='slide'
        height={Dimensions.get("window").height-60}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          container: {backgroundColor: "#fff",borderRadius:36},
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
        >
      <View style={{marginTop:'6%',justifyContent:'space-between',flexDirection:'row'}}>
          <Text style={{color:'#52575b',fontSize:15,fontWeight:'bold',marginStart:'40%'}}>ADD NOTES</Text>
          <TouchableOpacity onPress={()=>{refRBSheet.current.close()}}>
          <AntDesign style={{marginRight:'2%'}} name='close' color='#9e9e9e' size={15}/>
          </TouchableOpacity>
          
      </View>
      <Text style={{color:'#000',marginTop:'5%',marginStart:'5%'}}>
        Add Note
      </Text>
      <TextInput style={{width:'100%',margin:'5%'}}
      multiline
      placeholder='add note'
        onChangeText={(text)=>changeValue(text)}
        value={value}
          />
      <View style={{flexDirection:'row',marginStart:'40%',height:'11%',width:Dimensions.get("window").width
    }}>
      <Pressable style={{backgroundColor: '#535555',...styles.buttonstyle}} onPress={()=>changeValue('')}>
      <Text style={styles.text}>clear</Text>
    </Pressable>
    <Pressable style={{backgroundColor: '#154bde',...styles.buttonstyle}} onPress={()=>{
      let newNote={
        name:'Priyanko Mistri',
        note:value
      }
      let newNoteList=myNoteList
      newNoteList.unshift(newNote)
      changeList(newNoteList)
      console.log(newNote)
      changeValue('')
    }}>
      <Text style={styles.text}>save</Text>
    </Pressable>
      </View>
      <SearchBar 
      clearIconImageStyle={{marginVertical:'2%',color:'#fff'}}
      fontColor="#c6c6c6"
      iconColor="#c6c6c6"
    shadowColor="#282828"
    cancelIconColor="#c6c6c6"
    backgroundColor="#fff"
    placeholder="Search here"
    onChangeText={(text) => {
    }}
    //onSearchPress={() => console.log("Search Icon is pressed")}
    onClearPress={() => {}}
    onPress={() => alert("onPress")}
    style={{marginVertical:'3%'}}
    />
      <FlatList style={{width:'100%',marginHorizontal:'3%'}}
      data={myNoteList}
      renderItem={(items)=>{
       // console.log(items);
        return(
        <NoteComponent name={items.item.name} note={items.item.note}/>
        )
      }}

/>

      
    </RBSheet>
    
    </SafeAreaView>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
  rbstyle:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a2a4a7",
    borderRadius:50
  },
  buttonstyle:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '4%',
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    margin:'2%',
    width:'25%'
    
    
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  
})