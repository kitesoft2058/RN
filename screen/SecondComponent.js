import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';


export default class SecondComponent extends Component{   
    
    render(){

        // 1.4.6실습) 전달받은 데이터객체를 구조분해 할당
        const {name, age}= this.props.route.params;

        return (
            <View style= { styles.container }>
                <Text style= { styles.plainText }>Second Screen.</Text>

                {/* 1.4 Main.js에서 기본 StackNavigator작업 후. screen이동을 위한 코드 작성 */}
                <Button title="Back to the Home screen" color="indigo" onPress= { ()=>this.props.navigation.navigate('Home') } ></Button>

                {/* 1.4.2 navigate()메소드는 특정 화면으로 이동하는 메소드 . 이전 화면으로 돌아가는 메소드도 있음*/}
                <Button title="Go Back" color="orange" onPress= { ()=>this.props.navigation.goBack() } ></Button>

                {/* 1.4.3 push() : 본인 컴포넌트를 또 다시 만들어 이동하고 싶을때 사용 : 같은 컴포넌트가 또 보여짐 [ navigate('Second')로 본인을 또 이동하려 하면 안됨 ] */}
                <Button title="Go to Second again.." color="green" onPress= { ()=>this.props.navigation.push('Second') } ></Button>

                {/* 1.4.4 popToTop() : Navigator의 첫번째 스크린으로 이동 */}
                <Button title="Go To First Screen" color="black" onPress= { ()=>this.props.navigation.popToTop() } ></Button>

                {/* 1.4.5 replace() : 현재 컴포넌트 finish하면서 이동 [ HomeComponent.js 에서 작업 ] */}


                {/* 1.4.6실습) navigate()로 화면 전환시에 두번재 파라미터를 통해 데이터 객체가 전달되었다면 */}
                {/* 데이터를 전달받은 Component는 props에 자동으로 route.params 라는 변수에 전달된 데이터 객체를 받음 */}
                <Text style={ {padding:16, color:'blue', fontWeight:'bold'} }> {this.props.route.params.name} , { this.props.route.params.age} </Text>
                {/* 멤버접근 코드가 길어서 불편하다면 구조분해 할당으로 좀 간결하게 데이터 표현 가능 */}
                <Text style={ {padding:16, color:'blue', fontWeight:'bold'} }> {name} , {age} </Text>


                {/* Header bar 옵션 설정들 */}
                {/* 1.5 ActionBar에 있는 title 글씨 설정해 보기 - StackNavigator가 있는 Main.js에서 설정 */}

                {/* 1.5.1실습) 해더바의 옵션설정을 이 컴포넌트 안에서 작성하고 싶다면 */}
                <Button title="change title" onPress={  ()=>{  this.props.navigation.setOptions( {title:'Second!'} ) } }></Button>
                {/* 혹시 버튼 없이 시작부터 옵션을 설정하고 싶다면.. componentDidMounted() 라이프사이클 메소드에서 옵션 설정해야함 - 생성자에서는 props.navigation을 인식하지 못함 */}

                {/* 1.5.2 ActionBar 의 여러 옵션설정 .. Main.js에서 작업 */}

            </View>
        );
    }


    //1.5.1실습의 추가적인 내용 [ 혹시 버튼 없이 시작부터 옵션을 설정하고 싶다면.. ] /////////////////////////////////////
    componentDidMount(){
        //this.props.navigation.setOptions( {title:'Good'} );
    }
    //////////////////////////////////////////////////////////////
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