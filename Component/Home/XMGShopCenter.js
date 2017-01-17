import React, {Component} from 'react';

import {
    AppRegistry,
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity
}from 'react-native';

var CommonCell = require('./XMGBottomCommonCell');
var Home_D5 = require('../LocalData/XMG_Home_D5');
var HomeShop = React.createClass ({

    getDefaultProps(){
        return{
            popToHomeView:null
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <CommonCell
                    leftIcon="gw"
                    leftTitle="购物中心"
                    rightTitle="全部4家"
                ></CommonCell>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                >
                {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },
    renderAllItem(){
        var itemArr = [];
        var shopData = Home_D5.data;
        for(var i=0;i<shopData.length;i++){
            var data = shopData[i];
            console.log(data.name);
            itemArr.push(
                <ShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    key={i}
                    popTopShopCenter={(url)=>this.popTopHome(url)}
                >
                </ShopCenterItem>
            );
        }
        //批量创建完要记得返回组件,否则无法渲染
        return itemArr;
    },
    popTopHome(url){
        if(this.props.popToHomeView == null)return;
        this.props.popToHomeView(url);
    }
});

var ShopCenterItem = React.createClass({
    getDefaultProps(){
        return{
            shopImage:'',
            shopSale:'',
            shopName:'',
            detailurl:'',
            popTopShopCenter:null
        }
    },
    render(){
        return(
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri: this.props.shopImage}} 
                    style={styles.imageStyle}></Image>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        );
    },
    clickItem(url){
        if(this.props.detailurl == null) return;
        this.props.popTopShopCenter(url);
    }
});
const styles = StyleSheet.create({
    container:{
        marginTop:70,
    },
    scrollViewStyle:{
        backgroundColor:'white'
    },
    itemViewStyle:{
        margin:8,
    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:5
    },
    shopSaleStyle:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'orange',
        color:'white',
        padding:3
    },
    shopNameStyle:{
        marginTop:10,
        textAlign:'center'
    }
});
module.exports = HomeShop