import React, { Component } from 'react';
import { Text, View,Platform,StatusBar,Image,SafeAreaView,StyleSheet, TouchableOpacity, LogBox,} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import {FlatList, ScrollView, TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Asset } from 'expo';
import DropDownPicker from 'react-native-dropdown-picker'
let customefonts = {"Bubblegub-sals":require("../assets/fonts/BubblegumSans-Regular.ttf")} 
let storys = require("./tempstories.json");

export default class CreateStory extends Component {
constructor(props){
    super(props);
    this.state={
        fontsloaded:false,
        previewImage:"Image1",
        titile:'',
        description:'',
        story:'',
        moral:'',
        dropDownheight:50,
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
            <View>
                <Text>
                    AppLoading...
                </Text>
            </View>
        )
        }
        else{
            //previewImages is a dictonary, which is a data structor
        let prewiewImages={
            Image1: require('../assets/story_image_1.png'),
            Image2: require('../assets/story_image_2.png'),
            Image3: require('../assets/story_image_3.png'),
            Image4: require('../assets/story_image_4.png'),
            Image5: require('../assets/story_image_5.png')
        }
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor:'#15193c'
                }}>
                <SafeAreaView
                style={style.androidsafearea}
                />
                <View
                style={{
                    flex:0.07,
                flexDirection:'row',
                justifyContent:'center',
                }}
                >
                <View
                style={{
                    flex:0.4,
                    justifyContent:'center',
                    alignSelf:'center',
                }}
                >
                <Image
                style={{
                    width:'100%',height:'100%',
                    resizeMode:'contain',
                }}
                source={require('../assets/logo.png')}
                />
                </View>
                <View
                style={{
                    flex:0.55,
                    justifyContent:'center',

                }}
                
                >
                <Text
                style={{
                    fontFamily:'Bubblegub-sals',
                    color:'white',
                    fontSize:RFValue(25)
                }}
                >New Story</Text>
                </View>

                </View>
                <View
                style={{
                    flex:0.85
                }}
                >
                <ScrollView>
                <Image
                style={{
                height:RFValue(250),
                width:RFValue('93%'),
                resizeMode:'contain',
                justifyContent:'center',
                alignSelf:'center',
                }}
                source={prewiewImages[this.state.prewiewImages]}
                />
                <View
                style={{
                height:RFValue(this.state.dropDownheight)
                }}
                >
                <DropDownPicker
                items={[
                {
                label:"Image1",
                value:"Image1",
                },
                {
                    label:"Image2",
                    value:"Image2",
                    },
                    {
                        label:"Image3",
                        value:"Image3",
                        },
                        {
                            label:"Image4",
                            value:"Image4",
                            },
                            {
                                label:"Image5",
                                value:"Image5",
                                }


                ]}
                defaultValue ={this.state.previewImage}
                containerStyle={{
                    height:RFValue(40),
                    borderRadius:RFValue(20),
                    paddingLeft:RFValue(10),
                    paddingRight:RFValue(10),
                    marginBottom:RFValue(10),
                    
                }}
                onOpen={
                    ()=>{
                    this.setState({
                        dropDownheight:170
                    })
                    }
                }
                onClose={
                    ()=>{
                    this.setState({
                        dropDownheight:35
                    })
                    }
                }
                style={{
                    backgroundColor:'transperent'
                }}
                dropDownStyle={{backgroundColor:'#2f345b',
                     marginLeft:10   
        }}
        itemStyle={{
            justifyContent:'flex-start'
        
        }}
        labelStyle={{
            fontFamily:'Bubblegub-sals',
            color:'white'
        }}
        arrowStyle={{
            fontFamily:'Bubblegub-sals',
            color:'white'
        }}
        onChangeItem={
            (item)=>{
            this.setState({
                prewiewImage:item.value
            })
            }
        }
                />
                </View>
                <TextInput
                style={{
                
                }}
                />
                <TextInput
                style={style.textinputone}
                placeholder={"titile"}
                placeholderTextColor='white'
                onChangeText={(text)=>{
                this.setState({
                    titile:text
                })
                }}
                />
                <TextInput
                multiline={true}
                numberOfLines={20}
                 onChangeText={(text)=>{
                    this.setState({
                        story:text
                    })
                    }}
                 style={style.textinputone}
                 placeholderTextColor='white'
                 placeholder={"story"}
                />
                <TextInput
                multiline={true}
                                numberOfLines={4}
                onChangeText={(text)=>{
                    this.setState({
                        moral:text
                    })
                    }}
                 style={style.textinputone}
                 placeholderTextColor='white'
                 placeholder={"moral"}
                />
                <TextInput
                multiline={true}
                                numberOfLines={8}
                onChangeText={(text)=>{
                    this.setState({
                        description:text
                    })
                    }}
                placeholder={'description'}
                placeholderTextColor='white'
                 style={style.textinputone}
                />
                    </ScrollView>
                </View>
            </View>
        )
            }
    }
}

const style =StyleSheet.create({
    androidsafearea:{marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0},
    textinputone:
    {
        height: RFValue(40),
        borderRadius: RFValue(10),
        borderColor: "white",
        borderWidth: RFValue(1),
        fontFamily: "Bubblegum-Sans",
        color: "white",
        marginLeft: RFValue(10),
        marginRight: RFValue(10),
        marginTop: RFValue(10),
        padding: RFValue(10),
    }
})
// 
