import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from '@ant-design/react-native'
import { TouchableOpacity,StatusBar, Image,ImageBackground,AsyncStorage,Modal,
    FlatList, Dimensions ,ScrollView, StyleSheet,TextInput } from 'react-native';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Actions } from 'react-native-router-flux';


const options = {
    title: '选择头像',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '从图库选择照片',
    customButtons: [{ name: 'fb', title: '从Facebook选择照片' }],
    cancelButtonTitle: '取消',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class Mine extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:true,
        }
    }
    
    componentDidMount(){
        this.getData();        
    }
    getData = ()=>{
        AsyncStorage.getItem('imgUrl')
        .then((res)=>{
            this.setState({
                imageUrl:JSON.parse(res)
            })
        });
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,
                });
                //将图片存到本地
                var storeData=async ()=>{
                    const source1 = JSON.stringify(source);
                    await AsyncStorage.setItem('imgUrl',source1,
                    ()=>{console.log('store success')}
                )}
                storeData();
            }
        })
    }
    render() {
        return (
            <View  style={{flex: 1,backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row',height:40,paddingTop:10,width:'100%'}}>
                    <Text style={{fontSize:18,paddingLeft:'45%'}}>我的</Text>
                    <Icon name="setting" style={{paddingLeft:130,color:'black'}}/>
                </View>
                <View style={{height:120,flexDirection: 'row'}}>
                    <Button 
                        onPress={()=>{this.takephoto()}}
                        >
                            {
                            this.state.imageUrl
                            ?
                            <Image 
                            style={{width:80,height:80,borderRadius:40,marginTop:20,marginLeft:10}} 
                            source={this.state.imageUrl}
                            />
                            :
                            <Image source={ require('../../assets/icon/1.jpg') } style={{width:130,height:130,borderRadius:65,}} ></Image>

                            }
                    </Button>
                    <Text style={{fontSize:17,paddingTop:50,paddingLeft:20}}>用户名</Text>
                </View>
                <View style={{height:100,flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#bbb'}}>
                    <View style={styles.view}>
                        <Icon name='shop' color='black'style={{fontSize:30}}/> 
                        <Text style={{paddingTop:10}}>我租到的</Text>
                    </View>
                    <View style={styles.view}>
                        <Icon name='camera' color='black'style={{fontSize:30}}/> 
                        <Text style={{paddingTop:10}}>待晒的</Text>
                    </View>
                    <View style={styles.view}>
                        <Icon name='shopping' color='black'style={{fontSize:30}}/> 
                        <Text style={{paddingTop:10}}>我租过的</Text>
                    </View>
                </View>
                <View style={styles.view2}>
                    <Text style={{paddingLeft:20}} onPress={Actions.youhui}>我的优惠券</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{paddingLeft:20}} onPress={Actions.pay}>我的钱包</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{paddingLeft:20}} onPress={Actions.xianzhi}>我的置闲</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{paddingLeft:20}}>常见问题</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{paddingLeft:20}}>投诉意见</Text>
                </View>
                <View style={styles.view2}>
                    <Text style={{paddingLeft:20}}>客服电话：12345678</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
        width:'30%',
        marginLeft:10,
        alignItems:'center',
        justifyContent:'center'
    },
    view2:{
        borderBottomWidth:1,
        borderBottomColor:'#bbb',
        height:50,
        justifyContent:'center'
    }
})