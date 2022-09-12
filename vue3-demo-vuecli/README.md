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

