import React, { Component } from 'react';
import {View,Text,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

export default class AddAddress extends Component {
    render() {
        return (
            <View>
                <Icon name=""/>
                <Text>添加收货人</Text>
                <TextInput autoFocus placeholder='收货人' editable></TextInput>
                <TextInput placeholder='手机号码' editable></TextInput>
                <TouchableOpacity onPress={()=>{Actions.city()}}>
                    <Text>所在地区</Text>
                </TouchableOpacity>
                <TextInput placeholder='详细地址' editable></TextInput>
                <View></View>
            </View>
        )
    }
}
