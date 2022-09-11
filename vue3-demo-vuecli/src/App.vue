<template>
	<!-- 可以存在多个标签共存 -->
	<div>{{name}}</div>
	<div>{{age}}</div>
</template>

<script>
	export default {
		name: 'App',
		setup() {
			let name = '陈平安'
			let age = '20'
			
			return {
				name,
				age,
			}
		}
	}
</script>


