import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
}from 'react-native';

var BottomCommonCell = React.createClass({

    getDefaultProps(){
        return{
            leftIcon:'',
            leftTitle:'',
            rightTitle:'',
        }
    },
    render(){
        return(
            <TouchableOpacity onPress={()=>alert('click')}>
                <View style={styles.container}>
                <View style={styles.leftViewSty}>
                    <Image source={{uri: this.props.leftIcon}} style={{width:23,height:23,marginRight:5}}></Image>
                    <Text>{this.props.leftTitle}</Text>
                </View>
                <View style={styles.rightViewSty}>
                    <Text>{this.props.rightTitle}</Text>
                    <Image source={{uri: 'icon_cell_rightArrow'}} 
                    style={{width:8,height:13,marginRight:8,marginLeft:5}}>
                    </Image>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
});

const styles = StyleSheet.create({
    container:{
        height:44,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:1
    },
    leftViewSty:{
        // 改变主轴方向
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8
    },
    rightViewSty:{
        flexDirection:'row',
        alignItems:'center',
    },
});

module.exports = BottomCommonCell;
