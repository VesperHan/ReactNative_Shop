import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
}from 'react-native';

var CommonMyCell = React.createClass({

    getDefaultProps:function(){
        return{
            leftIconName:'',
            leftTitle:'',
            rightIconName:'',
            rightTitle:''
        }
    },
    render:function(){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.container}>
                    <View style={styles.leftViewSty}>
                        <Image source={{uri: this.props.leftIconName}} style={styles.leftImageSty} />
                        <Text>{this.props.leftTitle}</Text>
                    </View>

                    {this.rightSubView()}
                </View>
            </TouchableOpacity>
        );
    },
    rightSubView:function(){
        return(
            <View style={styles.rightViewSty}>
                {this.renderRightContent()}
                <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:15,marginLeft:8}} />
            </View>
        );
    },
    renderRightContent:function(){
        if(this.props.rightIconName.length == 0){
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            );
        }else{
            return(
                <Image source={{uri: this.props.rightIconName}} style={{width:24,height:13}} />
            );
        }
    },
    renderNavBar:function(){

    }

});

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // 主轴对齐方式
        justifyContent:'space-between',
        backgroundColor:'white',
        height:Platform.OS == 'ios' ? 44:30,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },
    leftViewSty:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:15
    },
    rightViewSty:{
        flexDirection:'row',
        alignItems:'center'
    },
    leftImageSty:{
        width:24,
        height:24,
        borderRadius:12,
        marginRight:8
    }
});

module.exports = CommonMyCell;