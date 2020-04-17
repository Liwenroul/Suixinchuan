import React, { Component } from 'react';
import {Text,View,Image, StyleSheet,Dimensions,ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import {
    Modal,
    WhiteSpace,
    WingBlank,
    Toast,
    Provider,
  } from '@ant-design/react-native';

const { width ,height} = Dimensions.get('window');
const s = width / 304;

const styles=StyleSheet.create({
     btm:{
        width:width,
        height:46*s,
        flexDirection:'row',
        position:'relative',
        bottom:-9
     },
     btmm:{
        width:width/4,
        height:46*s,
        borderTopWidth:1,
        borderTopColor:'#c5c5c5',
        alignItems:'center',
        justifyContent:'center'
     },
     zu:{
        width:width/2,
        height:46*s,
        backgroundColor:'#ea3b3b',
        alignItems:'center',
        justifyContent:'center'
     },
     ginfo:{
         width:284*s,
         backgroundColor:'#e0dddd',
         marginLeft:10*s,
         borderRadius:5,
         marginTop:10
     },
     infos:{
         flexDirection:'row',
         marginLeft:10*s,
         marginTop:10*s
     },
     inf:{
         marginLeft:20*s
     },
     tan1:{
        height:288*s,
        backgroundColor:'white',
        position:'relative',
        top:height-287*s,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
     },
     size:{
         width:54*s,
         height:40*s,
         borderWidth:1,
         alignItems:'center',
         justifyContent:'center',
         marginLeft:10*s,
         marginTop:10*s
     }
})

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            name:'hearto',
            color:'',
            wish:false,
            sizeBorderS:'#cfcfcf',
            sizeBorderM:'#cfcfcf',
            sizeBorderL:'#cfcfcf',
            chooseS:false,
            chooseM:false,
            chooseL:false,
            botn:'请选择尺码'
        }
    }
    shoucang=()=>{
        if(!this.state.wish){
            this.setState({
                name:'heart',
                color:'#ea3b3b',
                wish:true
            })
        }
        else{
            this.setState({
                name:'hearto',
                color:'black',
                wish:false
            })
        }
    }
    onClose=()=>{
        this.setState({
            visible2: false,
        });
    }
    chooseSizeS=()=>{
        if(!this.state.chooseS){
            this.setState({
                sizeBorderS:'#ea3b3b',
                sizeBorderM:'#cfcfcf',
                sizeBorderL:'#cfcfcf',
                chooseS:true,
                chooseM:false,
                chooseL:false,
                botn:'请选择租期'
            })
        }
        else{
            this.setState({
                sizeBorderS:'#cfcfcf',
                chooseS:false,
                botn:'请选择尺码'
            })
        }
    }
    chooseSizeM=()=>{
        if(!this.state.chooseM){
            this.setState({
                sizeBorderS:'#cfcfcf',
                sizeBorderM:'#ea3b3b',
                sizeBorderL:'#cfcfcf',
                chooseS:false,
                chooseM:true,
                chooseL:false,
                botn:'请选择租期'
            })
        }
        else{
            this.setState({
                sizeBorderM:'#cfcfcf',
                chooseM:false,
                botn:'请选择尺码'
            })
        }
    }
    chooseSizeL=()=>{
        if(!this.state.chooseL){
            this.setState({
                sizeBorderS:'#cfcfcf',
                sizeBorderM:'#cfcfcf',
                sizeBorderL:'#ea3b3b',
                chooseS:false,
                chooseM:false,
                chooseL:true,
                botn:'请选择租期'
            })
        }
        else{
            this.setState({
                sizeBorderL:'#cfcfcf',
                chooseL:false,
                botn:'请选择尺码'
            })
        }
    }
    chooseDate=()=>{
        if(this.state.botn=="请选择租期"){
            Actions.date();
        }
    }
    render() {
        return (
            <View>
                <ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                        style={{width:width,height:380*s}} 
                    >
                    <View>
                        <Image  style={{width:width,height:380*s}} resizeMode='stretch' source={require('../../assets/v2_q5klar.jpg')} />
                    </View>  
                    <View>
                        <Image  style={{width:width,height:380*s}} resizeMode='stretch' source={require('../../assets/v2_q5klar.jpg')} />
                    </View> 
                    <View>
                        <Image  style={{width:width,height:380*s}} resizeMode='stretch' source={require('../../assets/v2_q5klar.jpg')} />
                    </View> 
                </ScrollView>
                <View style={{flexDirection:'row'}}>
                    <Text style={{color:'#ea3b3b',fontSize:16*s,marginTop:16*s,marginLeft:10*s}}>￥399/</Text>
                    <Text style={{color:'#ea3b3b',marginTop:20*s}}>4日</Text>
                </View>
                <View style={{position:'relative',left:225*s,top:-20}}>
                    <Text>押金￥100/日</Text>
                </View>
                <View>
                    <Text style={{fontSize:16*s,marginTop:-10,marginLeft:10*s,fontWeight:'bold'}}>BLANVHE 酒红色蕾丝优雅长款礼服</Text>
                </View>
                <TouchableOpacity onPress={()=>Actions.sizedetail()}>
                <View>
                    <Text style={{color:'#bdb9b9',marginLeft:249*s}}>尺码详情</Text>
                </View>
                </TouchableOpacity>
                
                <View>
                    <Text style={{marginLeft:10*s,fontWeight:'bold',marginTop:10}}>商品信息</Text>
                    <View style={styles.ginfo}>
                        <View style={styles.infos}>
                            <Text>价格</Text>
                            <Text style={styles.inf}>￥5500</Text>
                        </View>
                        <View style={styles.infos}>
                            <Text>礼服品牌</Text>
                            <Text style={styles.inf}>BLANVHE</Text>
                        </View>
                        <View style={styles.infos}>
                            <Text>颜色</Text>
                            <Text style={[styles.inf,{marginBottom:10*s}]}>酒红色</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.btm}>
                    <TouchableOpacity onPress={this.shoucang}>
                        <View style={styles.btmm}>
                            <Text><Icon name={this.state.name} style={{fontSize:16*s,color:this.state.color}}/></Text>
                            <Text>收藏</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.btmm}>
                        <Text><Icon name='tago' style={{fontSize:16*s}}/></Text>
                        <Text>购买</Text>
                    </View>
                    <TouchableOpacity style={styles.zu} onPress={() => this.setState({ visible2: true })}>
                        <Text style={{color:'white',fontSize:16*s,fontWeight:'bold'}}>租这件</Text>
                    </TouchableOpacity>
                </View>
                <Provider>
                    <Modal
                        style={styles.tan1}
                        popup
                        visible={this.state.visible2}
                        animationType="slide-up"
                        // onClose={this.onClose2}
                    >
                    <TouchableOpacity onPress={this.onClose}>
                        <Icon name='close' style={{marginLeft:283*s,marginTop:18*s}}/>
                    </TouchableOpacity>    
                    <Text style={{fontSize:14*s,marginTop:50*s,marginLeft:10*s,fontWeight:'bold'}}>请选择尺码</Text>
                    <TouchableOpacity onPress={()=>Actions.order()} style={{flexDirection:'row',alignItems:'center',marginLeft:217*s,marginTop:-20}}>
                        <Text style={{color:'#ea3b3b'}}>尺码详情页</Text>
                        <Icon name='caretright' style={{color:'#ea3b3b'}}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={[styles.size,{borderColor:this.state.sizeBorderS}]} onPress={this.chooseSizeS}>
                            <Text>S</Text>
                            <Text>160/64A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.size,{borderColor:this.state.sizeBorderM}]} onPress={this.chooseSizeM}>
                            <Text>M</Text>
                            <Text>170/72A</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.size,{borderColor:this.state.sizeBorderL}]} onPress={this.chooseSizeL}>
                            <Text>L</Text>
                            <Text>175/76A</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.chooseDate} style={{width:width,height:46*s,backgroundColor:'#ea3b3b',alignItems:'center',justifyContent:'center',marginTop:95*s}}>
                        <Text style={{color:'white',fontSize:16*s,fontWeight:'bold'}}>{this.state.botn}</Text>
                    </TouchableOpacity>
                    </Modal>
                </Provider>
            </View>
        )
    }
}
