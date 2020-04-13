/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Router, Scene} from "react-native-router-flux";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  
});

const App=() => {
  return (
    <Router backAndroidHandler={()=>{
      now = new Date().getTime();
      if(Actions.currentScene != 'home'){
        Actions.pop();
        return true;
      }else{
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }
      
    }}>
      <Scene key='root'>
        <Tabs key='tabber' header={null} hideNavBar activeTintColor='red' inactiveTintColor='#666666' >
          <Scene key='home' title='首页' icon={({focused})=><Icon name='home' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='ho'/>
          </Scene>
          <Scene key='kind' title='商品分类' icon={({focused})=><Icon name='windowso' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='ki'/>
          </Scene>
          <Scene key='buy' title='购物车' icon={({focused})=><Icon name='shoppingcart' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='bu' />
          </Scene>
          <Scene key='mine' title='个人中心' icon={({focused})=><Icon1 name='person-outline' size={25} color={focused?'red':'#666666'} />}>
            <Scene key='mi'/>
          </Scene>
        </Tabs>
      </Scene>
    </Router>
  );
};




export default App;
