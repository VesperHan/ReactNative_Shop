import React,{Component} from 'React';

import {
    StyleSheet,
    View,
    Text,
    ListView,
    TouchableOpacity,
    Image,
    Dimensions
}from 'react-native';

var {width,height} = Dimensions.get('window');
var CommonCell = require('./XMGBottomCommonCell');
var GuestYouLike = React.createClass({
    getDefaultProps(){
        return{
            api_url:'http://api.meituan.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },
    getInitialState(){
        return{
            dataSource:new ListView.DataSource({rowHasChanged:(row1,row2)=>row1!== row2})
        }
    },
    render(){
        return(
            <View style={styles.container}>
                <CommonCell
                    leftIcon='cnxh'
                    leftTitle='猜你喜欢'
                ></CommonCell>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                >
                </ListView>
            </View>
        );
    },
    renderRow(rowData){
        return(
            <TouchableOpacity>
                <View style={styles.listViewStyle}>
                    <Image source={{uri: this.dealWithImageUrl(rowData.imageUrl)}}
                    style={styles.imageStyle}></Image>
                    <View style={styles.rightViewStyle}>
                        <View style={styles.rightTopViewStyle}>
                            <Text>{rowData.title}</Text>
                            <Text style={{color:'gray'}}>{rowData.topRightInfo}</Text>
                        </View>
                        <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
                        <View style={styles.rightBottomViewStyle}>
                            <Text style={{color:'orange',fontSize:16}}>{rowData.mainMessage+rowData.mainMessage2}</Text>
                            <Text>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    dealWithImageUrl(url){
        if(url.search('w.h') == -1){
            return url;
        }else{
            return url.replace('w.h','120.90');
        }
    },
    // 数据请求加工处理
    componentDidMount(){
        this.loadDataFormNet();
    },
    loadDataFormNet(){
        fetch(this.props.api_url)
            //先转换为JSON 再对JSON进行操作
            .then((response)=> response.json())
            .then((responseData)=>{
                console.log(responseData.data);
                //更新数据源
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(responseData.data)
                });
            });
    }
});

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        backgroundColor:'white'
    },
    imageStyle:{
        width:120,
        height:90
    },
    listViewStyle:{
        flexDirection:'row',
        padding:10,
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8'
    },
    rightViewStyle:{
        marginLeft:8,
        justifyContent:'center',
        width:width-145
    },
    rightTopViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:8,
    },
    rightBottomViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:12
    }

});

module.exports = GuestYouLike;
