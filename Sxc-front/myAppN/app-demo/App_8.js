{/*const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    }; 
  
  <View style={{ flex: 1 }}>
        
        <Text style={{ margin: 16 }}>Custom RenderTabBar</Text>
        <Tabs
          tabs={tabs}
          renderTabBar={tabProps => (
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {tabProps.tabs.map((tab, i) => (
                // change the style to fit your needs
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={tab.key || i}
                  style={{
                    // width: '30%',
                    padding: 6,
                  }}
                  onPress={() => {
                    const { goToTab, onTabClick } = tabProps;
                    // tslint:disable-next-line:no-unused-expression
                    onTabClick && onTabClick(tabs[i], i);
                    // tslint:disable-next-line:no-unused-expression
                    goToTab && goToTab(i);
                  }}
                >
                  <Text
                    style={{
                      color: tabProps.activeTab === i ? 'green' : undefined,
                    }}
                  >
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        >
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        
      </View> */}
















import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,//相当于div
  Text,
  Image,
  TextInput,
  SectionList,
  ScrollView,
} from 'react-native';
import { Icon, SearchBar, TabBar } from '@ant-design/react-native';


const styles = StyleSheet.create({
  box:{
    width:"45%",
    height:320,
    margin: 10,
    backgroundColor:'#fff'
  },
  txt:{
    color:"red",
  },
  size:{
    fontSize:30
  }

});
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
      // <ScrollView>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-evenly',alignItems:'center',
        flexWrap:'wrap'
        }}>
          {/* <SectionList
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
        /> */}

        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
      </View>
    );
  }
  // onChangeTab(tabName) {
  //   this.setState({
  //     selectedTab: tabName,
  //   });
  // }
  render(){
    return (
      <>
        <SafeAreaView>
          <View style={{flexDirection:'row',height:60,marginBottom:10,justifyContent:'center',alignItems:'center',}}>
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
          </View>
          <TabBar 
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="#f5f5f5"
          >
            <TabBar.Item 
              key='all' title='综合'
              selected={this.state.selectedTab === 'blueTab'}
              // onPress={() => this.onChangeTab('blueTab')} 
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
              // onPress={() => this.onChangeTab('redTab')}
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
              // onPress={() => this.onChangeTab('yellowTab')}
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
              // onPress={() => this.onChangeTab('greenTab')}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }} 
            >
              {this.renderContent('价格 Tab')}
            </TabBar.Item>
            <TabBar.Item 
              key='xy' title='信用' 
              selected={this.state.selectedTab === 'grayTab'}
              // onPress={() => this.onChangeTab('grayTab')}
              onPress={() => {
                this.setState({
                  selectedTab: 'grayTab',
                });
              }}
            >
              {this.renderContent('信用 Tab')}
            </TabBar.Item>
          </TabBar>
          </SafeAreaView>
      </>  
    );
  }
};













import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,//相当于div
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  ImageBackground,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import ImageBg from './components/ImageBg';

const styles = StyleSheet.create({
  box:{
    width:"40%",
    height:100,
    margin: 10,
    backgroundColor:'blue'
  },
  txt:{
    color:"red",
  },
  size:{
    fontSize:30
  }

});
const App = () => {
  let [val, setVal] = useState('1');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView>

        {/* flex布局 */}
        {/* 在rn中，组件 默认设置了flex属性，默认主轴是竖轴
        justifyContent：主轴对其方式
        alignItems:交叉轴对其方式
        */}
        {/* 钉钉头部搜索框 */}
        <View style={{flexDirection:'row',height:40,justifyContent:'center',}}>
          <View style={{
            borderColor:'#eee',
            flexDirection:'row',
            alignItems:'center',                 
            borderWidth:1,
            borderRadius:25,
            width:'80%',
            height:40,
            marginRight:10,
            backgroundColor:'#ccc',
            paddingLeft:20
          }}>
            <Image source={require('./assets/icon/user.png')}
              style={{width:20,height:20}}
            />
            <TextInput 
            placeholder="搜索"
            style={{
                width:'85%',
                height:40
            }}/>
          </View>
          <TouchableOpacity
                style={{
                width:40,
                height:40,
                backgroundColor:'#fff',
                borderColor:'gray',                 
                borderWidth:1,
                alignItems:"center",
                justifyContent:'center',
                borderRadius:20,
              }}
          >
            <Text style={{color:'black',fontSize:20}}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Button默认高度34 */}
        <View style={{
          width:34,
          height:34,
          borderRadius:17,
          overflow:'hidden'
        }}>
          <Button
            onPress={()=>{}}
            title="+"
          />
        </View>

        <TouchableOpacity
          style={{
            width:40,
            height:40,
            backgroundColor:'blue',
            alignItems:"center",
            justifyContent:'center',
            borderRadius:20,
          }}
        >
          <Text style={{color:'#fff',fontSize:20}}>
            +
          </Text>
        </TouchableOpacity>

          {/* 钉钉头部搜索框 */}
        {/* <View style={{flexDirection:'row'}}>
          <View>
            <Image />
            <TextInput />
          </View>
          <Button />
        </View> */}

        <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          flexWrap:'wrap'
          }}>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>
          <View style={styles.box}>
            <Text>1</Text>
          </View>


        </View>


        {/* <View style={styles.box}> */}
        {/* <View style={[styles.txt,styles.size]}>
          <Text>
            <Text>inner0</Text>
            <Text>inner1</Text>
          </Text>
        </View>
        <Text style={{backgroundColor:'#fff'}}></Text>
        <View>
          <Text style={[styles.txt,styles.size]}>
            <Text>inner0</Text>
            <Text>inner1</Text>
          </Text>
          <Text style={{backgroundColor:'#fff'}}></Text>
          <Text style={{backgroundColor:'#fff'}}></Text>
          <Hello/>
          <Text style={{backgroundColor:'#fff'}}></Text>
          <ShowMyName name="孙梦涵"/>
          <Text style={{backgroundColor:'#fff'}}></Text>
          <Counter/>
        </View>
        <Text style={{backgroundColor:'#fff'}}></Text>
        <Text style={{backgroundColor:'#fff'}}></Text>
        */}
        {/* <View> */}
          {/* 直接显示图片默认大小  */}
          {/* <Image source={require('./assets/icon/user.png')}/> */}
          {/* 网络图片必须设置大小 */}
          {/* <Image resizeMode="cover" style={{width:50,height:50}} source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}/> */}
        {/* </View> */}
        {/* <Text style={{backgroundColor:'#fff'}}></Text>
        <Text style={{backgroundColor:'#fff'}}></Text> */}
        {/* <View>
          <ImageBackground source={require('./assets/icon/user.png')} style={{width:'100%',height:'100%'}}>
            <Text>Inside</Text>
          </ImageBackground>
        </View>  */}
        {/* <Text style={{backgroundColor:'#fff'}}></Text>
        <Text style={{backgroundColor:'#fff'}}></Text>

        <View>
          <ImageBackground source={require('./assets/icon/user.png')} style={{width:300,height:300}}>
            <View style={styles.box}></View>
            <Text style={[styles.txt,styles.size]}>Hello</Text>
          </ImageBackground>
        </View>
        <Text style={{backgroundColor:'#fff'}}></Text>
        {/* 自定义组件 ImageBg*/}
        {/* <ImageBg source={require('./assets/icon/user.png')} style={{width:300,height:300}}>
            <View style={styles.box}></View>
            <Text style={[styles.txt,styles.size]}>Hello</Text>
        </ImageBg>
        <Text style={{backgroundColor:'#fff'}}></Text>           受控组件 */}
        {/* <Text>{val}</Text>
        <TextInput 
          placeholder="请输入内容"
          onChangeText={(val)=>{setVal(val)}}
          style={{
              borderColor:'red',
              height:50,
              paddingLeft:30,
              borderWidth:1,
              borderRadius:24
          }}
        />
        <Text style={{backgroundColor:'#fff'}}></Text>
        */}
        {/* </View> */}
        </ScrollView>
        </SafeAreaView>
    </>
  );
};


export default App;
