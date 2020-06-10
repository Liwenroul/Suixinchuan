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
    // Actions,
    BackHandler
} from 'react-native';
import Test from '../goods/Goods';
import { Actions } from 'react-native-router-flux';
// import Icon from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/AntDesign';
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
            DidList:[],
            Dynid0:[],
            userID:''
        }
    }
    componentDidMount(){
        fetch("http://192.168.43.245:3000/user")
        .then(res=>res.json())
        .then(res=>{
            for(var i =0;i<res.length;i++){
                if(res[i].isloading==1){
                    this.setState({
                        userID:res[i].userid,
                    })
                }
            }
            console.log("userid:"+this.state.userID);
        })
        fetch("http://192.168.43.245:3000/wishs")
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.length;i++){
                if(res[i].userid==this.state.userID){
                    this.setState({
                        data:res,
                        list:[...this.state.list,i],
                    })
                }
                
            }
            for(var i=0;i<res.length;i++){
                this.setState({
                    Dynid0:[...this.state.Dynid0,this.state.data[i].userid]
                })
            }
            // this.setState({data:res})
            console.log(this.state.data);
            console.log('this.state.Dynid0:'+this.state.Dynid0);
            console.log('this.state.list:'+this.state.list);
            // console.log("1].dynContentdata:"+this.state.data);
        })
        // fetch("http://192.168.43.245:3000/wear")
        // .then(res=>res.json())
        // .then(res=>{
        //     for(var i=0;i<this.state.Did0.length;i++){
        //         for(var j =0;j<res.length;j++){
        //             if(res[j].dynid==this.state.Did0[i]){
        //                 console.log("res.dynid"+res[j].dynid)
        //                 console.log('Did0'+this.state.Did0[i])
        //                 this.setState({
        //                     DidList:[...this.state.DidList,res[j]],
        //                 })
        //             }
                    
        //         }
        //         console.log(res)
        //     }
        //     console.log('this.state.DidList:'+this.state.DidList)
        // })
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1,backgroundColor: '#fff'}}>
                    <View style={styles.header}>
                        <Text>心愿单</Text>
                    </View>
                    {
                    this.state.list.map((i) =>(
                        <View>
                            <View style={styles.charge}></View>
                            <View style={styles.good}>
                            <TouchableOpacity onPress={()=>Actions.chuanda({'userid':this.state.Dynid0[i]})}>
                                <Image 
                                    // resizeMode="contain"
                                    source={require('../../assets/wish1.jpg')}
                                    style={{height:220*s,marginTop: 15*s,width:180*s,borderRadius:10}}
                                />
                                </TouchableOpacity>
                                <Text
                                    style={{marginTop:-180*s,marginLeft:350*s}}
                                
                                >{this.state.data[i].wishType}</Text>
                                <Text 
                                    style={{width:'100%',color: 'red',marginLeft:320*s,marginTop:80*s}}
                                >￥{this.state.data[i].wishPrice}/{this.state.data[i].wishTime}天</Text>
                            </View>
                            

                        </View>
                        
                    ))
                }
                    {/* <FlatList 
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
                    />  */}
                </View>
            </ScrollView>
            
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
    charge:{
    height:20*s,
    backgroundColor:'#F4F4F4'
    },
    good:{
        width: 600*s,
        height: 250*s,
        backgroundColor: '#fff',
        marginLeft: 20*s,
        // marginTop: 20*s
    }
})