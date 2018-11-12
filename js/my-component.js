// 注册组件
Vue.component('my-component', {})
// 创建根实例
new Vue({
  el: '#footer',
  template: '<div v-html="content"></div>',
  data:{
  	content:"<h1>THIS IS MY FIRST COMPONENT</h1>",
  },
})