import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
}from 'react-native';

// 导入外部组件
var Main = require('./XMGMain');
var Launch = React.createClass({
    render(){
        return(
            <Image source={{uri:'launchimage'}} style={styles.launchStyle} />
        );
    },

    componentDidMount(){
        // 定时 每隔2s切换到Main
        setTimeout(()=>{
            // 页面切换
            this.props.navigator.replace({
               component:Main,//具体路由板块 
            });
        },2000);
    }

});

const style = StyleSheet.create({
    launchStyle:{
        flex:1
    }
});

module.exports = Launch;
