import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  // ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Icon} from '@ant-design/react-native';


const styles = StyleSheet.create({
  box:{
    width:"100%",
    height:205,
    marginBottom:5,
    backgroundColor:'#fff',    
    flexDirection:'column',
    alignItems:'center',
  },
  box1:{
    width:"40%",
    height:110,
    marginTop:25
  },
  box2:{
    width:"50%",
    height:110,
    marginTop:25
  },
  txt0:{
    marginTop:10,
    marginLeft:15
  },
  txt:{
    color:"red",
    position:'absolute',
    top:180,
    left:15
  },
  textBar:{
    width:'20%',
    alignItems:"center",
    justifyContent:'center',
    textAlign:'center',
  },
  size:{
    fontSize:30
  }

});

const data1 = Array.from(new Array(6)).map((_val,i) => ({
  key:i,
  icon:require('./assets/icon/yami.png'),
  text1:"Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳",
  text2:'36.00'
}));
const data2 = Array.from(new Array(3)).map((_val,i) => ({
  key:i,
  icon:require('./assets/icon/yam.png'),
  text1:"Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳",
  text2:'36.00'
}));

const App = () => {
  
    return (
      <>
        <SafeAreaView>
          {/* <ScrollView> */}
          <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            backgroundColor:'#eee'}}>
            <View style={{
              flexDirection:'column',
              justifyContent:'center',
              backgroundColor:'#fff'
            }}>
              <View style={{
                marginTop:8,
                marginLeft:'5%',
                marginBottom:16,
                width:'90%',
                height:40,
                borderColor:'#eee',
                flexDirection:'row',
                alignItems:'center',                 
                borderWidth:1,
                borderRadius:5,
                backgroundColor:'#eee',
                paddingLeft:10
              }}>
                <TextInput 
                  placeholder="请输入商品名称"
                  style={{
                      width:'90%',
                      height:40
                  }}
                />
                <TouchableOpacity>
                  <Icon 
                    name="search" 
                    style={{
                      color:'gray',
                      width:20,
                      height:20
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{
                marginBottom:8,
                width:'100%',
                height:30,
                flexDirection:'row',
                alignItems:'center',   
                backgroundColor:'#fff',
              }}>
                <TouchableOpacity style={styles.textBar}>
                  <Text style={{color:'red'}}>综合</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textBar}>
                  <Text>销量</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textBar}>
                  <Text>新品</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textBar}>
                  <Text>价格</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textBar}>
                  <Text>信用</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
                <FlatList
                  data={data1}
                  numColumns={2}
                  style={{position:'absolute',top:10}}
                  renderItem={({item,index})=>(
                    <View style={styles.box} key={index}>
                      <Image
                        style={styles.box1}
                        source={item.icon}
                      />
                      <Text style={styles.txt0}>{item.text1}</Text>
                      <Text style={styles.txt}>36.00</Text>
                    </View>
                  )}
                /> 
              </View>
            {/* <View style={{
              flexDirection:'row',
              justifyContent:'space-evenly',
              alignItems:'center',
              flexWrap:'wrap'
            }}>
              <View style={{width:'45%'}}>
                <FlatList
                  data={data1}
                  style={{position:'absolute',top:10}}
                  renderItem={({item,index})=>(
                    <View style={styles.box} key={index}>
                      <Image
                        style={styles.box1}
                        source={item.icon}
                      />
                      <Text style={styles.txt0}>{item.text1}</Text>
                      <Text style={styles.txt}>36.00</Text>
                    </View>
                  )}
                /> 
              </View> 
              <View style={{width:'45%'}}>
                <FlatList
                  data={data2}
                  style={{position:'absolute',top:10}}
                  renderItem={({item,index})=>(
                    <View style={styles.box} key={index}>
                      <Image
                        style={styles.box2}
                        source={item.icon}
                      />
                      <Text style={styles.txt0}>{item.text1}</Text>
                      <Text style={styles.txt}>36.00</Text>
                    </View>
                  )}
                /> 
              </View>
            </View>  */}
          </View>
          {/* </ScrollView> */}
        </SafeAreaView>
      </>  
    );
  }
export default App;