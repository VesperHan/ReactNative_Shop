import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Platform,
    TouchableOpacity,
    Switch,
    Text,
    Image
}from 'react-native';

var CommonCell = React.createClass({

    getDefaultProps(){
        return{
            title: '',
            isSwitch:false,//是否展示开关
            rightRendTitle:'',
        }
    },

    getInitialState(){
        return{
            isOn:false
        }
    },

    render(){
        return(
            <TouchableOpacity onPress={()=>{alert('点击了 '+this.props.title)}}>
                <View style={styles.container}>
                    <Text style={{marginLeft:10}}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },
    
    renderRightView(){

        if(this.props.isSwitch){
            return(
                <Switch 
                value={this.state.isOn == true} onValueChange={(value)=>this.change(value)}
                style={{marginRight:15}}/>
            );
        }
        else{
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:15}} />
                </View>
            );
        }
    },
    rightTitle(){
        if(this.props.rightRendTitle.length > 0){
            return(
                <Text style={{marginRight:10}}>{this.props.rightRendTitle}</Text>
            );
        }
    },

    change(value){
        {this.setState({isOn:!this.state.isOn})}
        alert(value);
    }
});

const styles = StyleSheet.create({
    container:{
        height:Platform.OS == 'ios' ? 44:30,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
        
        flexDirection:'row',
        // 主轴对齐方式
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white'
    }
});

module.exports = CommonCell;