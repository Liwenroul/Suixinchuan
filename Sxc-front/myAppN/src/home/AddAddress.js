import React, { Component } from 'react';
import {View,Text,Dimensions,TouchableOpacity,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import { List, Picker, Provider } from '@ant-design/react-native';
import { district } from 'antd-mobile-demo-data';


const data = require('@bang88/china-city-data');
const { width ,height} = Dimensions.get('window');
const s = width / 345;

const CustomChildren = props => (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: 36,
          paddingLeft: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={{ flex: 1 }}>{props.children}</Text>
        <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>
          {props.extra}
        </Text>
      </View>
    </TouchableOpacity>
  );

export default class AddAddress extends Component {
    constructor(props) {
        super(props);
        this.onPress = () => {
          setTimeout(() => {
            this.setState({
              data: district,
            });
          }, 500);
        };
        this.onChange = value => {
          this.setState({ value });
        };
        this.state = {
          data: [],
          value: [],
          pickerValue: [],
          addname:'',
          addtel:'',
          addinfo:'',
          addpro:'',
          data2:'',
          addcity:'',
          userid:'u123456',
        };
    }

    UNSAFE_componentDidUpdate(){
      fetch("http://192.168.43.245:3000/address")

        .then(res=>res.json())

        .then(res=>{

            for(var i=0;i<res.length;i++){

                if(this.props.userid==res[i].userid){

                    this.setState({

                        data:[...this.state.data,res[i]]

                    })

                }

            }

            console.log(this.state.data);

        })
    }
      caddname=(text)=>{
        console.log(text);
        this.setState({addname:text})
      }
      caddtel=(text)=>{
        console.log(text);
        this.setState({addtel:text})
      }
      caddinfo=(text)=>{
        console.log(text);
        this.setState({addinfo:text})
      }
      sure=()=>{
        console.log(this.state.data[0].value)
        let registerValue = {"addname":'小李',"addtel":'123',"addpro":'北京',"addinfo":'家',"addcity":'市辖区',"addarea":'东城区',"userid":this.state.userid};
        console.log(registerValue)
        fetch("http://192.168.43.245:3000/address",{
            method: "POST",
            headers: {
               "Content-type":"application/json;charset=utf-8",
        
                                },
        
                                body:JSON.stringify(registerValue) ,
        
                            }).then( res => res.text())
        
                              .then( data => {
        
                                  console.log(data);
        
                              })
        // for(var i =0;i<this.state.data.length;i++){
        //   if(this.state.data[i].value.slice(0,2)==this.state.value[0]){
        //     this.setState({
        //       addpro:this.state.data[i].label,
        //       data2:this.state.data[i].children,

        //     },()=>{console.log(this.state.addpro)})
        //   }
        // }
        fetch("http://192.168.43.245:3000/address")

        .then(res=>res.json())

        .then(res=>{

            for(var i=0;i<res.length;i++){

                if(this.props.userid==res[i].userid){

                    this.setState({

                        data:[...this.state.data,res[i]]

                    })

                }

            }

            console.log(this.state.data);

        })
      }
    render() {
        return (
            <Provider>
                <TouchableOpacity onPress={()=>Actions.pop()}>
                  <Icon name="arrowleft" style={{fontSize:16*s,marginTop:20*s,marginLeft:10*s}}/>
                </TouchableOpacity>
                <Text style={{fontSize:16*s,fontWeight:'bold',marginTop:20*s,marginLeft:10*s}}>添加收货人</Text>
                <TextInput onChange={this.caddname} id='aname' style={{paddingLeft:15*s,backgroundColor:'white'}} autoFocus placeholder='收货人' editable></TextInput>
                <TextInput onChange={this.caddtel} style={{paddingLeft:15*s,backgroundColor:'white'}} placeholder='电话号码' editable></TextInput>
                <Picker
              data={data}
              cols={3}
              value={this.state.value}
              onChange={this.onChange}
            >
              <List.Item arrow="horizontal" onPress={this.onPress}>
                <Text>所在地区</Text>
              </List.Item>
            </Picker>
                <TextInput onChange={this.caddinfo} style={{paddingLeft:15*s,backgroundColor:'white'}} placeholder='详细地址' editable></TextInput>
                <TouchableOpacity onPress={this.sure} style={{width:320*s,height:40*s,backgroundColor:'#ea3b3b',borderRadius:5*s,justifyContent:'center',alignItems:'center',marginLeft:10*s,marginTop:50}}>
                    <Text style={{color:'white',fontSize:16*s}}>确认添加</Text>
                </TouchableOpacity>
      </Provider>
        )
    }
}
