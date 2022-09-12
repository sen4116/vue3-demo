<template>
	<h2>{{name}}</h2>
	<h2>{{age}}</h2>
	<button @click="setProsen">修改人物信息</button>
</template>

<script>
import {ref} from 'vue'
	export default {
		setup() {
			let name = ref('陈平安')
			let age = ref('20')
			function setProsen(){
				name.value = '崔巉'
				age.value = 30
			}
			//返回一个对象
			return {
				name,
				age,
				setProsen
			}
		}
	}
</script>


