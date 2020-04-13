

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import {Router,Scene, Tabs,Drawer,Lightbox,Modal} from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import Msg from './components/Msg';
import Doc from './components/Doc';
import MsgDetail from './components/MsgDetail';
import Mybox from './components/Mybox';
import Login from './components/Login';
const App = () => {
  //实现Tabs

//   #### Actions
// - [key] : Actions.key( )  or  Actions[key].call( )
// - pop( )
// - replace( )
// - refresh( )
// - reset( )
// - currentScene: 返回当前的 Scene
// - drawerOpen
// - drawerClose

  return (
    <Router>
      <Modal key="modal" hideNavBar>
      <Lightbox key="lightbox">
      <Drawer
        key="drawer"
        contentComponent={()=><Text>Drawer</Text>}
        drawerIcon={()=><Icon name='menu'/>}
        drawerWidth={400}
      >
      <Scene key="root">
        <Tabs key='tabbar' hideNavBar
          activeTintColor="red"
          inactiveTintColor="blue"
          tabBarStyle={{backgroundColor:'#ccc'}}
        >
          {/* 消息栏 */}
          <Scene 
            key='msg' title='消息' 
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
            // titleStyle={{flex:1,textAlign:'center'}}
            icon={
              ({focused})=><Icon
                color={focused?'red':'blue'}
                name="file"
              />
            }
            component={Doc}
            hideDrawerButton
          />
        </Tabs>
      </Scene>
      </Drawer>
      <Scene key="light" component={Mybox} />
      </Lightbox>
      <Scene key="login" component={Login} />
      <Scene key="login1" component={Login} />
      </Modal>
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
