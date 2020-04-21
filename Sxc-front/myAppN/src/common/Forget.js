import React, { Component } from 'react';
import { View, Text, Image, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid } from 'react-native';
import { Icon } from '@ant-design/react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils'
export default class Forget extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            usertel: '',
            pwd: '',
            isregister: true,
            isreseting:false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    telhandle = (text) => {
        this.setState({ usertel: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    reset=()=>{
        if(this.state.username!=''||this.state.usertel!=''){
        this.setState({reseting:true}) ;
        }
        // this.setState({pwd: pwd })
    }
    ok=()=>{
        if(this.state.pwd!=''){
           Actions.login()
        }
    }
    // register = () => {
    // 	this.setState({ isRegister: true })
    // 	myFetch.post('/register',
    // 		{
    // 			username: this.state.username,
    // 			usertel:this.state.usertel,
    // 			pwd: this.state.pwd
    // 		}).then(res => {
    // 			AsyncStorage.setItem('user', JSON.stringify(res.data))
    // 				.then(() => {
    // 					ToastAndroid.show('注册成功', 1000);
    // 					setTimeout(() => Actions.login(), 2000)
    // 				})
    // 		})
    // }

    render() {
        return (
            <View style={{ flex:1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', height: '10%', width: '90%', marginTop: '5%', marginBottom: '15%' }}>
                    <TouchableOpacity onPress={() => Actions.login()} style={{ flexDirection: 'row', left: '5%' }} >
                        <Icon1
                            name="angle-left"
                            style={{ color: 'gray', fontSize: 20, paddingRight: '5%' }}
                        />
                        <Text style={{ fontSize: 16, color: "blue" }}>返回</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center', height: '40%' }}>
                    <View
                        style={{
                            width: '80%',
                            marginRight: 10,
                            borderBottomColor: '#ccc',
                            borderBottomWidth: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            // paddingLeft: 20,
                        }}>

                        <TextInput placeholder="手机号/用户名"
                            onChangeText={this.userhandle}
                            style={{ width: '60%' }}
                        />
                        <TouchableOpacity
                            style={{
                                width: '40%',
                                height: 40,
                                backgroundColor: '#ccc',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                        onPress={this.reset}
                        >
                            <Text style={{ color: '#fff' }}>忘记密码</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.reseting
                            ? <View
                                style={{
                                    width: '80%',
                                    marginRight: 10,
                                    borderBottomColor: '#ccc',
                                    borderBottomWidth: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    // paddingLeft: 20,
                                }}>
                                <TextInput
                                    style={{ width: '60%' }}
                                    onChangeText={this.pwdhandle}
                                    placeholder="请输入新的密码"
                                    secureTextEntry={true}
                                />
                                <TouchableOpacity
                                    style={{
                                        width: '40%',
                                        height: 40,
                                        backgroundColor: '#ccc',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 10
                                    }}
                                onPress={this.ok}
                                >
                                    <Text style={{ color: '#fff' }}>确定</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }

                </View>
            </View>
        );
    }
}


