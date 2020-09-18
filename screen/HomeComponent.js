import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';


export default class HomeComponent extends Component{    

    render(){
        return (
            <View style= { styles.container }>
                <Text style= { styles.plainText } >Home Screen.</Text>

                {/* 1.4 Main.js에서 기본 StackNavigator작업 후. screen이동을 위한 코드 작성 */}
                <Button title="Go to the Second screen" onPress={ this.gotoSecond }></Button>
            </View>
        );
    }

    //4. Navigation버튼을 클릭할 때 실행될 콜백메소드
    gotoSecond = ()=>{
        // react-navigation에서 네비게이팅하는 코드 [ Navigator에 의해 보여지는 Component는 props로 navigation객체를 자동으로 전달받음. 즉, this.props객체의 멤버로 navigation객체가 존재함 ]
        //this.props.navigation.navigate('Second'); //파라미터 : StackNavigator에서 지정한 Screen이름 [Second 화면의 ActionBar에는 자동으로 up버튼이 생김]

        // 1.4.5실습) replace() : 현재 Screen 컴포넌트를 finish 하고 이동
        //this.props.navigation.replace('Second');


        //1.4.6 화면 전환시에 데이터 전달하기 [ android의 Intent에서 Extra Data와 비슷 ]  
        // navigate()메소드의 두번째 파라미터로 데이터를 가진 객체 전달  - [ name, age를 가진 객체 전달해보기 ]
        this.props.navigation.navigate('Second', { name:"sam", age:20 } );    
        
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


