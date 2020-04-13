{/* <View style={{flexDirection:'row',height:60,justifyContent:'center',alignItems:'center',}}>
          <View style={{
            marginTop:10,
            width:'84%',
            height:50,
            borderColor:'#eee',
            flexDirection:'row',
            alignItems:'center',                 
            borderWidth:1,
            borderRadius:5,
            marginRight:10,
            backgroundColor:'#ccc',
            paddingLeft:10
          }}>
            <TextInput 
              placeholder="请输入商品名称"
              style={{
                  width:'90%',
                  height:40
              }}
            />
            <Icon 
              name="search" 
              style={{
                color:'gray',
                width:20,
                height:20
              }}
            />
          </View>
        </View> */}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {Router,Scene, Tabs} from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import Msg from './components/Msg';
import Doc from './components/Doc';
import MsgDetail from './components/MsgDetail';
const App = () => {
  //实现Tabs
  return (
    <Router>
      <Scene key="root">
        <Tabs key='tabbar' hideNavBar
          activeTintColor="red"
          inactiveTintColor="blue"
          tabBarStyle={{backgroundColor:'#ccc'}}
        >
          {/* 消息栏 */}
          <Scene 
            key='msg' title='消息' 
            titleStyle={{flex:1,textAlign:'center'}}
            icon={
              ({focused})=><Icon
                color={focused?'red':'blue'}
                name="home"
              />
              // ({focused})=><Image 
              // style={{width:30,height:30}}
              //   source={require('./assets/icon/user.png')}
              // />
            }
          >
            <Scene key='ms' component={Msg}/>
            <Scene
              key='msgdetail' 
              hideTabBar 
              component={MsgDetail}
            />
          </Scene>
          {/* 文档栏 */}
          <Scene 
            key='doc' title='文档' 
            titleStyle={{flex:1,textAlign:'center'}}
            icon={
              ({focused})=><Icon
                color={focused?'red':'blue'}
                name="index"
              />
            }
          >
            <Scene key='docs' component={Doc}/>
          </Scene>
        </Tabs>
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  box:{
    // width:'40%',
    width:100,
    height:100,
    margin: 10,
    borderColor:'red',
    borderWidth:1,
    // backgroundColor:"#c29b26"
  },
  box1:{
    width:100,
    height:100,
    margin: 10,
    borderColor:'red',
    borderWidth:1/1.5
  },
  txt:{
    color:"red"
  },
  size:{
    fontSize:20
  }

});

export default App;
