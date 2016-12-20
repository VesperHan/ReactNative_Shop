import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
}from 'react-native';

var TopMiddleData = require('../LocalData/HomeTopMiddleLeft.json');
var MiddleCommonView = require('./XMGMiddleCommonView');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var HomeMiddleView = React.createClass({

    render(){
        return(
            <View style={styles.container}>
                {this.renderLeftView()}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },
    renderLeftView:function(){
        data=TopMiddleData.dataLeft[0];
        return(
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri: data.img1}} style={{width:80,height:25,resizeMode:'contain'}}/>
                    <Image source={{uri: data.img2}} style={{width:64,height:43,resizeMode:'contain'}}/>
                    <Text>{data.title}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text>{data.price}</Text>
                        <Text>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    },
    renderRightView:function(){
        var itemArr = [] ;
        for(var i=0;i<TopMiddleData.dataRight.length;i++){
            // 取出单独一条
            var data = TopMiddleData.dataRight[i]
            itemArr.push(
                <MiddleCommonView key={i} 
                    title={data.title} subTitle={data.subTitle} 
                    rightIcon={data.rightImage} titleColor={data.titleColor} />
            );
        }
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        marginTop:10,
        flexDirection:'row'
    },
    leftViewStyle:{
        width:width*0.5,
        justifyContent:'center',
        // 水平居中
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'#e8e8e8',
        height:119
    }
});

module.exports = HomeMiddleView;
