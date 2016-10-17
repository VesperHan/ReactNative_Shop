import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform
}from 'react-native';

var TopView = require('./XMGMineHeaderView');
var MiddeView = require('./XMGMineMiddleView');
var MyCell = require('./XMGCommonMyCell');

var Mine = React.createClass({
    render(){
        return(
            <View>
            {this.renderNavBar()}
            <ScrollView style={styles.scrollViewSty} contentInset={{top: -250}} contentOffset={{y:250}}>
                <View>
                    <TopView />
                    <MyCell
                        leftIconName='collect'
                        leftTitle='我的订单'
                        rightTitle='查看全部订单'              
                    />   
                    <MiddeView />            
                </View>       
                <View style={{marginTop:10,}}>
                    <MyCell
                        leftIconName='draft'
                        leftTitle='我的钱包'
                        rightIconName=''
                        rightTitle='账户余额100元'                  
                    />
                    <MyCell
                        leftIconName='like'
                        leftTitle='抵用券'
                        rightIconName=''
                        rightTitle='0'                  
                    />
                    <View style={{marginTop:10}}>
                        <MyCell
                            leftIconName='card'
                            leftTitle='积分商城'                 
                        />                    
                    </View> 
                    <View style={{marginTop:10}}>
                        <MyCell
                            leftIconName='new_friend'
                            leftTitle='今日推荐'
                            rightIconName='me_new'                
                        />                    
                    </View>  
                    <View style={{marginTop:10}}>
                        <MyCell
                            leftIconName='pay'
                            leftTitle='我要合作'
                            rightTitle='轻松开店、招财进宝'              
                        />                    
                    </View>                                                           
                </View>
            </ScrollView>
            </View>
        );
    },
    renderNavBar:function(){
        return(
            <View style = {styles.navStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>我的</Text>
                <TouchableOpacity onPress={()=>{alert('click')}} style={styles.rightViewSty}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.image}/>
                </TouchableOpacity>
            </View>
        );
    },


});

const styles = StyleSheet.create({

    scrollViewSty:{
        backgroundColor:'#e8e8e8'
    },
    navStyle:{
        height:Platform.OS == 'ios'?64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        //   垂直居中 设置水平之后 alignItems就是垂直居中
        alignItems:'center',
        //  设置对齐方式
        justifyContent:'center',
    },    
});

module.exports = Mine;