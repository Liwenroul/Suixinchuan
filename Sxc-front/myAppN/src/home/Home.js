import React, { Component } from 'react';
import {
    TextInput, TouchableOpacity, StatusBar,
    View, Text, Image,
    FlatList, Dimensions, ScrollView, StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window')
const s = width / 640;

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            // name:'heart-o',
            // color:'',
            wish:false,
        }
    }
    shoucang =()=>{
        if(!this.state.wish){
            this.refs.changeColor.color='red',
            this.setState({
                // name:'heart',
                wish:true
            })
        }
        else{
            this.refs.changeColor.color='#000',
            this.setState({
                // name:'heart-o',
                wish:false
            })
        }
    }
    render() {
        console.log('home')
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#fff'
            }}>

                <StatusBar backgroundColor="red" />
                <View style={{
                    width: '100%',
                    height: 70 * s,
                    borderColor: '#eee',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{ width: '15%', alignItems: 'center' }}>
                        <Icon
                            name="bars"
                            style={{
                                color: '#ccc', fontSize: 25
                            }}
                        />
                    </TouchableOpacity>
                    <View style={{
                        marginTop: 10 * s,
                        marginBottom: 10 * s,
                        width: '80%',
                        height: 50 * s,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 25,
                        backgroundColor: '#eee',
                        opacity: 0.75,
                        paddingLeft: 10
                    }}>
                        <TouchableOpacity>
                            <Icon
                                name="search"
                                style={{ color: 'gray', fontSize: 20 }}
                            />
                        </TouchableOpacity>
                        <TextInput placeholderTextColor="gray"
                            placeholder="音乐会晚礼服"
                            style={{
                                width: '86%',
                                height: 40,
                                color: '#fff'
                            }}
                        />
                    </View>
                </View>
                {/* <Swiper style={{height:273*s,width:640*s}} showsButtons={false}>
                        <View style={styles.slide}>
                            <Image style={{width:width}} source={require('../../assets/icon/xk.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:width}} source={require('../../assets/icon/xk.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:width}} source={require('../../assets/icon/xk.png')} />
                        </View>
                    </Swiper> */}

                <ScrollView>
                    <ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                        style={{ height: 300 * s, width: 640 * s }}
                    >
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737077.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737129.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737195.png')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={{width:'100%',height:'100%'}} resizeMode='stretch' source={require('../../assets/raw_1528737314.png')} />
                        </View>
                    </ScrollView>
                    <ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                    >
                        <View style={{
                            width: 190 * s,
                            height: 200 * s,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <TouchableOpacity style={styles.btn}  onPress={()=>Actions.detail()}>
                                <Text>实用券攻略</Text>
                                <Text style={{fontSize:10}}>礼盒券后直减130</Text>
                                <View style={styles.img}>
                                    <Image style={{width:'30%',height:'100%'}} resizeMode='stretch' source={require('../../assets/v2_q5kktg.jpg')}/>
                                    <Image  style={{width:'45%',height:'50%'}} resizeMode='stretch' source={require('../../assets/v2_q5kkuw.jpg')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 190 * s,
                            height: 200 * s,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <TouchableOpacity style={styles.btn} onPress={()=>Actions.detail()}>
                                <Text>神价热销榜</Text>
                                <Text style={{fontSize:10}}>礼盒券后直减130</Text>
                                <View style={styles.img}>
                                <Image style={{width:'90%',height:'30%',marginTop:100*s}} resizeMode='stretch' source={require('../../assets/v2_q5kkvl.jpg')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 190 * s,
                            height: 200 * s,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <TouchableOpacity style={styles.btn} onPress={()=>Actions.detail()}>
                                <Text>包包特价</Text>
                                <Text style={{fontSize:10}}>礼盒券后直减130</Text>
                                <View style={styles.img}>
                                    <Image style={{width:'45%',height:'85%'}} resizeMode='stretch' source={require('../../assets/v2_q5kl1a.jpg')}/>
                                    <Image  style={{width:'35%',height:'75%',marginLeft:10*s}} resizeMode='stretch' source={require('../../assets/v2_q5kl1u.jpg')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 190 * s,
                            height: 200 * s,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <TouchableOpacity style={styles.btn}  onPress={()=>Actions.detail()}>
                                <Text>防晒美白榜</Text>
                                <Text style={{fontSize:10}}>礼盒券后直减130</Text>
                                <View style={styles.img}>
                                    <Image style={{width:'20%',height:'90%'}} resizeMode='stretch' source={require('../../assets/raw_1521984443.png')}/>
                                    <Image  style={{width:'20%',height:'90%',marginLeft:20*s}} resizeMode='stretch' source={require('../../assets/raw_1521984479.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 190 * s,
                            height: 200 * s,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <TouchableOpacity style={styles.btn}  onPress={()=>Actions.detail()}>
                                <Text>人气面膜榜</Text>
                                <Text style={{fontSize:10}}>礼盒券后直减130</Text>
                                <View style={styles.img}>
                                    <Image style={{width:'35%',height:'70%'}} resizeMode='stretch' source={require('../../assets/raw_1521984866.png')}/>
                                    <Image  style={{width:'36%',height:'85%',marginLeft:10*s}} resizeMode='stretch' source={require('../../assets/raw_1521984570.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            width: 190 * s,
                            height: 200 * s,
                            alignItems: 'center',
                            justifyContent:'center'
                        }}>
                            <TouchableOpacity style={styles.btn}  onPress={()=>Actions.detail()}>
                                <Text>查看全部</Text>
                                <Text style={{fontSize:10}}>See more</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', }}>
                        <View style={{
                            width: '45%',
                            height: 500 * s,
                            alignItems: 'center',
                            justifyContent:'center',
                            marginTop: 20*s,
                            padding:4,
                            backgroundColor:'#eee'
                        }}>
                            <TouchableOpacity style={{width:'100%',height:'90%'}} onPress={()=>Actions.detail()}>
                                <Image  style={{width:'100%',height:'85%',borderRadius:20}} resizeMode='stretch' source={require('../../assets/v2_q5klar.jpg')} />
                                <Text style={{marginTop:8*s}}>酒红色蕾丝优雅长款礼裙</Text>
                                <Text style={{marginTop:8*s}}>BLANCHE</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:'10%'}}>
                                <Text style={{color:'red',}}>￥399/4日</Text>
                                <TouchableOpacity  onPress={this.shoucang}>
                                    <Icon name='heart-o' ref="changeColor" style={{fontSize:25}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            width: '45%',
                            height: 500 * s,
                            alignItems: 'center',
                            marginTop: 20*s,
                            padding:4,
                            backgroundColor:'#eee'
                        }}>
                            <TouchableOpacity style={{width:'100%',height:'90%'}}>
                                <Image   style={{width:'100%',height:'85%',borderRadius:20}} resizeMode='stretch' source={require('../../assets/v2_q5klq0.jpg')} />
                                <Text style={{marginTop:8*s}}>宝石蓝抹胸晚礼服</Text>
                                <Text style={{marginTop:8*s}}>BLANCHE</Text>
                            </TouchableOpacity>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',height:'10%'}}>
                                <Text style={{color:'red'}}>￥399/4日</Text>
                                <TouchableOpacity  >
                                    <Icon name='heart-o' style={{fontSize:25,}}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </View>



        )
    }
}
const styles = StyleSheet.create({
    btn: {
        width: 170 * s,
        height: 160 * s,
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        marginTop: 10 * s,
        // padding:'5%'
    },
    img:{
        width:'100%',
        height:'60%',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10 * s,
    },
    slide: {
        // flex:1,
        width: 640 * s,
        // height: 280,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rbtn: {
        color: 'gray',
        fontSize: 20
    }
})