/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Router,Scene} from 'react-native-router-flux';
import Msg from './components/Msg';
import Doc from './components/Doc';
import MsgDetail from './components/MsgDetail';
//JS动态弱类型 不太严谨 但是灵活
//TypeScript 更加严谨
//RN、angular、Vue3


const App = () => {
  
  
  return (
    <Router>
      <Scene key="root">
        {/* 默认显示第一个scene,如果没放在第一个，可以加属性initial */}
        <Scene 
          key='msg' title='消息' 
          component={Msg}
          titleStyle={{flex:1,textAlign:'center',color:'red'}}
        />
        <Scene 
          key='msgdetail' title='消息详情'
          backTitle='消息'
          backButtonImage={require('./assets/icon/user.png')}
          component={MsgDetail}
          titleStyle={{flex:1,textAlign:'center',color:'red'}}
          renderRightButton={<View></View>}
        />
        <Scene 
          key='doc' title='文档' 
          component={Doc}
          titleStyle={{flex:1,textAlign:'center'}}
          renderRightButton={<View></View>}
        />
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
