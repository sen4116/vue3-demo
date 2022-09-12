<template>
	<!-- 可以存在多个标签共存 -->
	<h1>vue3中的组合式写法</h1>
	<div>{{name}}</div>
	<div>{{age}}</div>
	<button @click="sayProsen">调用Vue3中setup的方法</button>
	<br>
	<br>
	<h1>vue2中的选项式写法</h1>
	<div>{{sex}}</div>
	<div>{{num}}</div>
	<button @click="setNum">num ++</button>
	<h1>vue3 和 vue2 方法互相调用</h1>
	<button @click="callVue3">此处vue3调用vue2中方法</button>
	<br>
	<br>
	<button @click="callVue2">此处vue2调用vue3中方法</button>
</template>

<script>
import {h} from 'vue'
	export default {
		name: 'App',
		data() {
			return {
				sex:'男',
				num: 1
			}
		},
		methods:{
			setNum(){
				this.num++
			},
			callVue3(){
				this.sayProsen()
			}
		},
		// 测试 vue3的 setup 不考虑数据双向绑定
		setup() {
			let name = '陈平安'
			let age = '20'
			function sayProsen(){
				alert(`我叫${name},已经${age}岁了`)
			}
			let _this = this
			function callVue2(){
				_this.callVue2()
			}
			let num = 2
			// 返回一个对象
			// return {
			// 	num,
			// 	name,
			// 	age,
			// 	sayProsen
			// }


			// 返回一个渲染函数
			return ()=>{
				return h('h1','你好呀！李银河')
			}
		}
	}
</script>


