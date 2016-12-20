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
        }
    },
    render(){
        return(
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.contaier}>
                    <View>
                        <Text style={{color:this.props.titleColor,fontSize:16}}>{this.props.title}</Text>
                        <Text style={{marginTop:6}}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={{uri: this.props.rightIcon}} style={{height:43,width:64,resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    contaier:{
        width:width * 0.5 - 1,
        flexDirection:'row',
        height:59,
        justifyContent:'space-around',
        borderBottomWidth:1,
        borderColor:'#e8e8e8',
        backgroundColor:'white',
        alignItems:'center',
    },
});

module.exports = MiddleCommonView;
