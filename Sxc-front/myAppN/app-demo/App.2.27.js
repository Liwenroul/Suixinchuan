/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Comment,useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
  Dimensions,
  PixelRatio,
  ToastAndroid,
  BackHandler,
  SectionList,
} from 'react-native';
import ShowMyName from './components/ShowMyName';
import Counter from './components/Counter';
import ImageBg from './components/ImageBg';
//JS动态弱类型 不太严谨 但是灵活
//TypeScript 更加严谨
//RN、angular、Vue3


//创建一个组件，名为Hello,返回Helloworld,在App组件里调用
const Hello = () => {
  return (
    <Text>hello world123</Text>
  )
}

const App = () => {
  
  // let [val,setVal]=useState(1);
  // let [isFresh,setFresh]=useState(false);
  // let data=[];
  // // useEffect(() => {
  //   for(var i=0;i<100;i++){
  //     data.push({key:i+'',title:i+'abc'})
  //   }
  // // }, [])
  
  // let [da,setDa]=useState(data);
  // let addData=()=>{
  //   console.log(123)
  //   for(var i=100;i<200;i++){
  //     data.push({key:i+'',title:i+'abc'})
  //   }
  //   setDa(data);
  // }
  // let upDateData=()=>{
  //   setFresh(true);
  //   setTimeout(()=>{
  //     setFresh(false);
  //   },2000)
  // }

//2s内按两次返回键退出程序
let isExit=false;
let now=0;
    BackHandler.addEventListener('back',()=>{
      console.log('back');
      //②
      console.log(new Date().getTime());
      if(new Date().getTime()-now<2000){
        BackHandler.exitApp();
      }else{
        ToastAndroid.show('确定要退出吗',100);
        now=new Date().getTime();
        return true;
      }
      //①
      // if(isExit){
      //   BackHandler.exitApp();
      //   return false;
      // }
      // ToastAndroid.show('确定要退出吗',ToastAndroid.SHORT);
      // isExit=true;
      // setTimeout(()=>{
      //   isExit=false;
      // },2000)
      // return true;
     
    })

    const {width,height,scale} =Dimensions.get('window');
    console.log(width,height,scale);
    console.log(PixelRatio.get());
    //px:图片中最小的一格
    //dpi(dot per inch):每英寸有多少小格(1px)
    //dp:安卓开发当中用的单位，1dp等于像素密度为160dpi时1px的大小
    //dpi: 120 160 240 320 480
    //     0.75 1  1.5  2   3
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <View style={styles.box}></View>
        <View style={styles.box1}></View>
        {/* 高性能分组列表组件 */}
        <SectionList
          renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          )}
          sections={[
            { title: "Title1", data: ["item1", "item2"] },
            { title: "Title2", data: ["item3", "item4"] },
            { title: "Title3", data: ["item5", "item6"] }
          ]}
          keyExtractor={(item, index) => item + index}
        />

         {/* 高性能的简单列表组件 .  不与ScrollView同时出现*/}
        {/* <FlatList
          data={data}
          onRefresh={upDateData}
          refreshing={isFresh}
          onEndReached={addData}
          //onEndReachedThreshold={}
          renderItem={({item,index})=>(
            <View><Text>{item.title}</Text></View>
          )}
        /> */}

      </SafeAreaView>
    </>
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
