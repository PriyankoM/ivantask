import { StyleSheet, Text, View } from 'react-native'
import React ,{ useRef }from 'react'
import RBSheet from "react-native-raw-bottom-sheet";
import { SafeAreaView } from 'react-native-safe-area-context';

const AddNoteSheet = () => {
    const refRBSheet = useRef();
    setTimeout(()=>refRBSheet.current.open(),100)
  return (
    <RBSheet style={{flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
        }}>
      <Text>AddNoteSheet</Text>
    </RBSheet>
  )
}

export default AddNoteSheet

const styles = StyleSheet.create({})