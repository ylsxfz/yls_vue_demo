import Vue from 'vue'

// 注意 有些组件使用异步加载会有影响
// 高亮组件
Vue.component('sys-container', () => import('./sys-container'))
Vue.component('d2Source', () => import('./sys-container/components/d2-source'))
// 图标组件
Vue.component('sys-icon', () => import('./sys-icon'))
Vue.component('sys-icon-select', () => import('./sys-icon-select'))
Vue.component('sys-icon-svg', () => import('./sys-icon-svg'))
Vue.component('sys-icon-svg-select', () => import('./sys-icon-svg-select'))
// 高亮组件
Vue.component('sys-highlight', () => import('./sys-highlight'))

// 编辑器组件
Vue.component('sys-quill', () => import('./sys-quill'))
Vue.component('sys-ueditor', () => import('./sys-ueditor'))
Vue.component('sys-mde', () => import('./sys-mde'))
