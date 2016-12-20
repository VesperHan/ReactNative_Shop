import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text
}from 'react-native';

// 导入外部Json数据
var Home_D4 = require('../LocalData/XMG_Home_D4.json');
var MiddleCommonView = require('./XMGMiddleCommonView');
var MiddleBottomView = React.createClass({

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.topViewStyle}>
                </View>
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        );
    },
    // 所有子组件
    renderBottomItem:function(){
        var dataArr = [];
        var data = Home_D4.data;
        for(var i=0; i<Home_D4.data.length; i++){
            var dataItem = data[i]
            dataArr.push(
                <MiddleCommonView key={i}
                    title={dataItem.title}
                    subTitle={dataItem.deputytitle}
                    rightIcon={this.dealWithImageUrl(dataItem.imageurl)}
                    titleColor={dataItem.typeface_color}
                />
            );
        }
        return dataArr;
    },
    dealWithImageUrl:function(url){
        // if(url.search('w.h') == -1){
        //     return url;
        // }else{
            return url.replace('w.h', '120.90');
        // }
    }
});

const styles = StyleSheet.create({
    container:{
        marginTop:10,
    },
    topViewStyle:{

    },
    bottomViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
    }
});

module.exports = MiddleBottomView;
