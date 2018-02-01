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
### 内置指令
- v-if和v-show有类似的功能；v－if事真正的条件渲染，根据表达式适当的销毁或重建元素及绑定的事件或子组件；若表达式的初始值为false，则一开始元素／组件并不会渲染，只有条件第一次为真时才开始编译。v－show是简单的css属性切换，无论条件是否为真，都会编译。所以v－show适用于频繁切换条件，v－if更适合不经常改变的场景
### 数组更新
- vue的核心是双向数据绑定，改变数组时，vue会检测到数组变化，所以用v－for渲染的试图也会立即更新。
- vue包含了一组观察数组变异的方法，使用它们改变数组也会触发试图更新：push(),pop(),shift(),unshift(),splice(),sort(),reverse();
- 以下方法不会改变原数组：filter(),concat(),slice()
- vue在检测到数组变化时，并不是直接重新渲染整个列表，而是最大的复用DOM元素，替换的数组中，含有相同元素的项不会被重新渲染，可以用新数组替换旧数组不用担心性能问题
- 通过索引直接设置项和修改数组长度，这些方式操作数组vue是不能检测到的，不会触发视图更新。
- 如果不想改变原数组，可以使用计算属性来返回过滤或排序后的数组。
### 方法与事件
- 修饰符 .stop .prevent .capture .self .once
- 按键修饰符 .enter .tab .delete .esc .space .up .down .left .right .ctrl .alt .shift .meta
###
-
-