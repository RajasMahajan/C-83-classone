import React, { Component } from 'react';
import { Text, View,Platform,StatusBar,Image,SafeAreaView,StyleSheet, TouchableOpacity, } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
let customefonts = {"Bubblegub-sals":require("../assets/fonts/BubblegumSans-Regular.ttf")} 
let storys = require("./tempstories.json");

export default class Storycard extends Component {
constructor(props){
    super(props);
    this.state={
        fontsloaded:false
    }
}
componentDidMount(){
    this.loadfonts();
}
    loadfonts = async ()=>{
        await Font.loadAsync(customefonts);
        this.setState({
            fontsloaded:true
        })

    }
  
    render() {
        
        if(!this.state.fontsloaded){
         return(
             <AppLoading/>
         )   
        }else {
        return (
            <View
                style={{
                    flex: 1,
                  backgroundColor:"#15193c"
                }}>
        <SafeAreaView
        style={
            StyleSheet.androidsafearea
        }
        />
        <View
        style={{
            flex:0.07,
            flexDirection:'row',
            flexWrap:"wrap",

            }}
        >
        <View
        style={{
            flex:0.3,
            justifyContent:'center',
            alignItems:'center',
        }}
        
        >
            <Image
            source={require("../assets/story_image_1.png")}
            style={{
                width:"100%",
                height:"100%",
                resizeMode:"contain",
            }}
        
            ></Image>
        </View>
   <View
   style={{
     justifyContent:'center',
     paddingLeft:20,

   }}
   >
     <Text
     style={{
          fontSize:RFValue(15),
          fontFamily:'Bubblegum-sals',
          color:'white',
     }}
     >
     {this.props.story.title}
     </Text>   
     <Text
     style={{
          fontSize:RFValue(15),
          fontFamily:'Bubblegum-sals',
          color:'white',
     }}
     >
     {this.props.story.auther}
     </Text>   
     <Text
     style={{
          fontSize:RFValue(13),
          fontFamily:'Bubblegum-sals',
          color:'white',
     }}
     >
     {this.props.story.description}
     </Text>   
   </View>
     <View style={{
          padding:RFValue(10),
     }}>
     <View style={{
          justifyContent:'center',
          alignSelf:'center',
          flexDirection:'row',
          backgroundColor:'sky-blue',
          width:RFValue(160),
          height:RFValue(30),
          borderRadius:RFValue(20),

     }}>
     <Ionicons
     name={"heart"}
     size={RFValue(30)}

     />
     <Text
     style={{
          fontFamily:'Bubblegub-sals',
          color:'white',
          fontSize:RFValue(25),
          alignSelf:'center',
          marginLeft:RFValue(5),
     }}
     >
     12M
     </Text>
     </View>
     </View>
        </View>
        </View>
        )
    }
}
}
const style =StyleSheet.create({
    androidsafearea:{marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0}
})
// 