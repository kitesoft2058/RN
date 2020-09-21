import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            text: "",

            // 5.2실습에서 사용할 facebook의 샘플 movies.json의 movies데이터 배열
            movies: [],
        }
    }

    render(){
        return (
            <View style={ styles.root }>                
                <Button title="fetch data from network" onPress={ this.fetchData }></Button>

                {/* 네트워크로 읽어온 데이터를 출력하기위한 Text컴포넌트 - 데이터가 갱신되어야 하므로 this.state멤버 사용 */}
                {/* 데이터의 길이가 길 수 있으므로 ScrollView : ScrollView의 height은 기본적으로 flex:1 이어서 안의 내용물과 상관없이 화면의 남은 공간을 다 차지함  : wrap으로 하고 싶다면 View로 감싸야함*/}
                <View>
                    <ScrollView style={ {marginTop:16, backgroundColor:'gray'} } >
                        <Text style={ {padding:8, color:'white'} }> {this.state.text} </Text>
                    </ScrollView>
                </View> 

                {/*5.2실습을 보여 줄 때 소개 Horizontal ScrollView : horizontal속성만 추가하면 됨. */}
                {/* <View>
                    <ScrollView style={ {marginTop:16, backgroundColor:'gray', marginBottom:16} } horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={ {padding:8, color:'white'} }> {this.state.text} </Text>
                        <Text style={ {padding:8, color:'white'} }> {this.state.text} </Text>
                        <Text style={ {padding:8, color:'white'} }> {this.state.text} </Text>
                        <Text style={ {padding:8, color:'white'} }> {this.state.text} </Text>
                    </ScrollView>
                </View>     */}


                {/* 5.2실습에서 사용할 json파싱한 movies배열의 데이터를 출력하는 코드 */}
                {/* {
                    this.state.movies.map( (value, index)=>{
                        return (
                            <View key={ index } style= { {flexDirection:'row'} }>
                                <Text> {value.id} </Text>
                                <Text> {value.title} </Text>
                                <Text> {value.releaseYear} </Text>
                            </View>
                        )
                    })
                } */}
            </View>
        );
    }//render method..

    //네트워크 작업 메소드
    fetchData=()=>{
        console.log('fetch...');
        //1. Javascript의 XMLHttpRequest객체 사용하기
        let request= new XMLHttpRequest();

        request.onreadystatechange= ()=>{            
            if( request.readyState==4 && request.status==200){
                //alert( request.responseText );
                // Text컴포넌트가 보여주는 Data변경[state객체]
                this.setState({text: request.responseText});
            }
        };
        
        request.open('GET', 'http://mrhi2018.dothome.co.kr/index.js'); // .html문서는 'unexpected end of stream' 에러가 남.. 2020년 9월 버전에서는 될때도 있음(html은 버그 좀 있음)
        request.send();         
        
        // onreadystatechange()메소드의 호출위치가 send()보다 먼저 있어야 하는 등. 코드가 불편하고 식별이 난해할 수 있다는 단점이 있음. 
        // 또한, 콜백지옥이라고 해서 onreadystatechanege안에서 또 다시 비동기식 처리를 하고 또 다시 해야 할 때는 그 작업이 매우 복잡하고 해석이 난해함.

        
        //2. fetch()함수 : Jquery의 ajax()와 같은 역할을 하는 함수 [ React프레임워크에 기본적으로 포함되어 있음. ] - fetch는 html도 됨..단, reject되는 경우가 많음. 즉, '경고표시' 
        // 프로미스[ promiss :약속 ] 문법 - 비동기처리시에 처리가 끝났을 때 해야하는 작업을 할때 유용함.
        // .then() 메소드 : 비동기 처리가 끝나면 자동으로 파라미터로 전달된 함수를 실행하도록 약속(promiss)한 개념.
        //           [위 XMLHttpRequest의 onreadystatechange와 비슷함]- 작성위치나 식별성 결과객체등을 제어하는 것이 수월하여 promiss가 더 선호됨.  

        //fetch('http://mrhi2018.dothome.co.kr/index.js').then( ( response )=>{ alert( response.status  ) }  ); // 경고창 결과 : 200 이면 OK

        // 2.1 fetch()의 결과 문자열을 받으려면.
        // fetch('http://mrhi2018.dothome.co.kr/index.js')
        // .then( (response)=>{
        //     //응답 response객체로 부터 결과물을 text 문자열로 변환해달라는 작업요청[비동식처리] 하고 결과를 리턴해주면 다음 .then()에서 실행하도록 약속[promiss]하여 콜백함수 실행
        //     return response.text();
        // })
        // .then( ( responseText )=>{ 
        //     //파라미터 : 위에서 response.text()로 변환된 결과 문자열데이터
        //     // 변환된 string응답을 Text컴포넌트에 출력하기 위해  this.state.text값 변경
        //     this.setState( {text:responseText} );
        // });

        //2.2 promiss .then()를 통해 비동기식 처리를 하던 중 에러가 발생하면?? 이를 캐치하고자 할 때 .catch()메소드 사용 
        // .then() 작업 중 문법에러 !!
        // fetch('http://mrhi2018.dothome.co.kr/index.js')
        // .then( (response)=>{

        //     // .then() 작업 중 문법에러 !! .catch()로 빠짐. 즉, .then()은 자동 try 예외처리 !!!!!!!!!!!!!!!!!!!!!
        //     aaa(); //존재하지 않는 함수 호출!!
        //     // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


        //     //응답 response객체로 부터 결과물을 text 문자열로 변환해달라는 작업요청[비동식처리] 하고 결과를 리턴해주면 다음 .then()에서 실행하도록 약속[promiss]하여 콜백함수 실행
        //     return response.text();
        // })
        // .then( ( responseText )=>{             
        //     //파라미터 : 위에서 response.text()로 변환된 결과 문자열데이터
        //     // 변환된 string응답을 Text컴포넌트에 출력하기 위해  this.state.text값 변경
        //     this.setState( {text:responseText} );
        // })
        // .catch( (error)=>{ // .then()작업 중 에러가 발생하면 .catch()의 콜백함수가 호출됨.
        //     alert( error );
        // } );


        //3. 일반 텍스트 문서도 읽어옴.
        // fetch('http://mrhi2018.dothome.co.kr/test.txt')
        // .then( (response)=>{
        //     return response.text();
        // })
        // .then( ( responseText )=>{
        //     this.setState( {text:responseText} );
        // })
        // .catch( (error)=>{
        //     alert( error );
        // } );

        //4. 첫번째 .then()의 response.text() 결과 한줄만 실행하면 되므로.. 보통 {}와 return, ; 을 생략함
        // fetch('http://mrhi2019.dothome.co.kr/test.txt')
        // .then( (response)=> response.text() ).then( ( responseText )=>{this.setState( {text:responseText} ); }).catch( (error)=>{alert( error );} );


        //5. JSON문서 파싱하기 [ open API ]
        // 공공 open API들은 html/txt문서보다는 XML or JSON 문서가 더 많음. 요즘은 json이 대세이기도 하고 xml파싱을 별도 라이브러리를 추가해야 해서. json문서 파싱해보기
        
        //5.1 우선 facebook에서 샘플로 제공하는 json파일 이용해 보기  [ https://facebook.github.io/react-native/movies.json : 크롬 브라우저를 이용해서 이 URL의 문서 보기 ]
        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then((response)=> response.text())
        // .then((responseText)=>{ this.setState({text:responseText}); })
        // .catch((error)=>{alert(error);});

        // 글씨로 받아지기는 하는데 그럼 그 안에 데이터를 분석(parsing)하기가 어렵겠죠.
        // 그래서 json문자열을 JSONObject로 변환하여 파싱하는 것이 필요함. fetch()에 이 기능메소드가 있음.
        
        //5.2 json파싱하기 [ response.text() -> response.json()]
        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then((response)=> response.json())
        // .then((responseJson)=>{
        //     //responseJson 파라미터 : Json문자열을 파싱한 JSON객체
        //     let title = responseJson.title;  //Json객체의 "title"키를 가진 데이터의 값
        //     this.setState( {text:title});

        //     //이런식으로 데이터들을 가져올 수 있음.
        //     // movies.json의 "movies"프로퍼티의 배열데이터들이 영화리스트 데이터배열이니 이를 this.state멤버에 저장하여 화면에 표시 [화면표시를 위해 render() 수정]
        //     this.setState( {movies: responseJson.movies} );
            
        // })
        // .catch((error)=>{alert(error);});


        //6. 서버스크립트인 php와 HTTP Request하기
        
        //6.1 [GET]방식 - 특별할 것 없음, 주소 뒤에 ? 하고 파라미터를 [키/벨류] 쌍으로 추가하면 되므로.. 기존 방식과 같음
        // php폴더만들고 getMethod.php문서 스크립트 [php_files폴더에 php코드들 보관- 호스트서버에 업로드]

        // let name= "sam";
        // let msg= "Hello";
        // fetch(`http://mrhi2019.dothome.co.kr/getMethod.php?name=${name}&msg=${msg}`)
        // .then( (response)=>{
        //     return response.text();
        // })
        // .then( ( responseText )=>{
        //     this.setState( {text:responseText} );
        // })
        // .catch( (error)=>{
        //     alert( error );
        // });


        //6.2 [POST]방식 | fetch()메소드의 파라미터에 url과 추가로 Request Options을 지정
        // php폴더안에 postMethod.php문서 스크립트

        // let name= "robin";
        // let msg= "Nice Fetch API";
        // let data= "name="+name+"&"+"msg="+msg;
        // fetch('http://mrhi2019.dothome.co.kr/postMethod.php',{
        //     method:'POST',
        //     headers:{
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body:data,
        // })
        // .then( (response)=> response.text() )
        // .then( ( responseText )=>{
        //     this.setState( {text:responseText} );
        // })
        // .catch( (error)=>{
        //     alert( error );
        // });



        //7. HTTP 통신을 할 때 서버로부터의 응답 데이터를 json을 받으면 데이터 항목별 처리가 수월했듯이
        //    post로 데이터를 보낼 때도 json으로 만들어서 보내고 json으로 응답을 받는 형태가 요즘은 기본적임.
        // php폴더안에 jsonRequest.php문서 스크립트
        
        // 보낼 데이터 객체[data들이 변수로 있는 경우보다 객체로 있는 경우가 많음]
        // let dataObj= {name:"son", msg:"Hello world", age:20};

        // fetch('http://mrhi2019.dothome.co.kr/jsonRequest.php',{
        //     method:'POST',
        //     headers:{
        //         "Content-Type": "application/json" //보낼 데이터가 json임을 헤더에 설정
        //     },
        //     body: JSON.stringify(dataObj),   //javascript객체를 json문자열로 변환
        // })
        // .then( (response)=> response.text() )
        // .then( ( responseText )=>{
        //     this.setState( {text:responseText} );
        // })
        // .catch( (error)=>{
        //     alert( error );
        // });

        //7.2) echo로 받은 json문자열 파싱하기 [php는 최종 json문자열 echo만 남겨 두도록 수정]
        // fetch('http://mrhi2019.dothome.co.kr/jsonRequest.php',{
        //     method:'POST',
        //     headers:{
        //         "Content-Type": "application/json" //보낼 데이터가 json임을 헤더에 설정
        //     },
        //     body: JSON.stringify(dataObj),   //javascript객체를 json문자열로 변환
        // })
        // .then( (response)=> response.json() )
        // .then( ( responseJson )=>{
            
        //     let name= responseJson.name;
        //     let msg= responseJson.msg;
        //     let age= responseJson.age;

        //     this.setState( {text: name+", "+msg+", "+age} );
        // })
        // .catch( (error)=>{
        //     alert( error );
        // });

    }

}//Main class..


//스타일 객체
const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    }
});



//별외.. #################################################################################################################

// 영화진흥위원회 open API에서 제공하는 1일 boxoffice json파일
// fetch('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20190512')
//     .then((response) => response.json())
//     .then((responseJson) => {
//         alert( responseJson.boxOfficeResult.dailyBoxOfficeList[0].movieNm );
//     })
//     .catch((error) => {
//         console.error(error);
//     });
            


//응답객체의 속성 알아보기
// fetch("http://mrhi2019.dothome.co.kr/test.txt")
// .then( ( response )=>{            
//     alert( response.type +" : "+ response.url );            
// }).then( (text)=>{           
// });

//############################################################################################################################