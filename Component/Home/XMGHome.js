import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
}from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var HomeDetail = require('./XMGHomeDetail');
var TopView = require('./XMGTopView');
var Home = React.createClass({

    render(){
        return(
            <View style={styles.container}>
                {/**首页导航条 */}
                {this.renderNavBar()}
                {/**首页主要内容 */}
                <ScrollView>
                    <TopView />
                </ScrollView>
            </View>
        );
    },
    renderNavBar(){
        return(
            // 三块 左 中 右
            <View style = {styles.navStyle}>
                <Text style={{color:'white',marginTop:12}}>上海</Text>
                <TextInput
                    placeholder = "输入商家、品类、商圈"
                    style = {styles.topInput}   />
                <View style={{flexDirection:'row',height:64,alignItems:'center',marginTop:7,marginRight:5}}>
                    <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImg}    />
                    <Image source={{uri:'icon_homepage_scan'}}  style={styles.navRightImg}    />
                </View>

            </View>
        );
    },

    pushToDetail(){
        console.log('aaaa');
        this.props.navigator.push(
            {
                component:HomeDetail,//要跳转的板块
                title:'详情页' //参数
            }
        );
    }
    
});

const styles = StyleSheet.create({
  navStyle:{
      height:Platform.OS == 'ios'?64:44,
      backgroundColor:'rgba(255,96,0,1.0)',
      flexDirection:'row',
    //   垂直居中 设置水平之后 alignItems就是垂直居中
      alignItems:'center',
    //  设置对齐方式
      justifyContent:'space-around'
  },
  topInput:{
      width:width*0.73,
      height:35,
      backgroundColor:'white',
      marginTop:Platform.OS == 'ios'? 20:0,
      //设置内左边距
      paddingLeft:15,
      borderRadius:18,

  },
    navRightImg:{
        width:Platform.OS == 'ios'? 25:20,
        height:Platform.OS == 'ios'? 25:20,
  },
  container: {
        flex: 1,
        // justifyContent: 'center',  //必须去掉 不去掉 导航会一直在中间 这是垂直居中
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
  },

});

module.exports = Home;

