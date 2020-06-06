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
    Button,
    ScrollView
} from 'react-native';
import { Icon } from '@ant-design/react-native'
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;


export default class chuanda extends Component {
    constructor(){
        super();
        this.state={
            checkColor:'#cecccc',
            chooseAddress:0,
            data:[],
            data1:[]
        }
    }
    componentDidMount(){
        console.log(this.props.userid);
        fetch("http://192.168.43.245:3000/user")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(this.props.userid==res[i].userid){
                    this.setState({
                        data:res[i]
                    })
                }
            }
            console.log(res[0]);
            console.log(res[0].userauatar)
            fetch("http://192.168.43.245:3000/wear")
            .then(res=>res.json())
            .then(res=>{
                for(var i=0;i<res.length;i++){
                    if(this.props.userid==res[i].userid){
                        this.setState({
                            data1:res[i]
                        })
                    }
                }
            })
        })
    }
    changeNum=(i)=>{
        i=this.state.data1.likenum++
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <Icon name='left' color='black' style={{paddingLeft:10}} onPress={Actions.pop}/>
                <Image source={'data:image/jpg;base64,'+this.state.data.dynImg} style={{width:120*s,height:120*s,borderRadius:50,marginLeft:10}}/>
                <View style={{width:100,height:40,backgroundColor:'gray',opacity:0.2,marginLeft:100,marginTop:-50}}>
                    <Text style={{paddingLeft:25,paddingTop:8,color:'black'}}>{this.state.data.username}</Text>
                </View>
                
                <Image source={require('../../assets/wish1.jpg')} style={{width:350,height:350,marginTop:30,marginLeft:10*s,borderRadius:10}}/>
                <Text style={{paddingLeft:50,paddingTop:20,fontFamily:'微软雅黑'}}>{this.state.data1.dynContent}</Text>
                <View style={{marginLeft:250,marginTop:30,flexDirection:'row'}}>
                <Text>{this.state.data1.likenum}</Text>
                    <Icon name='heart' style={{fontSize:25,color:'red',marginLeft:50*s}} onpress={this.changeNum()}/>
                </View>
            </View>
        )
    }
}


