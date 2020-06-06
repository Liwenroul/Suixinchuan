import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    AsyncStorage,
    Button,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    BackHandler
} from 'react-native';
import Test from '../goods/Goods';
// import Icon from '@ant-design/react-native';
const {width,scale} = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title: '上衣',
        price: '￥200元/两天',
        img: require('../../assets/wish1.jpg')
    },
    {
        title: '套装',
        price: '￥200元/四天',
        img: require('../../assets/wish2.jpg')
    },
]

export default class Wish extends Component {
    constructor(){
        super();
        this.state = {
            tits: [],
            data:[],
            list:[],
        }
    }
    componentDidMount(){
        fetch("http://192.168.43.245:3000/wish")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                    this.setState({
                        data:res,
                        list:[...this.state.list,i]
                })
            }
            // this.setState({data:res})
            console.log(res);
            // console.log(this.state.list);
            // console.log("1].dynContentdata:"+this.state.data);
        })
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <View style={styles.header}>
                    <Text>心愿单</Text>
                </View>
                
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={goods}
                    numColumns={1}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <Image 
                                // resizeMode="contain"
                                source={item.img}
                                style={{height:220*s,marginTop: 15*s,width:180*s,borderRadius:10}}
                            />
                            <Text
                                style={{marginTop:-180*s,marginLeft:350*s}}
                            
                            >{item.title}</Text>
                            <Text 
                                style={{width:'100%',color: 'red',marginLeft:320*s,marginTop:80*s}}
                            >{item.price}</Text>
                        </View>
                    )}
                /> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 70*s,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    good:{
        width: 600*s,
        height: 250*s,
        backgroundColor: '#fff',
        marginLeft: 20*s,
        marginTop: 20*s
    }
})