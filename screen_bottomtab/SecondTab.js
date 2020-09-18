import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class SecondTab extends Component{

    render(){
        return (
            <View style= { styles.container }>
                <Text style= { styles.plainText } >Second TAB</Text>
            </View>
        );
    }

    // 2.4.4 실습) 개별 컴포넌트 js에서 탭바 옵션 설정하기
    componentDidMount(){
        this.props.navigation.setOptions({
            tabBarLabel:"두번째",
            // 이미지 경로 설정시에 ../ 주의할 것
            tabBarIcon : ()=> <Image source={ require('../icons/RN_logo.png')} style= { {width:24, height:24} }></Image>,
        });
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