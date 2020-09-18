
//#### react-navigation 라이브러리 설치 [ https://reactnative.dev/  Guide참고 ]###############################################

// React Native에는 기본적으로 Screen(화면) 전환 Navigate 기법이 제공되지 않기에 Library를 사용해야함.
// package.json 파일안에  dependencies 블럭이 연결된(의존된) 라이브러리 목록임. 즉, 이곳에 등록되어야 사용 가능 [안드로이드 build.gradle에 라이브러리 연결하는 것과 비슷]

// React Navigation 5.x 버전 ################# [ https://reactnavigation.org/ 사이트 참고] //

// 1. 기본 필수 라이브러리 react-navigation  설치[install] 및 연결 
//
//    $ npm install @react-navigation/native

//  ** package.json 파일에 추가되는 모습 확인!!! **


// 2. 추가로 사용하고자 하는 Navigator의 종류에 따라 5개의 추가 라이브러리 설치
// react-native-gesture-handler, react-native-safe-area-contex, react-native-reanimated, react-native-screens, @react-native-community/masked-view

// 그냥 모두 설치하는 것이 추후 작업을 위해 편함
// 한방에 모두 설치하기 ************************************************************************************************************************************************
//   $ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view *****
//********************************************************************************************************************************************************************

// *참고 : [MacOS에서는 위 라이브러리만 설치하고 실행해도 에러 없으나. Windows OS에서는 StackNavigator 라이브러리까지 추가해야 에러 없음] **


// [이건 안해도 됨!!! ]React Native 0.60버전이 되면서 자동 link됨 #################################################
//  react-native-gesture-handler 라이브러리를 RN프로젝트에 연결하기 [ 안드로이드 build.gradle에 라이브러리 연결하는 기능 ]
//    $ react-native link react-native-gesture-handler
//#############################################################################################################





// 리액트 네비게이션의 화면(Screen - 컴포넌트) 변경은 Navigator 라는 클래스 객체가 수행함.
// 여러화면을 어떤 방식으로 전환/배치할 것인지에 따라 여러종류의 Navigator가 존재함

//#### react-navigation에서 제공하는 Navigator의 종류 [ https://reactnavigation.org/ 사이트 참고] ######################

// 1) createStackNavigator          [ @react-navigation/stack 라이브러리 추가 설치 , @react-native-community/masked-view 라이브러리 추가 설치 ] - $ npm install @react-navigation/stack @react-native-community/masked-view
// 2) createBottomTabNavigator      [ react-navigation-tabs 라이브러리 추가 설치 , react-native-reanimated 라이브러리 추가 설치 ] 
// 3) createMaterialTopTabNavigator [ react-navigation-tabs 라이브러리 추가 설치 , react-native-reanimated 라이브러리 추가 설치 ]
// 4) createDrawerNavigator         [ react-navigation-drawer 라이브러리 추가 설치 ]


// ###################################################################################################################


import React, {Component} from 'react';

//0. NavigationContainer [ 필수 ] <- 이 컴포넌트 안에 Navigator를 넣어서 배치해야 함
import {NavigationContainer} from '@react-navigation/native';

//1)실습에서 사용할 StackNavigator import
import {createStackNavigator} from '@react-navigation/stack';

//Navigator에 의해 전환될 화면 컴포넌트들 import
import HomeComponent from './screen/HomeComponent';
import SecondComponent from './screen/SecondComponent';
import { timing } from 'react-native-reanimated';

import {View, Text, Image, Button, Alert} from 'react-native';




//1. 먼저 StackNavigator 만들기 [ 안드로이의 액티비티 백스택의 개념과 유사한 screen 네이게이터 ] 
// 1.1 StackNavigator에 의해 보여질 2개의 Screen 컴포넌트(안드로이드의 Activity) 만들기 
//     - screen폴더 생성 후 안에 HomeComponent, SecondComponent만들기
// 1.2 createStackNavigator() 함수를 실행하여 StackNavigator객체 생성

const Stack= createStackNavigator();

export default class Main extends Component{
    render(){
        // 어떤 Navigator의 종류를 선택하든지 최상위 컴포넌트로 NavigationContainer 컴포넌트가 있어야 함
        return (
            <NavigationContainer>
                {/* 1.3 Stack Navigator객체 가 제어할 화면(컴포넌트) 배치 */}
                <Stack.Navigator>
                    {/* 화면 전환에 사용될 명칭 name속성과 컴포넌트 클래스 명인 component 속성 지정 */}
                    {/* <Stack.Screen name="Home" component={ HomeComponent }></Stack.Screen>
                    <Stack.Screen name="Second" component={ SecondComponent}></Stack.Screen> */}
                    {/* 잘 되었다면 마치 안드로이드의 기본 화면처럼 ActionBar가 보여짐 */}


                    {/* 1.4 화면(컴포넌트)를 전환하기 위해 Home, Second 컴포넌트에서 각각 버튼 제작 [ 1.4 ~ 1.4.6 까지 실습 ] */}      



                    {/* 1.5 ActionBar에 표시되는 각 화면 컴포넌트의 title 변경해 보기 - option설정  */}
                    {/* <Stack.Screen name="Home" component={ HomeComponent } options={  {title:'홈'}  }></Stack.Screen>
                    <Stack.Screen name="Second" component={ SecondComponent } options={ {title:'두번째'} }></Stack.Screen> */}

                    {/* 1.5.1 옵션설정을 해당 컴포넌트에서 하고 싶다면? - SecondComponent.js에서 작업 */}


                    {/* 1.5.2 헤더바의 다른 옵션들 : 글씨 위치, 배경색, 글씨색상, 글씨스타일 ... */}
                    {/* 여러 속성을 추가할 것이어서 줄바꿈 하면서 속성 추가 */}
                    <Stack.Screen 
                        name="Home"
                        component={ HomeComponent }
                        options={{
                            title:'HOME',
                            headerStyle:{ backgroundColor:'green'},
                            headerTintColor:'white',
                            headerTitleStyle:{ fontWeight:'bold'},
                            headerTitleAlign: 'center'
                        }}>
                    </Stack.Screen>


                    {/* 1.5.3 헤더바의 커스텀 컴포넌트 [ 로고 이미지가 있는 제목줄 만들때 사용 ] */}
                    {/* 저 아래에 제목줄로 사용될 별도의 컴포넌트(LogoTitle) 설계 */}
                    {/* <Stack.Screen 
                        name="Second"
                        component={ SecondComponent }
                        options={ {
                            headerTitle: ()=>{ return <LogoTitle></LogoTitle>}                            
                        }}>
                    </Stack.Screen> */}

                    {/* 1.5.4 액션바의 오른쪽에 옵션메뉴 버튼 같은 것 만들기 */}
                    <Stack.Screen 
                        name="Second"
                        component={ SecondComponent }
                        options={ {
                            headerTitle: ()=>{ return <LogoTitle></LogoTitle>},
                            //headerRight: ()=>{ return <Button title="menu" onPress={ ()=>Alert.alert('menu') }></Button>}
                            //축약형으로
                            headerRight:()=><Button title="menu" onPress={ ()=>Alert.alert('menu') }></Button>
                        }}>
                    </Stack.Screen>


                    {/* 1.5.5 액션바 영역을 아예 없애고 싶다면 */}
                    {/* <Stack.Screen name="Second" component={ SecondComponent } options={ {headerShown:false} }></Stack.Screen> */}


                    {/* 이 옵션설정 작업들을 각 컴포넌트들의 js문서에서 작성해도 됨 [ this.props.navigation.setOptions() ] */} 

                </Stack.Navigator>
            </NavigationContainer>                        
        );
    }
}//Main


// 1.5.3실습) 헤더바를 대체할 컴포넌트
class LogoTitle extends Component{
    render(){
        return (
            <View style={ {flexDirection:'row', paddingLeft: 8, alignItems:'center'} }>
                <Image source={require('./icons/RN_logo.png')} style={{ width: 30, height: 30 }} />
                <Text style= { {color:'blue', fontWeight:'bold', fontSize: 24, marginLeft: 16} }>Second</Text>
            </View>
        );
    }
}

// ################ 1. StackNavigator 실습 종료 ###############################################################################################



// 2. BottomTabNavigator 사용해 보기 
// Main.js같은 역할의 별도 BottomTabMain.js문서 만들어서 작업

// #############################################################################################################################################



// 3. MaterialTopTabNavigator 사용해 보기 
// Main.js같은 역할의 별도 MaterialTopTabMain.js문서 만들어서 작업

// #############################################################################################################################################



// 4. DrawerNavigator 사용해 보기 
// Main.js같은 역할의 별도 DrawerMain.js문서 만들어서 작업

// #############################################################################################################################################