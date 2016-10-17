import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
}from 'react-native';

var TopListView = require('./XMGTopListView');
// json数据
var TopMenu = require('../LocalData/TopMenu.json');

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var TopView = React.createClass({

    getInitialState(){
        return{
           activePage:0 
        }
    },
    render(){
        return(
            <View style={styles.container}>
                {/**内容 */}
                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    pagingEnabled={true}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}>
                    {this.renderScrollItem()}
                </ScrollView>
                {/**内码 */}
                <View style={styles.indicatorStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },
    onScrollAnimationEnd(e){
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({
            activePage:currentPage
        });
    },
    renderScrollItem:function(){
        var itmArr = [];
        var dataArr = TopMenu.data;
        // 遍历创建组件
        for(var i =0;i <dataArr.length; i++){
            itmArr.push(
                <TopListView key={i} dataArr={dataArr[i]} />
            );
        }
        return itmArr;
    },
    // 页码指示器
    renderIndicator:function(){
        var indicatorArr = [];
        // 创建组件
        for(var i=0; i<2; i++){
            // 设置圆点的样式
            style = (i == this.state.activePage) ? {color:'orange'} : {color:'gray'}
            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            );
        }
        return indicatorArr;
    }
});

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    indicatorStyle:{
        flexDirection:'row',
        justifyContent:'center'
    },
});

module.exports = TopView;
