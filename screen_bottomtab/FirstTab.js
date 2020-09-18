import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class FirstTab extends Component{
   
    render(){
        return (
            <View style= { styles.container }>
                <Text style= { styles.plainText } >First TAB</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    plainText:{
        padding:8,
    }
});