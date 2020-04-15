import React, { Component } from 'react';
import {View,Text,Dimensions,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const { width ,height} = Dimensions.get('window');
const s = width / 345;

const styles=StyleSheet.create({
    ginfo:{
        width:325*s,
        backgroundColor:'#e0dddd',
        marginLeft:10*s,
        borderRadius:5,
        marginTop:20*s
    },
    infos:{
        flexDirection:'row',
        marginLeft:10*s,
        marginTop:10*s
    },
    inf:{
        marginLeft:20*s,
        color:'#7a7979'
    },
    infs:{
        marginLeft:25*s,
    }
})

export default class SizeDetail extends Component {
    render() {
        return (
            <View>
                    <Icon name='leftcircleo' style={{fontSize:16*s,marginLeft:10*s,marginTop:20*s}}/>
                    <Text style={{marginLeft:10*s,fontWeight:'bold',marginTop:20*s,fontSize:16*s}}>商品尺码表</Text>
                    <View style={styles.ginfo}>
                        <View style={styles.infos}>
                            <Text>尺码</Text>
                            <Text style={styles.infs}>S</Text>
                            <Text style={styles.infs}>M</Text>
                            <Text style={styles.infs}>L</Text>
                        </View>
                        <View style={styles.infos}>
                            <Text>胸围</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                        </View>
                        <View style={styles.infos}>
                            <Text>腰围</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                        </View>
                        <View style={[styles.infos,{marginBottom:10*s}]}>
                            <Text>臀围</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                            <Text style={styles.inf}>66</Text>
                        </View>
                    </View>
                </View>
        )
    }
}
