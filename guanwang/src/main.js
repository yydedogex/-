// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import layout from './components/layout'
import IndexPage from './pages/index'
import ParkPage from './pages/park_wisdom'
import IndustryPage from './pages/industry_wisdom'
import AboutPage from './pages/about'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// //按需引入element-ui组件
// import { Carousel } from 'element-ui'

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
let router = new VueRouter({
	mode:'history',
	routes:[
		{	path: '/', 
			redirect: 'index'//redirect路由重定向，意思是让第一次加载时候，路由就指向index
		},
		{
			path:'/index',
			component: IndexPage
		},
		{
			path:'/park',
			component:ParkPage
		},
		{
			path:'/industry',
			component:IndustryPage
		},
		{
			path:'/about',
			component:AboutPage
		}
	],linkActiveClass: 'active'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,/*将router放入根节点实例化对象里面*/
  components: { layout },
  template: '<layout/>'
})

