# vue3-demo-vuecli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





# vue3新特性



1. 在template模板中，不会像vue2中一样只能存在一个根标签。
2. `main.js`引用的`createApp`工厂函数，体积比`vue2`更小
3. `Composition API` (组合式 `API`)
   - `setup`配置
   - `ref`与`reactive`
   - `watch` 与 `watchEffect`
   - `provide`与`inject`
   - ...
4. 新的内置组件
   - `Fragment`
   - `Teleport`
   - `Suspense`
5. 其他改变
   - 新的生命周期钩子
   - data 选项应始终被声明为一个函数
   - 移除`keyCode`支持作为`v-on`的修饰符
   - ....



## 1.拉开序幕的setup

1. 理解：`Vue3.0`中一个新的配置项，值为一个函数

2. `setup` 是所有<font color=red>Composition API（组合API）</font>“表演的舞台”

3. 组件中所用到的：数据、方法等等，均要配置在`setup`中

4. setup函数的两种返回值：

   1. 若返回一个对象，则对象中的属性、方法、在模板中均可以直接使用。<font color=red>（重点）</font>

   2. 若返回一个渲染函数：则可以自定义渲染内容

   3. ```
      // 引用渲染函数 h
      import {h} from 'vue'
      
      // 返回一个渲染函数
      return ()=>{
      	return h('h1','你好呀！李银河')
      }
      ```

      

5. <font color=red>注意点：</font>

   1. 尽量不要与`Vue2.0`配置混用
      - `Vue2.0`配置（data、methods、computed）中可以访问`setup`中的属性、方法。
      - 但是在`setup`中不能访问到`Vue2`配置（data、methods、computed）。
      - 如果`Vue2.0`中配置的数据或是方法与`Vue3.0`有重名，则`Vue3.0`优先
   2. `setup`不能是一个`async`函数,因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性





## 2.`ref`函数

- 作用：定义一个响应式数据
- 语法：`const xxx = ref(initValue)`
  - 创建一个包含响应式数据的<font color=red>引用对象（reference）</font>
  - `JS`中操作数据 `xxx.value`
  - 模板中读取数据： 不需要`xxx.value`,直接：`<div>{{xxx}}</div>`
- <font color=green>备注</font>
  - 接收的数据（`initValue`）可以是: 基本类型、也可以是对象类型。
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`和`set`完成的。
  - 对象类型的数据：内部是引用了`vue3`中的`reactive`函数



## 3.`reactive`函数

- 作用：定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）

```
javaScript共有7种基本类型：string，number，bigint，boolean，null，undefined，symbol
```

- 语法：`const 代理对象 = reactive(原对象)`接收一个对象（或数组），返回一个代理对象（proxy对象）
- reactive定义的响应式数据是”深层次的“
- 内部基于`ES6`的Proxy实现，通过代理对象操作原对象内部数据进行操作

```js
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
			function setProsen(){
				console.log(person)
				person.name = '崔巉'
				person.age = 30
				person.a.b.c += 100
				person.hobby[0]="打球"
                // 在 vue2是不能通过数组的索引值去改变值，但是vue3可以
			}
			//返回一个对象
			return {
				person,
				setProsen
			}
		}
	}
```

