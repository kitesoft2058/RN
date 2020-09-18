
// BottomTabNavigator 라이브러리 추가 - 라이브러리를 새로 추가하려면 앱을 종료하고 설치 후 다시 run 해야 함
// $ npm install @react-navigation/bottom-tabs

import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

// NaviationContainer 컴포넌트 import 
import {NavigationContainer} from '@react-navigation/native';

// BottomTabNavigator를 만들어내는 함수 import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 2.1 먼저 각 탭에 의해 보여질 컴포넌트 3개 만들기 [ screen_bottomtab폴더 만들고 그 안에 3개의 컴포넌트 만들기 ]
import FirstTab from './screen_bottomtab/FirstTab';
import SecondTab from './screen_bottomtab/SecondTab';
import ThirdTab from './screen_bottomtab/ThirdTab';

// 2.2 BottomTabNavigator객체 생성
const BottomTab= createBottomTabNavigator();

export default class BottomTabMain extends Component{
    render(){
        return (
            // 2.0 기본 NavigationContainer 화면에 보이기 [ index.js에서 시작 컴포넌트를 이 컴포넌트로 변경 ]
            <NavigationContainer>

                {/* 2.3 BottomTabNavigator 컴포넌트 추가 및 탭에 의해 제어될 화면들 지정 */}
                {/* <BottomTab.Navigator>
                    <BottomTab.Screen name="first" component={ FirstTab } ></BottomTab.Screen>
                    <BottomTab.Screen name="second" component={ SecondTab } ></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={ ThirdTab } ></BottomTab.Screen>                                        
                </BottomTab.Navigator> */}

                {/* 2.4 탭바에 대한 옵션설정*/}
                {/* 2.4.1 initialRouteName : 처음 선택된 컴포넌트 지정 [ StackNavigator에도 있는 옵션 ] */}
                {/* 2.4.2 tabBarOptions : TabBar관련 옵션들 */}
                <BottomTab.Navigator 
                    initialRouteName="second"
                    tabBarOptions={{
                        activeTintColor:'red',
                        activeBackgroundColor:'gray',
                        showLabel:true,
                        labelPosition:'below-icon'

                    }}>

                    {/* 2.4.3 각 탭 화면 컴포넌트별 옵션설정들 */}
                    <BottomTab.Screen 
                        name="first"
                        component={ FirstTab }
                        options={{                            
                            tabBarLabel : "첫번째",
                            tabBarIcon : ()=> <Image source={ require('./icons/RN_logo.png')} style= { {width:24, height:24} }></Image>,                            
                            tabBarBadge : "new"
                        }}>
                    </BottomTab.Screen>

                    {/* 2.4.4 해당 컴포넌트 js에서 this.props.navigation.setOptions() 통해 옵션 지정해 보기 - SecondTab.js에서 작업 */}
                    <BottomTab.Screen name="second" component={ SecondTab } ></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={ ThirdTab } ></BottomTab.Screen>                                        
                </BottomTab.Navigator>

            </NavigationContainer>
        );
    }
}