// 引用vue3下面createApp的工厂函数
import { createApp } from 'vue'

import App from './App.vue'

// 将app组件挂载在目标对象
createApp(App).mount('#app')
