import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
}from 'react-native';

var HomeDetail = React.createClass({

    getDefaultProps(){
        return{
            title:' ',
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.popToHome()}>
                    <Text style={styles.welcome}>
                        测试跳转
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    popToHome(){
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },    
  welcome:{
      fontSize:20,
      textAlign:'center',
      margin:10,
  }
});

module.exports = HomeDetail;

