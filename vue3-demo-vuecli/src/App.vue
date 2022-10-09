<template>
	<h2>{{person.name}}</h2>
	<h2>{{person.age}}岁</h2>
	<h2>{{person.a.b.c}}</h2>
	<h2 v-show = "person.sex">{{person.sex}}</h2>
	<div>
		<h3>爱好</h3>
		<ul>
			<li v-for="(item,index) in person.hobby" :key="index">{{item}}</li>
		</ul>
	</div>
	<button @click="setProsen">修改人物信息</button><br>
	<button @click="setProsenSex">添加性别</button>
	<button @click="deleteProsenSex">删除性别</button>
</template>

<script>
import {ref,reactive} from 'vue'
	export default {
		setup() {
			let person = reactive({
				name : '陈平安',
				age: 18,
				a:{
					b:{
						c:100
					}
				},
				hobby:['抽烟','喝酒','烫头']
			})
			function setProsen () {
				console.log(person)
				person.name = '崔巉'
				person.age = 30
				person.a.b.c += 100
				person.hobby[0]="打球"
			}
			function setProsenSex () {
				person.sex = '男'
			}
			function deleteProsenSex () {
				delete	person.sex
			}
			//返回一个对象
			return {
				person,
				setProsen,
				setProsenSex,
				deleteProsenSex
			}
		}
	}
</script>


