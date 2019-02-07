// 전역 컴포넌트인 child-component에 props 속성을 전달하여
// 하위 컴포넌트에서 상위 컴포넌트의 메시지를 출력해보세요.


// 할일 #1
// sibling-component 를 이름으로 갖는 새로운 전역 컴포넌트를 아래에 등록해보세요.
// options : template, props 속성 추가하기
Vue.component('sibling-component', {
  props: ['propsdata2'],
  template: '<p>{{ propsdata2 }}</p>'
});

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue! passed from Parent Component',

    // 할일 #2

    // 데이터 속성 추가하기: sibling-component에 props 속성으로 내려보낼 데이터 속성
    // anotherMessage를 하나 추가합니다.

    // data 속성을 1개 더 지정하고 (예: anotherMessage) 임의의 문자열을 값으로 대입해보세요.
    // 새로 지정한 data 속성은 위 sibling-component에 props로 전달합니다.
    anotherMessage: 'ihyun'

  }
});
