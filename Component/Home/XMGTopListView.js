import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ListView
}from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var TopListView = React.createClass({

    getDefaultProps(){
        return{
            dataArr: []
        }
    },
    getInitialState(){
        // 创建数据源 什么时候创建新的数据新的一行 取决该方法 任意两行都不相等的时候
        var ds = new ListView.DataSource({rowHasChanged:(row1,row2)=> row1 !== row2});
        return{
            // 总会改变，充当状态机
            dataSource:ds.cloneWithRows(this.props.dataArr)
        }
    },
    render(){
        return(
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },
    // 具体的Cell
    renderRow(rowData,rowID,sectionID){
        return(
            <View style={styles.cellStyle}>
                <TouchableOpacity onPress={()=>{alert(sectionID)}}>
                    <Image source={{uri: rowData.image}} style={{width:52,height:52}}/>
                    <Text style={{fontSize:12,textAlign:'center'}}>{rowData.title}</Text>
                </TouchableOpacity>
            </View>            
        );
    }
});

const styles = StyleSheet.create({
    contentViewStyle:{
        // 主轴方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',

        width:width,

        marginLeft:10
    },
    cellStyle:{
        backgroundColor:'white',
        width:70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:(width-75*5)/6

    }
});

module.exports = TopListView;
