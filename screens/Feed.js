import React, { Component } from 'react';
import { Text, View,Platform,StatusBar,Image,SafeAreaView,StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
let customefonts = {"Bubblegub-sals":require("../assets/fonts/BubblegumSans-Regular.ttf")} 
let storys = require("./tempstories.json");
import Storycard from './storycard';
export default class Feed extends Component {
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
    keyExtractor=(item,index)=>{
    index.toString();
    }
    renderitem=({item: storys})=>{
    return(
        <Storycard
        story={storys}
        />
    )
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
            source={require("../assets/logo.png")}
            style={{
                width:"100%",
                height:"100%",
                resizeMode:"contain",
            }}
        
            ></Image>
        </View>
        <View
        style={{
            justifyContent:"center",
            alignItems:'center',
            flex:0.5
        }}
        >
            <Text
            style={{
                fontFamily:'Bubblegub-sals',
                fontSize:RFValue(28),
                color:'white'
            }}
            >story telling App</Text>

        </View>
            
        </View>
        <View
        style={{
            flex:0.85
        }}
        >
        <FlatList
        keyExtractor={this.keyExtractor}
        renderItem={this.renderitem}
        data={storys}
        />
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