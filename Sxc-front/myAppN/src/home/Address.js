import React, { Component } from 'react';
import {View,Text,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

const { width ,height} = Dimensions.get('window');
const s = width / 345;

export default class Address extends Component {
    constructor(){
        super();
        this.state={
            checkColor:'#cecccc',
            chooseAddress:false
        }
    }
    changeA=()=>{
        if(!this.state.chooseAddress){
            this.setState({
                checkColor:'#ea3b3b',
                chooseAddress:true
            })
        }
        else{
            this.setState({
                checkColor:'#cecccc',
                chooseAddress:false
            })
        }
    }
    render() {
        return (
            <View style={{width:width,height:height,backgroundColor:'white'}}>
                <View style={{flexDirection:'row',marginTop:20*s}}>
                    <Icon name='arrowleft' style={{fontSize:16*s,marginLeft:10*s}}/>
                    <TouchableOpacity onPress={Actions.addAddress}>
                        <Text style={{color:'#ea3b3b',marginLeft:245*s}}>+新增地址</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:16*s,fontWeight:'bold',marginTop:20*s,marginLeft:10*s}}>收货地址</Text>
                <View style={{borderBottomWidth:1,borderBottomColor:'#cecccc',width:325*s,marginLeft:10*s,height:90*s}}>
                    <View style={{flexDirection:'row',marginTop:20*s}}>
                        <Text style={{marginLeft:10*s}}>李</Text>
                        <Text style={{marginLeft:10*s,color:'#7a7979'}}>13676543456</Text>
                    </View>
                    <Text style={{marginLeft:10*s}}>贵州省 安顺市 西秀区</Text>
                    <Text style={{marginLeft:10*s}}>图书路</Text>
                    <TouchableOpacity onPress={this.changeA} style={{position:'relative',left:290*s,top:-35*s}}>
                        <Text>
                            <Icon name='checkcircleo' style={{fontSize:20*s,color:this.state.checkColor}}/>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
