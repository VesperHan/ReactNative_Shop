import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Platform,
    Image,
    TouchableOpacity,
    ScrollView
}from 'react-native';

var CommonCell = require('./XMGCommonCell');
var More = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                {this.renderNavBar()}
                <ScrollView bounces={false}>
                    <View style={{marginTop:10}}>
                        <CommonCell 
                            title='扫一扫'
                        />
                    </View>

                    <View style={{marginTop:10}}>
                        <CommonCell 
                            title='省流量模式'
                            isSwitch={true}
                        />
                        <CommonCell 
                            title='消息提醒'
                        />
                        <CommonCell 
                            title='邀请好友使用'
                        />
                        <CommonCell 
                            title='清理缓存'
                            rightRendTitle='1.99m'
                        /> 
                    </View>  

                    <View style={{marginTop:10}}>
                        <CommonCell 
                            title='意见反馈'
                        />
                        <CommonCell 
                            title='问卷调差'
                        />        
                        <CommonCell 
                            title='支付帮助'
                        />             
                        <CommonCell 
                            title='网络诊断'
                        />                                                                                                                                          
                    </View>
                    
                    <View style={{marginTop:10}}>
                        <CommonCell 
                            title='精品应用'
                        />  
                    </View>
                </ScrollView>
            </View>
        );
    },

    // 导航条
    renderNavBar(){
        return(

            <View style = {styles.navStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('click')}} style={styles.rightViewSty}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.image}/>
                </TouchableOpacity>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    navStyle:{
        height:Platform.OS == 'ios'?64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        //   垂直居中 设置水平之后 alignItems就是垂直居中
        alignItems:'center',
        //  设置对齐方式
        justifyContent:'center'
    },
    rightViewSty:{
            // 绝对定位
        position:'absolute',
        right:10,
        bottom:15
    },
    image:{
        width:Platform.OS == 'ios'? 25:20,
        height:Platform.OS == 'ios'? 25:20,
    },
});

module.exports = More;