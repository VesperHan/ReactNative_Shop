import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
}from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var MiddleCommonView = React.createClass({

    getDefaultProps(){
        return{
            title:' ',
            subTitle:' ',
            rightIcon:' ',
            titleColor:' ',
            tplurl:' ',//下级界面的URL路径
            //回调函数
            callBackClickCell:null
        }
    },
    render(){
        return(
            <TouchableOpacity activeOpacity={0.6} onPress={()=>this.clickCell(this.props.tplurl)}>
                <View style={styles.contaier}>
                    <View>
                        <Text style={{color:this.props.titleColor,fontSize:16}}>{this.props.title}</Text>
                        <Text style={{marginTop:6}}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{uri: this.props.rightIcon}} style={{height:43,width:64,resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>
        );
    },
    clickCell(data){
        if(this.props.callBackClickCell == null) return;
        this.props.callBackClickCell(data);
    }
});

const styles = StyleSheet.create({
    contaier:{
        width:width * 0.5 - 1,
        flexDirection:'row',
        height:60,
        justifyContent:'space-around',
        borderBottomWidth:1,
        marginRight:1,
        borderColor:'#e8e8e8',
        backgroundColor:'white',
        alignItems:'center',
    },
});

module.exports = MiddleCommonView;
