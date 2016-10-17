import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
}from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var HeaderView = React.createClass({
    render:function(){
        return(
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        );
    },
    renderTopView:function(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri: 'iconHead'}} style={styles.leftIconStyle}/>
                    <View style={styles.centerViewStyle}>
                        <Text>小土鳖</Text>
                        <Image source={{uri: 'avatar_vip'}} style={{width:17,height:17,marginLeft:5}}/>
                    </View>
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
            </View>
        );
    },
    renderBottomView:function(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottonItem()}
            </View>
        );
    },
    renderBottonItem:function(){
        var itemArr = [];
        var data = [{'number':100,'title':'购物券'},
                    {'number':100,'title':'评价'},
                    {'number':100,'title':'收藏'}]
        for(var i=0; i< data.length; i++){
            // 取出单独的数据
            var item=data[i]
            itemArr.push(
                <TouchableOpacity key={i} activeOpacity={0.7}>
                    <View key={i} style={styles.bottomInnerViewSytle}>
                        <Text style={{color:'white'}}>{item.title}</Text>
                        <Text style={{color:'white',marginTop:5}}>{item.number}</Text>
                    </View>
                </TouchableOpacity>

            );
        }
        return itemArr;
    }
});

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'rgba(255,96,0,1.0)',
        height:Platform.OS == 'ios' ? 400:150,
    },
    topViewStyle:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:200
    },
    leftIconStyle:{
        width:90,
        height:90,
        borderRadius:43,
        marginLeft:20  
    },
    centerViewStyle:{
        flexDirection:'row',
        marginLeft:15,
        width:width*0.6
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        left:0,
        bottom:0,
    },
    bottomInnerViewSytle:{
        width:width/3+1,
        height:45,
        backgroundColor:'rgba(255,255,255,0.25)',
        alignItems:'center',
        justifyContent:'center',
        borderRightColor:'white',
        borderRightWidth:0.7
    }
});

module.exports = HeaderView;