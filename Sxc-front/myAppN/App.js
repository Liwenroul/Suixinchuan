import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
// import User from './src/userinfor/Userinfor';
import Register from './src/common/Register';
// import Userinfor from './src/userinfor/Userinfor';
// import Mypublish from './src/userinfor/Mypublish';
import Forget from './src/common/Forget';
import Mine from './src/mine/Mine';
import Youhui from './src/mine/Youhui';
import Pay from './src/mine/Pay';
import Xianzhi from './src/mine/Xianzhi';
import Changjian from './src/mine/Changjian';
import Detail from './src/home/Detail';
import SizeDetail from './src/home/SizeDetail';
import Date  from './src/home/Date';
import Tousu from './src/mine/Tousu';
import Shezhi from './src/mine/Shezhi';
import Zudao from './src/mine/Zudao';
import Daishai from './src/mine/Daishai';
import Zuguo from './src/mine/Zuguo';
import wear from './src/wear/Wear';
import wish from './src/wish/Wish';
import cloth from './src/wear/cloth';
import chuanda from './src/wear/chuanda';
import Order from './src/home/Order';
import Address  from './src/home/Address';
import AddAddress  from './src/home/AddAddress';


console.disableYellowBox = true;

const rootUrl = 'https://www.fastmock.site/mock/65721c49c01f167ea082d0dc81fb0c41/api';

const App = () => {
	let [isInstall,setInstall] = useState(true);
	let [isLogin,setLogin] = useState(false);
	let now = 0;
	let init=()=>{
		// AsyncStorage.clear();
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
		})
		// AsyncStorage.clear()
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init()
	},[])
	let afterInstallt=()=>{
		console.log('after install');
		setInstall(false)
	}
	if(isInstall){
		return (
			<View style={{flex:1}}>
				<SwiperPage afterInstall={afterInstallt}/>	
			</View> 
		)
	}
	
	return (
		<Router
			//引导页
			backAndroidHandler={()=>{
				
				if (Actions.currentScene == "login") {
					if (new Date().getTime() - now < 2000) {
						BackHandler.exitApp();
						return false;
					} else {
						ToastAndroid.show('确定要退出吗', 100);
						now = new Date().getTime();
						return true;
					}
				} 
				if (Actions.currentScene != "home") {
					Actions.pop();
					return true;
				} else {
					ToastAndroid.show('这是首页,请退出登录', 100);
					Actions.homePage();
					return true;
				}
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="gray"
								tabBarStyle={{backgroundColor:'#ccc'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
									title='首页'
									hideNavBar={true}
									icon={
										({focused})=><Icon 
											color={focused?'red':'gray'} 
											name="home"
										/>
									}
								>
									<Scene key='home' hideNavBar={true}
										component={Home}
									/>
								</Scene>
								{/* 商品分类 */}
								<Scene key='goodsPage'
									title='穿搭'
									icon={
										({focused})=><Icon 
											color={focused?'red':'gray'} 
											name="windows"
										/>
									}
									
								>
									<Scene key="wear" hideNavBar={true} component={wear}/>
								</Scene>
								<Scene key='likePage'
									title='心愿单'
									icon={
										({focused})=><Icon 
											color={focused?'red':'gray'} 
											name="star"
										/>
									}
									
								>
									<Scene key="wish" hideNavBar={true} component={wish}/>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'gray'} 
											name='user'/>
										}
									title="我的"
									hideNavBar={true}
									
								>
									<Scene key='mine' hideNavBar={true} component={Mine}/>
									<Scene key='youhui' hideNavBar={true} component={Youhui}/>
									<Scene key='pay' hideNavBar={true} component={Pay}/>
									<Scene key='xianzhi' hideNavBar={true} component={Xianzhi}/>
									<Scene key='changjian' hideNavBar={true} component={Changjian}/>
									<Scene key='tousu' hideNavBar={true} component={Tousu}/>
									<Scene key='shezhi' hideNavBar={true} component={Shezhi}/>
									<Scene key='zudao' hideNavBar={true} component={Zudao}/>
									<Scene key='daishai' hideNavBar={true} component={Daishai}/>
									<Scene key='zuguo' hideNavBar={true} component={Zuguo}/>
								</Scene>
								
							</Tabs>
						</Scene>
					</Drawer>
					{/* <Scene key='light' component={Mybox}/> */}
				</Lightbox>

				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key='register' hideNavBar component={Register} />
				<Scene key='forget' hideNavBar component={Forget} />
				{/* <Scene key="login" component={ShowMyName}/> */}
				{/* <Scene key="login1" component={Login}/> */}
				<Scene key='detail' hideNavBar component={Detail} />
				<Scene key='cloth' hideNavBar component={cloth} />
				<Scene key='chuanda' hideNavBar component={chuanda} />
				<Scene key='sizedetail' hideNavBar component={SizeDetail} />
				<Scene key='date' hideNavBar component={Date} />
				<Scene key='order' hideNavBar component={Order} />
				<Scene key='address' hideNavBar component={Address}/>
				<Scene key='addAddress' hideNavBar component={AddAddress}/>
			</Modal>
			{/* <Scene component={Message}/> */}
			</Overlay>
		</Router>
	);
};

export default App;
