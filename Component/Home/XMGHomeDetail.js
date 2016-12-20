import React, {Component} from 'React';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

var HomeDetail = React.createClass({

    getDefaultProps() {
        return {}
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.popToHome()}>
                    <Text>
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },

    popToHome() {
        console.log(title)
        this
            .props
            .navigator
            .pop();
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});

module.exports = HomeDetail;
