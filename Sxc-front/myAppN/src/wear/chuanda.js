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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;


export default class chuanda extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <Button title='返回' onPress={()=>Actions.home()}/>
                <Image source={require('../../assets/icon/1.jpg')} style={{width:120*s,height:120*s}}/>
                <Text style={{marginLeft:80,marginTop:-50}}>小小</Text>
                <Image source={require('../../assets/wish1.jpg')} style={{width:350,height:350,marginTop:50,marginLeft:10*s}}/>
                <Text>特别好看的一条裙子，很舒服</Text>
            </View>
        )
    }
}


