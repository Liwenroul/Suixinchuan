import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  // ScrollView,
  FlatList
} from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';


const styles = StyleSheet.create({
  box:{
    width:"100%",
    height:205,
    marginBottom:10,
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
  size:{
    fontSize:30
  }

});

const data1 = Array.from(new Array(3)).map((_val,i) => ({
  icon:require('./assets/icon/yami.png')
}));
const data2 = Array.from(new Array(3)).map((_val,i) => ({
  icon:require('./assets/icon/yam.png')
}));

// const App = () => {
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  renderContent(pageText) {
    return (
      <View style={{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexWrap:'wrap'
      }}>
        <View style={{width:'45%'}}>
          <FlatList
            data={data1}
            style={{position:'absolute',top:30}}
            renderItem={({item,index})=>(
              <View style={styles.box} key={index}>
                <Image
                  style={styles.box1}
                  source={item.icon}
                />
                <Text style={styles.txt0}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={styles.txt}>36.00</Text>
              </View>
            )}
          /> 
        </View> 
        <View style={{width:'45%'}}>
          <FlatList
            data={data2}
            style={{position:'absolute',top:30}}
            renderItem={({item,index})=>(
              <View style={styles.box} key={index}>
                <Image
                  style={styles.box2}
                  source={item.icon}
                />
                <Text style={styles.txt0}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={styles.txt}>36.00</Text>
              </View>
            )}
          /> 
        </View>
      </View>
    );
  }
  render(){
    return (
      <>
        <SafeAreaView>
          {/* <ScrollView> */}
          <View style={{
            flexDirection:'column',
            justifyContent:'center',
          }}>
            <View style={{
              marginTop:10,
              marginLeft:'5%',
              marginBottom:10,
              width:'90%',
              height:50,
              borderColor:'#eee',
              flexDirection:'row',
              alignItems:'center',                 
              borderWidth:1,
              borderRadius:5,
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
            <View>
              <TabBar 
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
              >
                <TabBar.Item 
                  key='all' title='综合'
                  selected={this.state.selectedTab === 'blueTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'blueTab',
                    });
                  }}
                >
                  {this.renderContent('综合 Tab')}
                </TabBar.Item>
                <TabBar.Item 
                  key='xl' title='销量' 
                  selected={this.state.selectedTab === 'redTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'redTab',
                    });
                  }}
                >
                  {this.renderContent('销量 Tab')}
                </TabBar.Item>
                <TabBar.Item 
                  key='new' title='新品' 
                  selected={this.state.selectedTab === 'yellowTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'yellowTab',
                    });
                  }}
                >
                  {this.renderContent('新品 Tab')}
                </TabBar.Item>
                <TabBar.Item 
                  key='jg' title='价格'
                  selected={this.state.selectedTab === 'greenTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'greenTab',
                    });
                  }} 
                >
                  {this.renderContent('价格 Tab')}
                </TabBar.Item>
                <TabBar.Item 
                  key='xy' title='信用' 
                  selected={this.state.selectedTab === 'grayTab'}
                  onPress={() => {
                    this.setState({
                      selectedTab: 'grayTab',
                    });
                  }}
                >
                  {this.renderContent('信用 Tab')}
                </TabBar.Item>
              </TabBar>
            </View>
          </View>
          {/* </ScrollView> */}
        </SafeAreaView>
      </>  
    );
  }
};
