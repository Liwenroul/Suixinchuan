import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;

const goods = [
    {
        title: '仙气十足的一条裙子',
        num:1,
        img: require('../../assets/wish1.jpg')
    },
    {
        title: '简单的说就是好看',
        num:2,
        img: require('../../assets/wish2.jpg')
    },
]

export default class Wear extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
                <View style={styles.header}>
                        <Text>穿搭</Text>
                </View>
                <FlatList 
                    style={{backgroundColor: '#F4F4F4'}}
                    data={goods}
                    numColumns={2}
                    renderItem={({item})=>(
                        <View style={styles.good}>
                            <TouchableOpacity onPress={()=>Actions.chuanda()}>
                            <Image 
                                // resizeMode="contain"
                                source={item.img}
                                style={{height:350*s,marginTop: 10*s,width:280*s,borderRadius:10}}
                            />
                            </TouchableOpacity>
                            <Text style={{marginTop: 20*s}}>{item.title}</Text>
                            <Text style={{fontSize:10,marginLeft:-90,color:'red',marginTop:12*s}} onPress={Actions.cloth}>衣服详情</Text>
                            <Text style={{fontSize:10,marginLeft:40,marginTop:-35*s}}>{item.num}</Text>
                            <Icon name='heart-o' style={{fontSize:25,color:'red',marginLeft:180*s,marginTop:-40*s}}/>
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
        width: 290*s,
        backgroundColor: '#fff',
        marginLeft: 20*s,
        marginTop: 20*s,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        alignItems: 'center'
    }
})


