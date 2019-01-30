import Vue from 'vue'
const requireComponent = require.context(
  // 其组件目录的相对路径
  '../pages/articles',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[\w-]+\.md$/
)

requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
  // console.log(fileName)
  // console.log(componentName)
  Vue.component(componentName, componentConfig.default || componentConfig);
})
