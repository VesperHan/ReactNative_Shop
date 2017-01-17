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

    getDefaultProps(){
        return{
            //回调函数
            popTopHome:null
        }
    },
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
        var rightIcona;
        for(var i=0; i<Home_D4.data.length; i++){
            var dataItem = data[i]
            dataArr.push(
                <MiddleCommonView key={i}
                    title={dataItem.maintitle}
                    subTitle={dataItem.deputytitle}
                    rightIcon={this.dealWithImageUrl(dataItem.imageurl)}
                    titleColor={dataItem.typeface_color}
                    tplurl={dataItem.tplurl}
                    callBackClickCell={(data)=>this.popTopHome(data)}
                />
            );
        }
        return dataArr;
    },
    dealWithImageUrl:function(url){
        if(url.search('w.h') == -1){
            console.log('没有找到');
            return url;
        }else{
            console.log('找到了');
            return url.replace('w.h', '120.90');
        }
    },
    popTopHome(data){
        //继续执行回调函数
        this.props.popTopHome(data);
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
        height:60
    }
});

module.exports = MiddleBottomView;
