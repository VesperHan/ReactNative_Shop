import React, {Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    Navigator
} from 'react-native';
// 引入第三方
import TabNavigator from 'react-native-tab-navigator';

// 导入组件类 注意 一定要默认有东西在Home页面里
var Home = require('../Home/XMGHome');
var Shop = require('../Shop/XMGShop');
var Mine = require('../Mine/XMGMine');
var More = require('../More/XMGMore');

var Main = React.createClass({

    // 初始化刷新当前页面
    getInitialState() {
        return {selectebTab: 'home'}
    },

    render() {
        return (
            <TabNavigator>
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', '首页', Home)}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', '商家', Shop)}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', '我的', Mine)}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', '更多', More)}
            </TabNavigator>
        );
    },

    // 每一个tabbarItem
    renderTabBarItem(title, iconName, selectedIconName, selectebTab, componentName, component) {
        return (
            <TabNavigator.Item
                title={title}
                renderIcon=
                {()=> <Image source={{uri: iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon=
                {()=> <Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
                onPress={() => this.setState({selectebTab: selectebTab})}
                selected={this.state.selectebTab === selectebTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                tabStyle={styles.tabStyle}>
                <Navigator
                    initialRoute={{
                    name: componentName,
                    component: component
                }}
                    renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.passProps} navigator={navigator}/>;
                }}/>
            </TabNavigator.Item>
        )
    }
});

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios'
            ? 26
            : 20,
        height: Platform.OS === 'ios'
            ? 26
            : 20
    },
    selectedTitleStyle: {
        color: 'orange'
    },
    tabStyle: {
        backgroundColor: 'white'
    }
});

module.exports = Main;
