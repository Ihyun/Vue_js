// 실습 #1 - `todo-footer` 컴포넌트 전역 등록
// <p>This is another child global component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.
Vue.component('todo-footer', {
  template: "<p>This is another child global component</p>"
});


// 틀림. new Vue 를 지울것. 소괄호 없앨것.
var cmp = new Vue({
  template: "<p>This is another child local component</p>"
});
// 답안
// var cmp = {
// 	template: '<p>This is another local child component</p>'
// };


var app = new Vue({
  el: '#app',
  data: {
    message : 'This is a parent component'
  },

  // 실습 #2 - `todo-list` 컴포넌트 지역 등록
  // <p>This is another child local component</p> 를 template 으로 갖는 컴포넌트를 등록해보세요.



  // 틀림. = 을 : 로 바꿀것.
  components={
    todo-list = cmp

  }

  //답안
  // components: {
  //   'todo-list': cmp
  // }
});
