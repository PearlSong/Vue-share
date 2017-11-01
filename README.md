# 学习vue小记
### 第一个vue应用
### 数据绑定
- 实例：通过构造函数Vue就可以创建一个Vue实例。new Vue()
- 数据：Vue实例中的data
- 数据绑定：v-model指令的值对应Vue实例的data中的字段，就是数据绑定
- 生命周期：每个Vue实例创建时，都会经历一系列的初始化过程，同时也会调用相应的生命周期钩子，这些钩子在合适的时机执行相应的业务逻。钩子：beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、activated、deactivated、beforeDestroy、destroyed、errorCaptured
- 过滤器：支持在{{}}插值的尾部添加一个管道符'（｜）'对数据进行过滤，经常用于格式化文本
### 计算属性
- 所有的计算属性都以函数的形式写在Vue实例内的computed选项内，最终返回计算后的结果
- 计算属性有两个很实用的小技巧use3中有写到，1、计算属性可以依赖其他计算属性；2、计算属性不仅可以依赖当前实例的数据，还可以依赖其他实例的数据

### 在组建上应用v-bind
- 7、class2.3.html中的用法只适用于自定义组件的最外层是一个跟元素，否则会无效，当需要给具体的子元素设置类名时，应当使用组件的props来传递