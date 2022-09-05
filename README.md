# vue3.0 全家桶学习
vuex 4.0
vue router 4.0
vue cli 5.0



<!-- 如果你之前用的是vue2.0，那么需要删除（没有则跳过第一步）npm uni -g vue-cli -->
建议安装 淘宝镜像真的很快 npm install -g cnpm --registry=https://registry.npmmirror.com
查看cnpm 是否安装成功 cnpm -v

1.安装 vue cli 

命令 npm install -g @vue/cli 或 cnpm install -g @vue/cli 安装后查看版本  

vue --version  @vue/cli 4.5.11

2.创建 vue 3.0项目
命令 vue create vue3-demo

3.项目配置选项
 Please pick a preset: (Use arrow keys)
> Default ([Vue 3] babel, eslint)       
  Default ([Vue 2] babel, eslint)       
  Manually select features

直接选择 vue3.0模板

4.切换文件路径，后cnpm run serve

若运行cnpm时出现 系统上禁止运行脚本 
解决操作步骤 
1：win + x 打开Windows PowerShell(以管理员身份) 然后输入 get-executionpolicy 查询状态 显示Restricted，表示状态是禁止的 
2: 输入 执行set-ExecutionPolicy RemoteSigned  在输入 Y 同意
3：再执行get-ExecutionPolicy查看状态，显示RemoteSigned，表示允许状态

