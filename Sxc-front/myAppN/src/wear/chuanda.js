import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from 'react-native';
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;


export default class chuanda extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <Icon name='left' color='black' style={{paddingLeft:10}} onPress={Actions.pop}/>
                <Image source={require('../../assets/icon/1.jpg')} style={{width:120*s,height:120*s,borderRadius:50,marginLeft:10}}/>
                <View style={{width:100,height:40,backgroundColor:'gray',opacity:0.2,marginLeft:100,marginTop:-50}}>
                    <Text style={{paddingLeft:25,paddingTop:8,color:'black'}}>小小</Text>
                </View>
                
                <Image source={require('../../assets/wish1.jpg')} style={{width:350,height:350,marginTop:30,marginLeft:10*s,borderRadius:10}}/>
                <Text style={{paddingLeft:50,paddingTop:20,fontFamily:'微软雅黑'}}>特别好看的一条裙子，很舒服</Text>
                <View style={{marginLeft:250,marginTop:30,flexDirection:'row'}}>
                    <Text>112</Text>
                    <Icon name='heart' style={{fontSize:25,color:'red',marginLeft:50*s}}/>
                </View>
            </View>
        )
    }
}


