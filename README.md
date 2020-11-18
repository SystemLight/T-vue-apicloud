# T-vue-apicloud

T-vue-apicloud集成vue和vant库允许你在apicloud平台进行更友好的Native开发，该模板项目将提供充分类型提示功能。

## 获取方法

注意本地启动浏览器启动服务只是对页面样式进行浏览，任何apicloud平台的接口都会失效

```
https://github.com/SystemLight/T-vue-apicloud.git
无需运行 npm install
启动之前确保全局安装了live-server，没有安装运行npm install live-server -g
启动服务 npm run start
```

## 注意
T-vue-apicloud使用的是传统多页面非打包模式进行开发，为了提示友好保留了node_modules中类型文件，
请不要使用npm指令安装任何其它模块，.gitignore默认是将node_modules包加入版本管理项的。

## 目录结构

|  文件名   | 作用  |
|  :----  | :----  |
| node_modules  | 仅仅包含所需类型文件，真是使用库在views/lib文件夹下 |
| apicloud  | 包含apicloud平台下的类型文件 |
| views  | 所有页面都放置在这个目录下 |
| package.json  | 前端工程化依赖管理配置文件 |

## 技术栈

#### 开发依赖

- [x] apicloud
- [ ] typescript
- [ ] webpack
- [ ] eslint
- [ ] jest

#### 生产依赖

- [x] vue
    - [ ] vue-router
    - [ ] vuex
- [x] vant
- [ ] less
- [ ] axios
- [ ] qs
- [ ] lodash
