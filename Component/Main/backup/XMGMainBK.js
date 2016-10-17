import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    Navigator,
}from 'react-native';
// 引入第三方
import TabNavigator from 'react-native-tab-navigator';

// 导入组件类 注意 一定要默认有东西在Home页面里
var Home = require('.../Home/XMGHome');
var Shop = require('.../Shop/XMGShop');
var Mine = require('.../Mine/XMGMine');
var More = require('.../More/XMGMore');

var XMGMainBK = React.createClass({

    // 初始化刷新当前页面
    getInitialState(){
        return{
            selectebTab:'home'
        }
    },

    render(){
        return(
            <TabNavigator>
                <TabNavigator.Item
                    title="首页"
                    renderIcon = {()=> <Image source={require('image!icon_tabbar_homepage')} />}
                    renderSelectedIcon = {()=> <Image source={require('image!icon_tabbar_homepage_selected')}/>}
                    onPress={() => this.setState({selectebTab:'home'})}
                    selected={this.state.selectebTab === 'home'}
                >
                    <Navigator 
                        initialRoute={{name:'首页',component:Home}}
                        renderScene={(route,navigator)=>{
                            let Component = route.component;
                            return <Component {...route.passProps} navigator={navigator} />;
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="商家"
                    renderIcon = {()=> <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                    renderSelectedIcon = {()=> <Image source={require('image!icon_tabbar_merchant_selected')}/>}
                    onPress={() => this.setState({selectebTab:'shop'})}
                    selected={this.state.selectebTab === 'shop'}                    
                >
                    <Shop />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="我的"
                    renderIcon = {()=> <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>}
                    renderSelectedIcon = {()=> <Image source={require('image!icon_tabbar_mine_selected')}/>} 
                    onPress={() => this.setState({selectebTab:'mine'})}
                    selected={this.state.selectebTab === 'mine'}               
                >
                    <Mine />
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="更多"
                    renderIcon = {()=> <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>}
                    renderSelectedIcon = {()=> <Image source={require('image!icon_tabbar_misc_selected')}/>}
                    onPress={() => this.setState({selectebTab:'more'})}
                    selected={this.state.selectebTab === 'more'}
                >
                    <More />
                </TabNavigator.Item>                                
            </TabNavigator>
        );
    },
});

const styles = StyleSheet.create({
    iconStyle:{
        width:Platform.OS === 'ios' ? 26 : 20,
        height:Platform.OS === 'ios' ? 26 : 20,
    }
});

module.exports =XMGMainBK;
