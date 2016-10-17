import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
}from 'react-native';

var MiddleData = require('./MiddleData.json')

var MineMiddleView = React.createClass({
    render:function(){
        return(
            <View style={styles.container}>
                    {this.renderAllItem()}
            </View>
        );
    },
    renderAllItem:function(){
        // 定义组件数组
        var itemArray = [];
        // 遍历
        for(var i = 0; i < MiddleData.length; i++){
            // 取出单独的数据
            var data = MiddleData[i];
            itemArray.push(
                <InnerView key={i} iconName={data.iconName} title={data.title} />
            );
        }
        console.log(MiddleData);
        return itemArray;
    }
});

var InnerView= React.createClass({

    getDefaultProps:function(){
        return{
            iconName:'',
            title:''
        }
    },
    render:function(){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.subView}>
                    <Image source={{uri: this.props.iconName}} style={{width:30,height:20}} />
                    <Text style={{marginTop:10,fontSize:13}}>{this.props.title}</Text>
                </View>

            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // 主轴对齐方式
        justifyContent:'space-between',
        backgroundColor:'white',
        height:Platform.OS == 'ios' ? 64:50,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        alignItems:'center'
    },
    subView:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginRight:20,
    }
});

module.exports = MineMiddleView;